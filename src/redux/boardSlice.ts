import { createSlice } from "@reduxjs/toolkit";

const boardSlice = createSlice({
    name: "board",
    initialState: {
        boards: [
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
        ],
        position: 0,
    },
    reducers: {
        addToBoard: (state, action) => {
            // nếu vị trí quá 29 (vì mảng có 30 items thì max position là 29 vì position chạy từ 0) thì return ngay để tránh nó add vào thừa ô
            if (state.position > 29) {
                return;
            }
            state.boards[state.position] = action.payload;
            // sau khi add vào thì tăng vị trí lên
            state.position++;
        },
        removeLetter: (state) => {
            // nếu mà vị trí <= 0 thì return
            if (state.position <= 0) {
                return;
            }
            state.boards[state.position - 1] = " ";
            state.position--;
        },
    },
});

export const { addToBoard, removeLetter } = boardSlice.actions;
export default boardSlice.reducer;
