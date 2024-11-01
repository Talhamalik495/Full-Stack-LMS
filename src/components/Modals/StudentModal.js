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
        <Button variant="outline">Add Student</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Add Student</DialogTitle>
        </DialogHeader>
        <div className="w-full grid gap-4 py-4">
          <div className="w-full  flex gap-2">
            <div className="w-full flex flex-col gap-3">
              <Label htmlFor="name">First Name</Label>
              <Input id="name" className="col-span-3" />
            </div>
            <div className="w-full flex flex-col gap-3">
              <Label htmlFor="name">Last Name</Label>
              <Input id="name" className="col-span-3" />
            </div>
          </div>
          <div className="w-full flex gap-2">
            <div className="w-full flex flex-col gap-3">
              <Label htmlFor="name">Education</Label>
              <Input id="name" className="col-span-3" />
            </div>
            <div className="w-full flex flex-col gap-3">
              <Label htmlFor="name">CNIC</Label>
              <Input type="number" id="name" className="col-span-3" />
            </div>
          </div>
          <div className="w-full flex gap-2">
            <div className="w-full flex flex-col gap-3">
              <Label htmlFor="name">Email</Label>
              <Input type="email" id="name" className="col-span-3" />
            </div>
            <div className="w-full flex flex-col gap-3">
              <Label htmlFor="name">Profile Picture</Label>
              <Input type="file" id="name" className="col-span-3" />
            </div>
          </div>
          <div className="w-full flex gap-2">
            <div className="w-full flex flex-col gap-3">
              <Label htmlFor="name">Address</Label>
              <Input id="name" className="col-span-3" />
            </div>
          </div>
          <div className="w-full flex  gap-3">
            <div className="w-full flex flex-col gap-3">
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Gender" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="apple">Male</SelectItem>
                    <SelectItem value="banana">Female</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="w-full flex flex-col gap-3">
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="apple">Student</SelectItem>
                    <SelectItem value="banana">Trainer</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        <DialogFooter>
          <Button className="w-full" type="submit">
            Add Student
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
