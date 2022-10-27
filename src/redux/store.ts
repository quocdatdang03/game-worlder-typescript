import { configureStore } from "@reduxjs/toolkit";
import boardSlice from "./boardSlice";

const rootReducer = {
    board: boardSlice,
};

const store = configureStore({
    reducer: rootReducer,
});

export default store;
