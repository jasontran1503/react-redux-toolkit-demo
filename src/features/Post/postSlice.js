import { createSlice } from '@reduxjs/toolkit';

const postSlice = createSlice({
  name: 'post',
  initialState: [
    {
      id: 1,
      title: 'data.title',
      body: 'data.body',
    },
  ],
  reducers: {
    createPost: (state, action) => {
      state.push(action.payload);
    },
    deletePost: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
    updatePost: (state, action) => {
      const postIndex = state.findIndex((item) => item.id === Number(action.payload.id));

      if (postIndex >= 0) {
        state[postIndex] = action.payload;
      }
    },
  },
});

export const { createPost, deletePost, updatePost } = postSlice.actions;
export default postSlice.reducer;
