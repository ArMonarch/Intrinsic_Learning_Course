import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { DialogClose } from "@radix-ui/react-dialog";
import { LucideEdit } from "lucide-react";
import useAvatar from "./avatarStore";
import {
  SelectBody,
  SelectHair,
  SelectFace,
  SelectAccessory,
  SelectFacialHair,
} from "./editSelectors";
import { UserAuth } from "@/app/context/AuthContext";

export function EditAvatar() {
  const { user } = UserAuth();
  const { face, body, hair, facialHair, accessory } = useAvatar();

  const userAvater = {
    userId: user.uid,
    accessory,
    body,
    face,
    hair,
    facialHair,
  };

  const changeAvatar = async () => {
    await fetch(`http://localhost:8081/users/storeAvatar`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userAvater),
    });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="icon" className="ml-2">
          <LucideEdit size={18} />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Edit Avatar</DialogTitle>
          <DialogDescription>Customize your Avatar</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 gap-y-8 py-4">
          <div className="grid grid-cols-3 items-center gap-4 mx-8">
            <SelectHair />
            <SelectFace />
            <SelectBody />
          </div>

          <div className="grid grid-cols-2 items-center gap-4 mx-28">
            <SelectAccessory />
            <SelectFacialHair />
          </div>
        </div>
        <DialogFooter>
          <Button
            className="mx-auto"
            type="submit"
            onClick={async () => {
              await changeAvatar();
            }}
          >
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
