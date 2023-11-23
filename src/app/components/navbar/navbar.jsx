import { useState } from "react";
import { ModeToggle } from "../ui/theme-toggle";
import { Drawer } from "./drawer";

export function Navbar() {
  const [isChecked, setIsChecked] = useState(false);
  const handleCheck = (event) => {
    setIsChecked(event.target.checked);
    console.log("Checkbox is checked:", event.target.checked);
  };
  return (
    <nav className="flex flex-row-reverse sticky top-0 p-3 bg-muted">
      <ModeToggle className="flex-shrink" />

      <text className="mx-auto text-3xl font-extrabold">Learn</text>
      <Drawer handleCheck={handleCheck} />
    </nav>
  );
}
