import { BoardSquare } from "../Board/Board";

interface Props {
    board: BoardSquare["board"];
}

const Square = (props: Props["board"]) => {
    const { board, id } = props;
    return (
        <div
            className=" border-[2px] border-[#d3d6da] rounded-[2px] flex items-center justify-center w-[62px] h-[62px] text-[32px] select-none"
            key={id}
        >
            {board}
        </div>
    );
};

export default Square;
