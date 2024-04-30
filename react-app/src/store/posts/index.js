import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
};

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setPosts: (state, action) => {
      state.list = action.payload;

      console.log(action.type); // posts/setPosts
    },
    deletePost: (state, action) => {
        const id = action.payload

      state.list = state.list.filter((post) => {
        return post.id !== id
      })
    },
  },
});

export const { setPosts } = postsSlice.actions;

export default postsSlice.reducer;
