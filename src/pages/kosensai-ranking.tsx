import React from "react";
import "../app/globals.css"

const Ranking = () => {
  return(
    <div>
      <div>
        <h1 className="text-6xl text-blue-800">第59回高専祭 1-4クラス展示「KS魂」 ローリングコインタワー ランキング</h1>
      </div>
      <div className="grid grid-cols-6 grid-rows-6 w-full text-4xl">
          <p className="text-slate-400 m-3">順位</p>
          <p className="text-slate-400 col-span-3 m-3">団体名</p>
          <p className="text-slate-400 col-span-2 m-3">得点</p>
          <h2 className="m-3 content-center">1</h2>
          <p className="col-span-3 m-3">name1</p>
          <p className="col-span-2 m-3">point1</p>
          <h2 className ="m-3">2</h2>
          <p className="col-span-3 m-3">name2</p>
          <p className="col-span-2 m-3">point2</p>
          <h2 className ="m-3">3</h2>
          <p className="col-span-3 m-3">name3</p>
          <p className="col-span-2 m-3">point3</p>
          <h2 className ="m-3">4</h2>
          <p className="col-span-3 m-3">name4</p>
          <p className="col-span-2 m-3">point4</p>
          <h2 className ="m-3">5</h2>
          <p className="col-span-3 m-3">name5</p>
          <p className="col-span-2 m-3">point5</p>
      </div>
    </div>
  )
}

export default Ranking