"use client";
import React, { useEffect, useState } from "react";
import { UserAuth } from "../../context/AuthContext";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const ProfileCard = () => {
  const { user } = UserAuth();
  const [exp, setExp] = useState({});
  useEffect(() => {
    (async () => {
      const data = await updateExp(user);
      setExp(data);
    })();
  }, [user]);

  return (
    <div className="flex flex-col gap-2">
      <Avatar className="self-center h-16 w-16 mb-4">
        {/* insert gmail avatar here */}
        <AvatarImage src="" />
        <AvatarFallback>You</AvatarFallback>
      </Avatar>
      <p>{user.email}</p>
      <p>Level:{`${exp.data?.currentExperienceLevel}`}</p>
      <p>Experience:{`${exp.data?.currentExperiencePoints}`}</p>
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
