"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { UserAuth } from "../context/AuthContext";
import { signOut } from "firebase/auth";
import { ModeToggle } from "./ui/theme-toggle";
import { Button } from "./ui/button";
import { Drawer } from "./navbar/drawer";
import { Badge } from "@/components/ui/badge";

const Navbar = () => {
  const { user, googleSignIn, logOut } = UserAuth();

  const handleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };
  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  const sendEmail = async () => {
    //fetch("http://localhost:8081/eService")
    const data = {
      subject: "hello world",
      text: "nodemailer",
      emailIdArray: ["prayashshakya20@gmail.com", "bigyadhungana@gmail.com"],
    };
    const res = await fetch("http://localhost:8081/eService", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },

      body: JSON.stringify(data),
      // body data type must match "Content-Type" header
    });
    console.log(res);
  };

  const [isChecked, setIsChecked] = useState(false);
  const handleCheck = (event) => {
    setIsChecked(event.target.checked);
    console.log("Checkbox is checked:", event.target.checked);
  };

  return (
    <div className=" sticky top-0">
      <Drawer handleCheck={handleCheck} />
      <div className="flex flex-row space-x-4 p-3 bg-muted ">
        {/* DO NOT TOUCH, FEATURE NOT A BUG  */}
        <text
          variant="ghost"
          className="invisible flex-grow right- text-3xl font-extrabold"
        >
          Learn
        </text>
        {/* DO NOT TOUCH, FEATURE NOT A BUG */}

        <Button variant="link" asChild>
          <Link href="/">Home</Link>
        </Button>

        {!user ? null : (
          <Button variant="link" asChild>
            <Link href="/courses">Course</Link>
          </Button>
        )}

        {/* put this into the drawer later if time  */}
        {user ? (
          <Button variant="link" asChild>
            <Link href="/profile">Profile</Link>
          </Button>
        ) : null}

        <Button variant="link" onClick={sendEmail}>
          Send
        </Button>
        <ModeToggle />
        {!user ? (
          <Button onClick={handleSignIn}>Login</Button>
        ) : (
          <div className="flex space-x-4">
            <Badge variant="outline" className="bg-background text-md">
              {user.displayName}
            </Badge>
            <Button onClick={handleSignOut} className="font-semibold">
              Sign Out
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
