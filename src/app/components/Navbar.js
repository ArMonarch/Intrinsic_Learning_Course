import React, { useState, useEffect } from "react";
import Link from "next/link";
import { UserAuth } from "../context/AuthContext";
import { signOut } from "firebase/auth";
import { ModeToggle } from "./ui/theme-toggle";
import { Button } from "./ui/button";
import { Drawer } from "./navbar/drawer";

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
    <div>
      <Drawer handleCheck={handleCheck} />
      <div className="flex flex-row space-x-4 sticky top-0 p-3 bg-muted ">
        {/* DO NOT TOUCH, FEATURE NOT A BUG  */}
        <text
          variant="ghost"
          className="invisible flex-grow right- text-3xl font-extrabold"
        >
          Learn
        </text>
        {/* DO NOT TOUCH, FEATURE NOT A BUG */}

        <Button variant="link" href="/">
          Home
        </Button>

        {!user ? null : (
          <Button variant="link" href="/courses">
            Course
          </Button>
        )}

        {/* put this into the drawer later if time  */}
        {user ? (
          <Button variant="link" href="/profile">
            Profile
          </Button>
        ) : null}

        <Button variant="link" onClick={sendEmail}>
          Send
        </Button>
        <ModeToggle />
        {!user ? (
          <Button onClick={handleSignIn}>Login</Button>
        ) : (
          /* <div>Welcome, {user.displayName}</div> */
          <Button onClick={handleSignOut}>Sign Out</Button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
