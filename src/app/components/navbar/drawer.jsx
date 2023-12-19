"use client";
import { ChevronRight } from "lucide-react";
import { useState } from "react";
import { AchievementScroll } from "./achievementScroll";
import { Separator } from "@/components/ui/separator";
import { PeepAvatar } from "@/components/peepAvatars";
import { EditAvatar } from "./editAvatar";
import { UserAuth } from "@/app/context/AuthContext";



export function Drawer() {
  const {user} = UserAuth()
  return (
    <div className="flex">
      <input type="checkbox" id="drawer-toggle" className="hidden peer" />

      <label
        htmlFor="drawer-toggle"
        className="absolute left-0 top-3 z-10 inline-block bg-muted p-2 transition-transormation duration-500 hover:text-primary hover:cursor-pointer peer-checked:text-primary group peer-checked:left-[512px]"
      >
        <text
          variant="ghost"
          className="absolute z-10 left-10 top-0 text-3xl font-extrabold"
        >
          Learn
        </text>
        <ChevronRight className="peer-checked:group-[]:rotate-180 transition-transform duration-500 " />
      </label>

      <div className="fixed flex flex-col justify-end z-50 top-0 left-0 w-1/3 h-full transition-all duration-500 transform -translate-x-full bg-muted  border-r-4 rounded-r-xl dark:shadow-primary peer-checked:translate-x-0 ">
        <PeepAvatar />
        <div className="mb-4 flex justify-center flex-row">
          <h1 className="text-3xl text-center font-firacode">{user.displayName}</h1>
          <EditAvatar />
        </div>
        <Separator className="my-4" />
        <div className="mb-10 mx-auto h-72 w-4/5">
          <AchievementScroll />
        </div>
      </div>
    </div>
  );
}
