"use client";

import React from "react";
import { motion } from "motion/react";

const gradientClass =
  "bg-gradient-to-b from-[#E44F1D] via-[#F68D22] to-[#FCB427] bg-clip-text text-transparent";

function D_F_Text() {
  return (
    <div className="flex w-120 flex-col items-center overflow-visible font-love-light text-5xl font-bold gap-0">
      {/* 1. Dungeon 먼저 등장 */}
      <motion.p
        className={`-mb-8 flex w-full items-center justify-start overflow-visible pb-8 font-love-light text-8xl font-bold ${gradientClass}`}
        initial={{ opacity: 0, x: -24 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        Dungeon
      </motion.p>

      <div className="-mb-12 flex w-full flex-row items-center justify-end gap-4 overflow-visible pb-8">
        {/* 2. & 가 총알처럼 박힌 후 */}
        <motion.p
          className={`overflow-visible font-love-light text-5xl font-bold ${gradientClass}`}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 18,
            delay: 0.45,
          }}
        >
          &
        </motion.p>
        {/* 3. Fighter 등장 */}
        <motion.p
          className={`-mb-10 overflow-visible pb-8 font-love-light text-8xl font-bold ${gradientClass}`}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, ease: "easeOut", delay: 0.75 }}
        >
          Fighter
        </motion.p>
      </div>

      <motion.p
        className="flex w-full justify-end font-love-light text-5xl font-bold"
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 1.05 }}
      >
        mobile
      </motion.p>
    </div>
  );
}

export default D_F_Text;