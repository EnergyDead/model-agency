type NewsCardProps = {
    title: string;
    excerpt: string;
};

export default function NewsCard({ title, excerpt }: NewsCardProps) {
    return (
        <article className="news-card">
            <h2 className="news-card__title">{title}</h2>
            <p className="news-card__excerpt">{excerpt}</p>
        </article>
    );
}
