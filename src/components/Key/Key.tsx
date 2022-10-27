import { useDispatch } from "react-redux";
import { FiDelete } from "react-icons/fi";

import { addToBoard, removeLetter } from "../../redux/boardSlice";
import { rootState } from "../interface";

interface Props {
    letters: string;
    id: number;
}

const Key = ({ letters, id }: Props) => {
    const dispatch = useDispatch();

    const handleAddLetterToBoard = (letter: string) => {
        const action = addToBoard(letter);
        dispatch(action);
    };

    const handleRemoveLetter = () => {
        const action = removeLetter();
        dispatch(action);
    };

    // split sẽ tách ra mảng mới từ item dựa vào dấu cách sẽ là 1 phần tử
    return (
        <div className="flex justify-center mb-[8px]">
            {letters.split(" ").map((letter, index) => {
                return (
                    <>
                        {letter === "z" && (
                            <div className="btn-key w-[65px] select-none">
                                Enter
                            </div>
                        )}
                        <div
                            key={index}
                            className="btn-key select-none"
                            onClick={() => handleAddLetterToBoard(letter)}
                        >
                            {letter}
                        </div>
                        {letter === "m" && (
                            <div
                                className="btn-key w-[65px]"
                                onClick={handleRemoveLetter}
                            >
                                <FiDelete size={"24px"} />
                            </div>
                        )}
                    </>
                );
            })}
        </div>
    );
};

export default Key;
