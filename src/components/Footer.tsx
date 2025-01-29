"use client";
import React from "react";

export const Footer = () => {
  return (
    <div className="p-4 text-center justify-center text-lg border-t text-gray-400">
      <span className="font-semibold">{new Date().getFullYear()} </span>
      &#8212; Built by Mohd Shoaib
    </div>
  );
};
