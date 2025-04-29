"use-client"
import { Plus } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

const AddTaskDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-150 cursor-pointer bg-card hover:bg-gray-700 text-muted-foreground rounded-xl border py-6 shadow-sm">Add Task <Plus /> </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Task</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Task Name
            </Label>
            <Input id="new" className="col-span-3" />
          </div>  
        </div>
        <DialogFooter>
          <Button type="submit" className="cursor-pointer">Add</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AddTaskDialog;