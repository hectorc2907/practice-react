import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type UserId = string;

export interface User {
  name: string;
  email: string;
  github: string;
}

export interface UserWithId extends User {
  id: UserId;
}

const initialState: UserWithId[] = [
  {
    id: "1",
    name: "Hector Clessi",
    email: "hectorc2907@gmail.com",
    github: "hectorc2907",
  },
  {
    id: "2",
    name: "Midudev",
    email: "midudev@example.com",
    github: "midudev",
  },
  {
    id: "3",
    name: "Carlos Moure",
    email: "moure@example.com",
    github: "mouredev",
  },
];

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    deleteUserById: (state, action: PayloadAction<UserId>) => {
      const id = action.payload;
      return state.filter((user) => user.id !== id);
    },
  },
});

export default usersSlice.reducer;

export const { deleteUserById } = usersSlice.actions;
