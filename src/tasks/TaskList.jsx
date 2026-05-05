import { useDispatch, useSelector } from "react-redux";
import {
  addTask,
  deleteTask,
  toggleTask,
  setFilter,
} from "./taskSlice";
import { useState } from "react";

const TaskList = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const { tasks, filter } = useSelector((state) => state.tasks);

  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "incomplete") return !task.completed;
    return true;
  });

  return (
    <div>
      <h2>Task Manager</h2>

      {/* Add Task */}
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter task"
      />
      <button
        onClick={() => {
          if (text.trim()) {
            dispatch(addTask(text));
            setText("");
          }
        }}
      >
        Add
      </button>

      {/* Filters */}
      <div>
        <button onClick={() => dispatch(setFilter("all"))}>
          All
        </button>
        <button onClick={() => dispatch(setFilter("completed"))}>
          Completed
        </button>
        <button onClick={() => dispatch(setFilter("incomplete"))}>
          Incomplete
        </button>
      </div>

      {/* Task List */}
      <ul>
        {filteredTasks.map((task) => (
          <li key={task.id}>
            <span
              onClick={() => dispatch(toggleTask(task.id))}
              style={{
                textDecoration: task.completed
                  ? "line-through"
                  : "none",
                cursor: "pointer",
              }}
            >
              {task.text}
            </span>

            <button onClick={() => dispatch(deleteTask(task.id))}>
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;