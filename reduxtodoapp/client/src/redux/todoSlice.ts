/* eslint-disable @typescript-eslint/no-explicit-any */
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

interface PayloadIdnBoolean {
  id: string;
  completed: boolean;
}

interface PayloadString {
  title: string;
}


export const getTodosAsync = createAsyncThunk(
  "todos/getTodosAsync",
  async () => {
    const resp = await fetch("http://localhost:7000/todos");
    if (resp.ok) {
      const todos = await resp.json();
      return { todos };
    }
  }
) as any ;

export const addTodoAsync = createAsyncThunk(
  "todos/addTodosAsync",
  async (payload: PayloadString) => {
    const { title } = payload;
    const resp = await fetch("http://localhost:700/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title }),
    });

    if (resp.ok) {
      const todo = await resp.json();
      return { todo };
    }
  }
) as any;

export const toggleCompleAsync = createAsyncThunk(
  "todos/completeTodoAsync",
  async (payload: PayloadIdnBoolean) => {
    const { id, completed } = payload;
    const resp = await fetch(`http://localhost:7000/todos/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ completed }),
    });

    if (resp.ok) {
      const todo = await resp.json();
      return { todo };
    }
  }
) as any;

export const deleteTodoAsync = createAsyncThunk(
  "todos/deleteTodoAsync",
  async (payload: { id: string }) => {
    const resp = await fetch(`http://localhost:7000/todos/${payload.id}`, {
      method: "DELETE",
    });

    if (resp.ok) {
      return { id: payload.id };
    }
  }
) as any;


interface MyState {
  [x: string]: any;

  itemList: {
    id: number;
    title: string;
    completed: boolean;
  }[];
}


const initialState: MyState = {
  itemList: [],
};

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (
      state,
      action: PayloadAction<{
        id: number;
        title: string;
        completed: boolean;
      }>
    ) => {
      const todo = {
        id: +nanoid(),
        title: action.payload.title,
        completed: false,
      };
      state.itemList.push(todo);
    },
    toggleComplete: (state, action) => {
      const index = state.itemList.findIndex(
        (todo) => todo.id === action.payload.id
      );
      state.itemList[index].completed= action.payload.completed;
    },
    deleteTodo: (state, action) => {
      const index = state.itemList.findIndex(
        (todo) => todo.id === action.payload.id
      );
      if (index) {
        state.itemList.filter((todo) => todo.id !== action.payload.id);
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getTodosAsync.fulfilled, (state, action) => {
      state.itemList.push(action.payload.todos);
    });
    builder.addCase(addTodoAsync.fulfilled, (state, action) => {
      state.itemList.push(action.payload.todo);
    });
    builder.addCase(toggleCompleAsync.fulfilled, (state, action) => {
      const index = state.itemList.findIndex(
        (todo) => todo.id === action.payload.todo.id
      );
      state.itemList[index].completed = action.payload.todo.completed;
    });
    builder.addCase(deleteTodoAsync.fulfilled, (state, action) => {
      const index = state.itemList.findIndex(
        (todo) => todo.id === action.payload.todo.id
      );
      if (index > -1) {
        
        state.itemList.filter((index) => index.id !== action.payload.id )
      }
      
    });
    // [getTodosAsync.fulfilled]: (
    //   state,
    //   action
    // ) => {
    //   return action.payload.todos;
    // },
    // [addTodoAsync.fulfilled]: (
    //   state,
    //   action
    // ) => {
    //   state.push(action.payload.todo);
    // },
    // [toggleCompleAsync.fulfilled]: (
    //   state,
    //   action
    // ) => {
    // const index = state.itemList.findIndex(
    //   (todo) => todo.id === action.payload.todo.id
    // );
    // state.itemList[index].completed = action.payload.todo.completed;
    // },
    // [deleteTodoAsync.fulfilled]: (
    //   state,
    //   action
    // ) => {
    //   return state.filter((todo) => todo.id !== action.payload.id);
    // },
  },
});

export const { addTodo, toggleComplete, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
