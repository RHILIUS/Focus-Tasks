"use-client"

import {
  Card,
  CardContent,
} from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "../ui/button";
import { Task } from "@/types/task";


const TaskCard = ( {task}: { task : Task}) => {
  return (
    <Card className="w-150 py-3">
      <CardContent className="flex items-center justify-between">
        <div className="flex items-center gap-4 mr-3">
          <Checkbox id={task.id} className="cursor-pointer" /> 
          <label htmlFor={task.id} className="font-medium cursor-pointer">
            {task.title}
          </label>
        </div>
        <div className="flex items-center gap-5">
          <Button className="cursor-pointer" variant="outline">Edit</Button>
          <Button className="cursor-pointer" variant="destructive">Delete</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default TaskCard;