import { useState } from "react";
import Board from "./components/Board";
import Heading from "./components/Heading";
import KeyBoard from "./components/KeyBoard";

const App = () => {
    const [boards, setBoards] = useState<string[]>([
        // chia theo 5 cột 6 dòng
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
    ]);

    const keyBoards = [
        "q w e r t y u i o p",
        "a s d f g h j k l",
        "z x c v b n m",
    ];
    return (
        <div className="min-h-screen bg-white w-full h-full">
            <Heading title="Worlder" />

            <div className="max-w-[500px] mx-auto h-[calc(100%-66px)] ">
                <Board boards={boards} />
                <div>
                    <KeyBoard keyBoards={keyBoards} />
                </div>
            </div>
        </div>
    );
};

export default App;
