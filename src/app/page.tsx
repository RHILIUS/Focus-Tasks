"use-client"
import TaskCard from "@/components/layout/task-card";
import tasks from "@/data/tasks.json";
import AddTaskDialog from "@/components/dialog/add-task-dialog";

const HomePage = () => {
  return (
    <main className="flex flex-1 flex-col p-10 gap-2 mr-95">
      {/* Date and Time */}
      <div className="flex items-center h-10 w-full justify-between">
        <div className="space-y-1">
          <p className="text-sm text-muted-foreground">April 25, 2025</p>
          <p className="text-sm text-muted-foreground">6:31 am</p>
        </div>
        <p className="text-sm text-muted-foreground">All tasks will be evaluated at 12:00 am tomorrow</p>
      </div>

      {/* Tasks */}
      <div className="flex flex-col gap-2 justify-center mt-7 items-center">
        {tasks.map(task=> (
          <TaskCard key={task.id} task={task}></TaskCard>
        ))}
        <AddTaskDialog ></AddTaskDialog>
      </div>
    </main>
  );
};

export default HomePage;
