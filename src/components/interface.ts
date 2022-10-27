interface BoardState {
    boards: string[];
    position: number;
}

export interface rootState {
    board: BoardState;
}
