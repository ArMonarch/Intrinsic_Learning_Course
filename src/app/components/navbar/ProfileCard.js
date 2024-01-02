"use client";
import React, { useEffect, useState } from "react";
import { UserAuth } from "../../context/AuthContext";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const ProfileCard = () => {
  const { user } = UserAuth();
  const [exp, setExp] = useState({});
  useEffect(() => {
    (async () => {
      const data = await updateExp(user);
      console.log(user.uid);
      console.log(user.email);
      setExp(data);
    })();
  }, [user]);

  return (
    <div className="flex flex-col gap-2">
      <Avatar className="self-center h-16 w-16">
        {/* insert gmail avatar here */}
        <AvatarImage src="" />
        <AvatarFallback>You</AvatarFallback>
      </Avatar>
      <div className="font-light">{user.email}</div>
      <Separator />
      <div className="flex flex-row items-center gap-2 ">
        <Badge variant={"secondary"} className="text-lg font-extrabold">
          {`${exp.data?.currentExperienceLevel}`}
        </Badge>
        <Progress value={exp.data?.currentExperiencePoints * 10} />
      </div>
    </div>
  );
};

export default ProfileCard;

const updateExp = async (user) => {
  const res = await fetch(
    `http://localhost:8081/users/getUserExperienceInfo?uid=${encodeURIComponent(
      user.uid
    )}`,
    {
      method: "GET",
    }
  );
  const data = await res.json();
  return data;
};
