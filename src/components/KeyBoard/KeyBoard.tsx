import Key from "../Key";

interface Props {
    keyBoards: string[];
}

const KeyBoard = ({ keyBoards }: Props) => {
    return (
        <>
            {keyBoards.map((item, index) => {
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
