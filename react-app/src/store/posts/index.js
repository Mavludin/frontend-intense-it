import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const API_URL = 'https://5fb3db44b6601200168f7fba.mockapi.io/api'

const initialState = {
  list: [],
  loading: false,
  error: null,
};

export const getPosts = createAsyncThunk(
  "posts/getPosts",
  async () => {
    const response = await fetch(`${API_URL}/posts`)

    if (!response.ok) {
      throw new Error('Ошибка при получении постов!')
    }

    return response.json()
  }
)

export const deletePost = createAsyncThunk(
  "posts/deletePost",
  async (id) => {
    const response = await fetch(`${API_URL}/posts/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error('Ошибка при удалении поста!')
    }

    return response.json()
  }
)

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
  extraReducers: (builder) => {
    builder.addCase(getPosts.pending, (state) => {
      state.loading = true;
    }),
    builder.addCase(getPosts.fulfilled, (state, action) => {
      state.list = action.payload;

      state.loading = false;
    }),
    builder.addCase(getPosts.rejected, (state, action) => {
      state.error = action.error.message;

      console.log({ action })

      state.loading = false;
    }),

    //////////////////////// DELETE POST
    builder.addCase(deletePost.pending, (state) => {
      state.loading = true;
    }),
    builder.addCase(deletePost.fulfilled, (state, action) => {
      const deletedPost = action.payload;

      state.list = state.list.filter((post) => {
        return post.id !== deletedPost.id
      })

      state.loading = false;
    }),
    builder.addCase(deletePost.rejected, (state, action) => {
      state.error = action.error.message;

      state.loading = false;
    })
  },
});

export const { setPosts } = postsSlice.actions;

export default postsSlice.reducer;
