import { createSlice } from "@reduxjs/toolkit";
import { iterateArray } from "../libs/utils";

const initialState = [
  {
    day: "Monday",
    title: "",
  },
  {
    day: "Tuesday",
    title: "",
  },
  {
    day: "Wednesday",
    title: "",
  },
  {
    day: "Thursday",
    title: "",
  },
  {
    day: "Friday",
    title: "",
  },
  {
    day: "Saturday",
    title: "",
  },
  {
    day: "Sunday",
    title: "",
  },
];

export const calendarSlice = createSlice({
  name: "calendar",
  initialState: {
    value: initialState,
  },
  reducers: {
    createAppointment: (state, action) => iterateArray(state, action),
    deleteOneAppointment: (state, action) => iterateArray(state, action),
    deleteAllAppointments: (state) => {
      state.value = initialState;
    },
  },
});

export const {
  createAppointment,
  deleteOneAppointment,
  deleteAllAppointments,
} = calendarSlice.actions;

export default calendarSlice.reducer;
