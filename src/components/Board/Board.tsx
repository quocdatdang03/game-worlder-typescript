import Square from "../Square";

interface Props {
    boards: string[];
}

export interface BoardSquare {
    board: { board: string; id: number };
}

const Board = ({ boards }: Props) => {
    return (
        <div className="flex justify-center">
            <div className="grid grid-cols-5 gap-[5px] w-[350px] h-[420px] mx-auto p-[10px]">
                {boards.map((board, index) => {
                    return <Square key={index} board={board} id={index} />;
                })}
            </div>
        </div>
    );
};

export default Board;
