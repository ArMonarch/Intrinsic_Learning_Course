"use client";
//import * as React from "react";
import React, { useState, useEffect } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Card, CardHeader } from "@/components/ui/card";
import { CardContent } from "../ui/card";
import { UserAuth } from "../../context/AuthContext";
import userAchievements from "@/lib/userAchivementsStore";

export function AchievementScroll() {
  const { user } = UserAuth();
  const updateAchievement = userAchievements((state) => state.updateAchievement)

  const getUserAchievements = async(user) =>{
    const res = await fetch(`http://localhost:8081/users/lessonAchivements?uid=${user.uid}`,{method: "GET",cache:'no-store'})
    const data = await res.json();
    return data.data;
  }

  useEffect(()=>{
    (async()=>{
      const data = await getUserAchievements(user);
      updateAchievement(data? data :[])
    })()
  }, [user,updateAchievement])

  const achievements = userAchievements((state) => state.achievements)
  return (
    <ScrollArea className="h-72 w-auto rounded-md border-4">
      <div className="p-4">
        <h4 className="mb-4 text-md font-medium leading-none text-center">
          Achievements
        </h4>
       
        { achievements.map((achievement,tag) => (
          <div key={tag}>
            <Card className="text-sm border-2">
              <CardHeader className="p-3">{achievement.title}</CardHeader>
              <CardContent className="bg-secondary p-2 rounded-b-lg">
                {achievement.description}
              </CardContent>
            </Card>
            <Separator className="my-2" />
          </div>
        )) }
      </div>
    </ScrollArea>
  );
};


