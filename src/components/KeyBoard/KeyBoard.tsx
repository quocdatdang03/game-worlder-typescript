import Key from "../Key";

interface Props {
    keyBoards: string[];
}

const KeyBoard = ({ keyBoards }: Props) => {
    return (
        <>
            {keyBoards.map((item, index) => {
                // split sẽ tách ra mảng mới từ item dựa vào dấu cách sẽ là 1 phần tử
                return (
                    <>
                        <Key key={index} letters={item} id={index} />
                    </>
                );
            })}
        </>
    );
};

export default KeyBoard;
