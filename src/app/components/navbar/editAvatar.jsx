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
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Select>
              <SelectTrigger className="w-auto">
                <SelectValue placeholder="Select Hair" className="text-sm" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger className="">
                <SelectValue placeholder="Select Face" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-4 items-center gap-4"></div>
        </div>
        <DialogFooter>
          <DialogClose>
            <Button type="submit">Save changes</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
