"use client";

import { motion } from "framer-motion";
import type { PropsWithChildren } from "react";

interface AnimatedSectionProps extends PropsWithChildren {
    className?: string;
}

export default function AnimatedSection({ children, className = "" }: AnimatedSectionProps) {
    return (
        <motion.section
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className={className}
        >
            {children}
        </motion.section>
    );
}
