import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface ITodoState {
  judul: string;
  createdAt: string;
  timeStart?: number;
  timeEnd?: number;
  deskripsi?: string;
  kategori: number | string;
  id: string;
  status?: 'active' | 'miss' | 'done';
}

const initialState: ITodoState[] = [];

const TodoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, actions: PayloadAction<ITodoState>) => {
      state.push({ ...actions.payload });
      console.log(actions);
    },
  },
});

export const { addTodo } = TodoSlice.actions;
export default TodoSlice.reducer;
