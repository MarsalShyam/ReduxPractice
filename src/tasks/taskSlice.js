import { createSlice } from '@reduxjs/toolkit'

const initialState = {
 tasks: [],
  filter: "all",
}

export const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {

    addTask:(state, action)=>{
        state.tasks.push({
            id:Date.now(),
            text:action.payload,
            completed:false,
        })
    },

    deleteTask:(state, action)=>{
        state.tasks=state.tasks.filter(
            (task)=>task.id != action.payload
        );
    },

    toggleTask:(state, action)=>{
        const task=state.tasks.find(
            (t)=>t.id===action.payload
        );
        if(task){
            task.completed=!task.completed;
        }
    },
    setFilter:(state,action)=>{
        state.filter=action.payload;
    }

  },
})

// Action creators are generated for each case reducer function
export const { addTask, deleteTask, toggleTask, setFilter } = taskSlice.actions;

export default taskSlice.reducer