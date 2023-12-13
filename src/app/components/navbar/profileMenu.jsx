"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import ProfileCard from "./ProfileCard";

export function ProfileMenu(props) {
  const [position, setPosition] = React.useState("bottom");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">{props.userName}</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-72 flex flex-col text-md mr-4">
        <DropdownMenuLabel className="mx-auto font-extrabold text-lg">
          Your Profile
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <div className="my-4 mx-auto">
          <ProfileCard />
        </div>
        <Button className="mx-auto mb-4" onClick={props.handleSignOut}>
          Sign Out
        </Button>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
