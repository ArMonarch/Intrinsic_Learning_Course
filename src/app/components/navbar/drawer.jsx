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
        className="hidden peer"
      />

      <label
        htmlFor="drawer-toggle"
        className="absolute left-0 top-3 z-10 inline-block bg-muted p-2 transition-transormation duration-500 hover:text-primary hover:cursor-pointer peer-checked:text-primary group peer-checked:left-80"
      >
        <text
          variant="ghost"
          className="absolute z-10 left-10 top-0 text-3xl font-extrabold"
        >
          Learn
        </text>
        <ChevronRight className="peer-checked:group-[]:rotate-180 transition-transform duration-500 " />
      </label>

      <div className="fixed z-50 top-0 left-0 w-80 h-full transition-all duration-500 transform -translate-x-full bg-muted  border-r-4 rounded-r-xl dark:shadow-primary peer-checked:translate-x-0 ">
        {/* <div className="px-6 py-4"></div> */}
      </div>
    </div>
  );
}
