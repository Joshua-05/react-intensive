import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../../../app/providers/store';

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone?: string;
  website?: string;
}

const usersAdapter = createEntityAdapter<User>({});

const initialState = usersAdapter.getInitialState({
  loading: false,
  error: null as string | null,
});

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUsers: usersAdapter.setAll,
    addUser: usersAdapter.addOne,
    addUsers: usersAdapter.addMany,
    updateUser: usersAdapter.updateOne,
    removeUser: usersAdapter.removeOne,
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const {
  setUsers,
  addUser,
  addUsers,
  updateUser,
  removeUser,
  setLoading,
  setError,
} = userSlice.actions;

export const {
  selectAll: selectAllUsers,
  selectById: selectUserById,
  selectIds: selectUserIds,
  selectTotal: selectUsersTotal,
} = usersAdapter.getSelectors((state: RootState) => state.users);

export const selectUsersLoading = (state: RootState) => state.users.loading;
export const selectUsersError = (state: RootState) => state.users.error;

export default userSlice.reducer;