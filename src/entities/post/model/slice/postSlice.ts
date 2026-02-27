import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../../../app/providers/store';

export interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}

const postsAdapter = createEntityAdapter<Post>({});

const initialState = postsAdapter.getInitialState({
  loading: false,
  error: null as string | null,
});

const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setPosts: postsAdapter.setAll,
    addPost: postsAdapter.addOne,
    addPosts: postsAdapter.addMany,
    updatePost: postsAdapter.updateOne,
    removePost: postsAdapter.removeOne,
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const {
  setPosts,
  addPost,
  addPosts,
  updatePost,
  removePost,
  setLoading,
  setError,
} = postSlice.actions;

export const {
  selectAll: selectAllPosts,
  selectById: selectPostById,
  selectIds: selectPostIds,
  selectTotal: selectPostsTotal,
} = postsAdapter.getSelectors((state: RootState) => state.posts);

export const selectPostsLoading = (state: RootState) => state.posts.loading;
export const selectPostsError = (state: RootState) => state.posts.error;

export default postSlice.reducer;