"use client";
import { motion } from "framer-motion";

export function Logo() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="w-24 h-24 relative animate-float"
    >
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <g className="animate-pulse">
          <path
            d="M50 10C27.909 10 10 27.909 10 50s17.909 40 40 40 40-17.909 40-40S72.091 10 50 10z"
            stroke="url(#paint0_linear)"
            strokeWidth="2"
          />
          <path
            d="M50 25c-13.807 0-25 11.193-25 25s11.193 25 25 25 25-11.193 25-25S63.807 25 50 25z"
            stroke="url(#paint1_linear)"
            strokeWidth="2"
          />
          <path
            d="M50 40c-5.523 0-10 4.477-10 10s4.477 10 10 10 10-4.477 10-10S55.523 40 50 40z"
            fill="url(#paint2_linear)"
          />
          <path
            d="M85 50H65M35 50H15M50 15v20M50 65v20"
            stroke="url(#paint3_linear)"
            strokeWidth="2"
          />
        </g>
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="10"
            y1="50"
            x2="90"
            y2="50"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#1ABEDF" />
            <stop offset="1" stopColor="#00F5D4" />
          </linearGradient>
          <linearGradient
            id="paint1_linear"
            x1="25"
            y1="50"
            x2="75"
            y2="50"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#1ABEDF" />
            <stop offset="1" stopColor="#00F5D4" />
          </linearGradient>
          <linearGradient
            id="paint2_linear"
            x1="40"
            y1="50"
            x2="60"
            y2="50"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#1ABEDF" />
            <stop offset="1" stopColor="#00F5D4" />
          </linearGradient>
          <linearGradient
            id="paint3_linear"
            x1="15"
            y1="50"
            x2="85"
            y2="50"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#1ABEDF" />
            <stop offset="1" stopColor="#00F5D4" />
          </linearGradient>
        </defs>
      </svg>
    </motion.div>
  );
}