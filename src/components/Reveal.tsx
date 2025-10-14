import { motion } from "motion/react";
import type { HTMLMotionProps } from "motion/react";

type RevealProps = HTMLMotionProps<"div"> & {
    delay?: number;
    once?: boolean;
};

const springEase = [0.16, 1, 0.3, 1] as const;

export default function Reveal({
    children,
    delay = 0,
    once = true,
    initial = { opacity: 0, y: 40 },
    whileInView = { opacity: 1, y: 0 },
    transition,
    viewport,
    ...props
}: RevealProps) {
    return (
        <motion.div
            initial={initial}
            whileInView={whileInView}
            transition={{ duration: 0.9, ease: springEase, delay, ...transition }}
            viewport={{ amount: 0.3, once, ...viewport }}
            {...props}
        >
            {children}
        </motion.div>
    );
}

