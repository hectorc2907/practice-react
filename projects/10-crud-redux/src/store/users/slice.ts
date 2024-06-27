import { createSlice } from "@reduxjs/toolkit";

export interface User {
  name: string;
  email: string;
  github: string;
}

export interface UserWithId extends User {
  id: string;
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
  reducers: {},
});

export default usersSlice.reducer;
