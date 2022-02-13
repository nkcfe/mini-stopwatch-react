import './App.css';

function App() {
    return (
        <>
            <section className="w-fit bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col justify-center m-auto mt-36 max-w-sm">
                <h1
                    id="timer"
                    className="text-5xl font-extrabold pb-8 text-center tracking-tighter break-words"
                >
                    00:00.00
                </h1>
                <div className="flex justify-between text-white pb-8 text-sm select-none">
                    <button
                        id="lap-reset-btn"
                        className="bg-gray-600 rounded-full w-16 h-16 relative flex flex-col justify-center items-center cursor-pointer shadow-md "
                    >
                        <p id="lap-reset-btn-label" className="text-base">
                            리셋
                        </p>
                        <p className="text-xs">L</p>
                    </button>
                    <button
                        id="start-stop-btn"
                        className="bg-green-600 rounded-full w-16 h-16 relative flex flex-col justify-center items-center cursor-pointer shadow-md"
                    >
                        <p id="start-stop-btn-label" className="text-base">
                            시작
                        </p>
                        <p className="text-xs">S</p>
                    </button>
                </div>
                <article className="text-gray-600 h-64 overflow-auto border-t-2">
                    <ul id="laps">
                        {/* 추가되는 lap은 아래의 HTML 코드 형식을 사용해 추가해주세요.  */}
                        {/* <li className="flex justify-between py-2 px-3 border-b-2">
                            <span>랩 5</span>
                            <span>00:00.28</span>
                        </li> */}
                    </ul>
                </article>
            </section>
            <footer className="text-center text-gray-500 text-xs">
                ©2021 Hanameee Corp. All rights reserved.
            </footer>
        </>
    );
}

export default App;
