import React, { useState } from "react";
import "../app/globals.css";

const Kosensai = () => {
  let [usr1, setUsr1] = useState(0);
  function Usr1(pnt: number) {
    console.log(pnt)
    setUsr1(usr1 + pnt);
    console.log("Success!")
    console.log(usr1)
  }
  function resetUsr1() {
    setUsr1(0);
  }

  return (
    <div>
      {/* <div>
        <h2 className="text-2xl text-indigo-400">2023年度 第59回 大阪公立大学工業高等専門学校 高専祭 1年4組クラス展示</h2>
        <h1 className="text-6xl  text-indigo-800">KS魂 得点計算/集計システム</h1>
      </div> */}
      <div>
        <h3 className="text-xl text-indigo-600">ローリングコインタワー</h3>
      </div>
      <div>
        <p className="text-sm bg-rose-200 text-slate-700">Player1</p>
        <p className="text-2xl">{usr1}</p>
        <button className="text-xl m-1 p-2 bg-lime-200" onClick={() => Usr1(1)}>+1</button>
        <button className="text-xl m-1 p-2 bg-amber-200" onClick={() => Usr1(-1)}>-1</button>
        <button className="text-xl m-1 p-2 bg-lime-300" onClick={() => Usr1(10)}>+10</button>
        <button className="text-xl m-1 p-2 bg-amber-300" onClick={() => Usr1(-10)}>-10</button>
        <button className="text-xl m-1 p-1 bg-yellow-400" onClick={() => resetUsr1()}>Reset</button>
      </div>
      <div>
        <button className="bg-rose-200 m-2">送信</button>
        {/* <button className="bg-rose-400 p-2">ランキングへ</button> */}
      </div>
    </div>
  )
}
export default Kosensai;