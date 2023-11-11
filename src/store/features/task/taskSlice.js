import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
  tasks_ar: [],
  selectedTask: null,
  message: null,
}
export const getAllTasks = createAsyncThunk("goToServerGetAllTask", async (id, thunkApi) => {
  console.log(`getAllTask: ${id}`);
  return axios.get(`http://localhost:8080/todo/getByUserId/${id}`)
})

export const addTask = createAsyncThunk("goToServerAddTask", async (task, thunkApi) => {
  console.log('addTask',task);
  return axios.post(`http://localhost:8080/todo`, task)
})

export const deleteTask = createAsyncThunk("goToServerdeleteTask", async (id, thunkApi) => {
  console.log('deleteTask');
  return axios.delete(`http://localhost:8080/todo/${id}`)
})

export const updateTask = createAsyncThunk("goToServerupdateTask", async (task, thunkApi) => {
  console.log('updateTask');
  return axios.patch(`http://localhost:8080/todo/${task._id}`, task)
})

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    selectTask: (state, action) => {
      state.selectedTask = action.payload
    },
    removeMessage: (state, action) => {
      state.message = null
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getAllTasks.fulfilled, (state, action) => {
      state.tasks_ar = action.payload.data
      state.message = 'Get all the tasks'
    }).addCase(getAllTasks.rejected, (state, action) => {
      state.message = 'Sorry, an error occurred while accepting the request'
    }).addCase(getAllTasks.pending, (state, action) => {
      state.message = 'loading...'
    })

      .addCase(addTask.fulfilled, (state, action) => {
        state.tasks_ar = [...state.tasks_ar, action.payload.data]
      }).addCase(addTask.rejected, (state, action) => {
        state.message = 'Sorry, an error occurred while accepting the request'
      }).addCase(addTask.pending, (state, action) => {
        state.message = 'loading...'
      })

      .addCase(deleteTask.fulfilled, (state, action) => {
        state.tasks_ar = state.tasks_ar.filter((t) => t._id != action.payload.data._id)
        state.message='dalate task'
      }).addCase(deleteTask.rejected, (state, action) => {
        state.message = 'Sorry, an error occurred while accepting the request'
      }).addCase(deleteTask.pending, (state, action) => {
        state.message = 'loading...'
      })

      .addCase(updateTask.fulfilled, (state, action) => {
        console.log('uytrewerfghjkl',action.payload.data._id);
        let i = state.tasks_ar.findIndex(item => item._id == action.payload.data._id)
        console.log('uytrewerfghjkl',i);
        if (i !== -1) {
          state.tasks_ar[i] = action.payload.data
        }
        state.message = 'update Task'
      }).addCase(updateTask.rejected, (state, action) => {
        state.message = 'Sorry, an error occurred while accepting the request'
      }).addCase(updateTask.pending, (state, action) => {
        state.message = 'loading...'
      })
  }
})


export const { selectTask, removeMessage } = taskSlice.actions;
export default taskSlice.reducer;