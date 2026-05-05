🧠 Assignment: Mini Task Manager (Redux Only Focus)

👉 Not a big project. No backend. No fancy UI needed.
👉 Goal: Master Redux state handling, not design

🎯 What You Have to Build

A simple Task Manager (Todo-like app) using Redux Toolkit

⚙️ Features (Must Have)
1. Add Task
Input field + button
Each task should have:
{
  id: uniqueId,
  text: "Learn Redux",
  completed: false
}
2. Delete Task
Remove a task from list
3. Toggle Complete
Click checkbox or button → mark complete/incomplete
4. Filter Tasks
Show:
All
Completed
Incomplete

👉 This is important — teaches derived state thinking

🧩 Redux Requirements (Important)

You MUST implement using:

createSlice
configureStore
useSelector
useDispatch
📦 Suggested State Structure
{
  tasks: [],
  filter: "all" // all | completed | incomplete
}
🔥 Slice Example Structure
taskSlice.js

reducers: {
  addTask,
  deleteTask,
  toggleTask,
  setFilter
}
