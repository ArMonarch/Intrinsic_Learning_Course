import React, { useState, useEffect } from "react";
import Link from "next/link";
import { UserAuth } from "../context/AuthContext";
import { signOut } from "firebase/auth";
import { ModeToggle } from "../../components/ui/theme-toggle";
import { Button } from "@/components/ui/button";

import { Drawer } from "./navbar/drawer";
import { Badge } from "@/components/ui/badge";
import { ProfileMenu } from "./navbar/profileMenu";

const Navbar = (props) => {
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

  return (
    <div className="sticky top-0 z-50">
      <Drawer handleCheck={props.handleCheck} />
      <div className="flex flex-row space-x-4 p-3 bg-muted ">
        {/* DO NOT TOUCH, FEATURE NOT A BUG  */}
        <div className="invisible flex-grow" />
        {/* DO NOT TOUCH, FEATURE NOT A BUG */}

        <Button variant="link" asChild>
          <Link href="/">Home</Link>
        </Button>

        {!user ? null : (
          <Button variant="link" asChild>
            <Link href="/courses">Course</Link>
          </Button>
        )}

        <Button variant="link" onClick={sendEmail}>
          Send
        </Button>
        <ModeToggle />
        {!user ? (
          <Button onClick={handleSignIn}>Login</Button>
        ) : (
          <div className="flex space-x-4">
            <ProfileMenu
              userName={user.displayName}
              handleSignOut={handleSignOut}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
