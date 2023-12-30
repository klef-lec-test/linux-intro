import React from "react"
import '../styles/base.css'
import Link from "next/link"

const WinterHw = () => {
  return (
    <div>
      <h2 className="text-2xl">冬休みの課題</h2>
      <div className="grid grid-cols-3 border border-slate-600">
        <p className="text-lg bg-violet-200">科目</p>
        <p className="text-lg bg-violet-100">課題</p>
        <p className="text-lg bg-violet-100">範囲</p>
        <p className="text-lg bg-violet-100">英語1</p>
        <Link href={'https://classroom.google.com/u/1/c/NjA3MzAzNTYxNDM2/m/NjQ2NjUxMjUwNDA2/details'} className="text-lg col-span-2 p-1 m-0">予習ノート</Link>
        <p className="text-lg bg-violet-100">保健体育</p>
        <p className="text-lg col-span-2">レポート</p>
        <p className="text-lg bg-violet-100">情報1</p>
        <p className="text-lg col-span-2">長期課題2(Excel)</p>
        <p className="text-lg bg-violet-100">基礎物理1</p>
        <p className="text-lg col-span-2">プリント(Classroomに掲載)</p>
      </div>
    </div>
  )
}

export default WinterHw