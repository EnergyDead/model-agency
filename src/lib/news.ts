export type RawNews = {
    id?: number | string;
    title?: string;
    category?: string;
    tag?: string;
    tags?: string[] | string;
    date?: string;
    summary?: string;
    excerpt?: string;
    description?: string;
    content?: string;
    body?: string;
    image?: string;
    cover?: string;
    source?: string;
    brand?: string;
    link?: string;
    url?: string;
};

export type NewsItem = {
    id: number;
    title: string;
    category: string;
    date?: string;
    excerpt: string;
    content: string;
    image?: string;
    source?: string;
    link?: string;
};

let cachedNews: NewsItem[] | null = null;

const newsFiles = import.meta.glob("../../news/*.json", { eager: true });

function ensureString(value: unknown): string | undefined {
    if (typeof value === "string" && value.trim()) {
        return value.trim();
    }
    return undefined;
}

function parseId(path: string, rawId?: number | string): number {
    if (typeof rawId === "number" && Number.isFinite(rawId)) {
        return rawId;
    }

    if (typeof rawId === "string" && /^\d+$/.test(rawId.trim())) {
        return Number(rawId);
    }

    const match = path.match(/news\/(\d+)\.json$/);
    return match ? Number(match[1]) : Math.floor(Math.random() * 10_000_000);
}

function deriveCategory(raw: RawNews): string {
    const fromTags =
        Array.isArray(raw.tags) && raw.tags.length > 0
            ? raw.tags[0]
            : typeof raw.tags === "string"
              ? raw.tags
              : undefined;

    return (
        ensureString(raw.category) ??
        ensureString(raw.tag) ??
        ensureString(fromTags) ??
        "NEWS"
    ).toUpperCase();
}

function deriveContent(raw: RawNews): string {
    const content =
        ensureString(raw.content) ??
        ensureString(raw.body) ??
        ensureString(raw.description) ??
        ensureString(raw.summary) ??
        "";
    return content.trim();
}

function createExcerpt(raw: RawNews, fallbackContent: string): string {
    const excerpt =
        ensureString(raw.excerpt) ??
        ensureString(raw.summary) ??
        ensureString(raw.description);

    const source = excerpt ?? fallbackContent;
    const normalized = source.replace(/\s+/g, " ").trim();

    if (normalized.length <= 220) {
        return normalized;
    }

    return `${normalized.slice(0, 217).trimEnd()}…`;
}

function normalizeNews(path: string, moduleData: unknown): NewsItem {
    const raw: RawNews =
        (moduleData as { default?: RawNews })?.default ?? (moduleData as RawNews);

    const id = parseId(path, raw.id);
    const title = ensureString(raw.title) ?? "Untitled";
    const category = deriveCategory(raw);
    const content = deriveContent(raw);
    const excerpt = createExcerpt(raw, content);
    const date = ensureString(raw.date);
    const image = ensureString(raw.image) ?? ensureString(raw.cover);
    const source = ensureString(raw.source) ?? ensureString(raw.brand);
    const link = ensureString(raw.link) ?? ensureString(raw.url);

    return {
        id,
        title,
        category,
        date,
        excerpt,
        content: content || excerpt,
        image,
        source,
        link,
    };
}

function sortNews(items: NewsItem[]): NewsItem[] {
    return [...items].sort((a, b) => {
        const aDate = a.date ? Date.parse(a.date) : 0;
        const bDate = b.date ? Date.parse(b.date) : 0;

        if (aDate !== bDate) {
            return bDate - aDate;
        }

        return b.id - a.id;
    });
}

export function loadAllNews(): NewsItem[] {
    if (cachedNews) {
        return cachedNews;
    }

    const normalized = Object.entries(newsFiles).map(([path, moduleData]) =>
        normalizeNews(path, moduleData),
    );

    cachedNews = sortNews(normalized);
    return cachedNews;
}

export function findNewsById(id: number): NewsItem | undefined {
    return loadAllNews().find((item) => item.id === id);
}
