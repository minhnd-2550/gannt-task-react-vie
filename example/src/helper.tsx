import { Task } from "../../dist/types/public-types";

export function initTasks() {
  const currentDate = new Date();
  const tasks: Task[] = [
    {
      start: new Date(2021, 0, 1),
      end: new Date(2023, 8, 31),
      name: "Disco GC",
      id: "discogc",
      progress: 25,
      type: "project",
    },
    {
      start: new Date(2023, 9, 1),
      end: new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        currentDate.getDate()
      ),
      name: "Mooos core",
      id: "mooos",
      progress: 25,
      type: "project",
      hideChildren: false,
    },
    {
      start: new Date(2023, 9, 1),
      end: new Date(2023, 10, 31),
      name: "Mooos core",
      id: "Lan 1",
      progress: 25,
      type: "task",
      project: "mooos",
    },
    {
      start: new Date(currentDate.getFullYear(), 1, 1),
      end: new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        currentDate.getDate()
      ),
      name: "Mooos core",
      id: "Lan 2",
      progress: 25,
      type: "task",
      project: "mooos",
    },
    {
      start: new Date(2023, 11, 1),
      end: new Date(2023, 12, 31),
      name: "DRS",
      id: "drs",
      progress: 25,
      type: "project",
    },
    {
      start: new Date(currentDate.getFullYear(), 3, 1),
      end: new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        currentDate.getDate()
      ),
      name: "Harine",
      id: "harine",
      progress: 25,
      type: "project",
    },
  ];
  return tasks;
}

export function getStartEndDateForProject(tasks: Task[], projectId: string) {
  const projectTasks = tasks.filter(t => t.project === projectId);
  let start = projectTasks[0].start;
  let end = projectTasks[0].end;

  for (let i = 0; i < projectTasks.length; i++) {
    const task = projectTasks[i];
    if (start.getTime() > task.start.getTime()) {
      start = task.start;
    }
    if (end.getTime() < task.end.getTime()) {
      end = task.end;
    }
  }
  return [start, end];
}
