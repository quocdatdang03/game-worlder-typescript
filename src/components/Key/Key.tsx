import { FiDelete } from "react-icons/fi";

interface Props {
    letters: string;
    id: number;
}

const Key = ({ letters, id }: Props) => {
    return (
        <div className="flex justify-center mb-[8px]">
            {letters.split(" ").map((letter, index) => {
                return (
                    <>
                        {letter === "z" && (
                            <div className="btn-key w-[65px]">Enter</div>
                        )}
                        <div key={index} className="btn-key">
                            {letter}
                        </div>
                        {letter === "m" && (
                            <div className="btn-key w-[65px]">
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
