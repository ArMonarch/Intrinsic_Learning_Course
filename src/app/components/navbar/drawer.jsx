"use client";
import { ChevronRight } from "lucide-react";
import { useState } from "react";

export function Drawer(props) {
  return (
    <div className="flex">
      <input
        type="checkbox"
        id="drawer-toggle"
        onChange={props.handleCheck}
        className="relative sr-only peer"
      />
      <label
        htmlFor="drawer-toggle"
        className="absolute left-3 inline-block bg-background p-2 rounded-sm border transition-all duration-500 peer-checked:rotate-180 peer-checked:left-80"
      >
        <ChevronRight />
      </label>

      <div className="fixed top-0 left-0 z-0 w-80 h-full transition-all duration-500 transform -translate-x-full bg-muted peer-checked:translate-x-0">
        {/* <div className="px-6 py-4"></div> */}
      </div>
    </div>
  );
}
