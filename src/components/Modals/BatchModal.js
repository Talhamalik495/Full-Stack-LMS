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
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function DialogDemo() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Add Batch</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Batch</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="flex flex-col gap-3">
            <Label htmlFor="name">Course Name</Label>
            <Input id="name" className="col-span-3" />
          </div>
          <div className="flex flex-col gap-3">
            <Label htmlFor="name">Duration</Label>
            <Input id="name" className="col-span-3" />
          </div>
          <div className="flex flex-col gap-3">
            <Label htmlFor="name">Description</Label>
            <Input id="name" className="col-span-3" />
          </div>
          <div className="w-full">
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="active" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="apple">Active</SelectItem>
                  <SelectItem value="banana">No Active</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>

        <DialogFooter>
          <Button className="w-full" type="submit">
            Add Course
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
