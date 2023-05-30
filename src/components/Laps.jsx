import React from 'react';
import formatTime from '../utill/utills';

const Laps = ({ laps }) => {
    const lapTimeArr = laps.reduce((acc, cur) => [...acc, cur[1]], []);
    const maxIdx = lapTimeArr.indexOf(Math.max(...lapTimeArr));
    const minIdx = lapTimeArr.indexOf(Math.min(...lapTimeArr));

    const lapTimeArr2 = [];
    laps.forEach((lap) => {
        lapTimeArr2.push(lap[1]);
    });

    const minMaxStyle = (idx) => {
        if (laps.length < 2) return;
        if (idx === maxIdx) return 'text-red-600';
        if (idx === minIdx) return 'text-green-600';
    };

    return (
        <>
            <article className="text-gray-600 h-64 overflow-auto border-t-2">
                <ul id="laps">
                    {laps.map((lap, idx) => (
                        <li
                            key={lap[0]}
                            className={`flex justify-between py-2 px-3 border-b-2 ${minMaxStyle(
                                idx
                            )}`}
                        >
                            <span>랩 {lap[0]}</span>
                            <span>{formatTime(lap[1])}</span>
                        </li>
                    ))}
                    {/* 추가되는 lap은 아래의 HTML 코드 형식을 사용해 추가해주세요.  */}
                    {/* <li className="flex justify-between py-2 px-3 border-b-2">
                            <span>랩 5</span>
                            <span>00:00.28</span>
                        </li> */}
                </ul>
            </article>
        </>
    );
};

export default React.memo(Laps);
