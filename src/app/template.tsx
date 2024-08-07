"use client";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { usePathname } from "next/navigation";

const Template = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  return (
    <AnimatePresence mode="wait">
      <div key={pathname}>
        <motion.div
          initial={{ opacity: 1 }}
          animate={{
            opacity: 0,
            transition: { delay: 1, duration: 0.4, ease: "easeInOut" },
          }}
          className="h-screen w-screen fixed bg-primary top-0 pointer-events-none z-10"
        />
        {children}
      </div>
    </AnimatePresence>
  );
};

export default Template;
