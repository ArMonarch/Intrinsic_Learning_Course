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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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

export function EditAvatar() {
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
          <Button className="mx-auto" type="submit">
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
