import '../styles/timetable.css'
import '../app/globals.css'
import { Paper } from '@mui/material'

const TimeTable = () => {
  return (
    <div>
      <Paper className='grid-init'>
        {/* 見出し */}
        <h1 className='text-xl'>2023年度 1年4組 後期時間割表</h1>
        {/* 列見出し */}
        <h2>時間</h2>
        <h5>月曜日</h5>
        <h5>火曜日</h5>
        <h5>水曜日</h5>
        <h5>木曜日</h5>
        <h5>金曜日</h5>
        {/* 1-2限 */}
        <h2>1</h2>
        <h3>基礎物理1</h3>
        <h3>情報1</h3>
        <h4>総合工学システム実験実習</h4>
        <h3>国語1</h3>
        <h3>基礎数学B</h3>
        <h2>2</h2>
        {/* 3-4限 */}
        <h2>3</h2>
        <h3>英語1</h3>
        <h3>社会1</h3>
        <h3>英語1</h3>
        <h3>芸術</h3>
        <h2>4</h2>
        {/* 昼休み */}
        <h1>昼休み</h1>
        {/* 5-6限 */}
        <h2>5</h2>
        <h3>基礎数学B</h3>
        <h3>化学1</h3>
        <h3>英語表現1</h3>
        <h3>基礎数学C</h3>
        <h3>化学1</h3>
        <h2>6</h2>
        {/* 7-8限 */}
        <h2>7</h2>
        <h3 className='bg-white'></h3>
        <h3>保健体育1</h3>
        <h5 className='bg-indigo-50'>HR</h5>
        <h3 className='bg-white'></h3>
        <h3 className='bg-white'></h3>
        <h2>8</h2>
        <h5 className='bg-white'></h5>
      </Paper>
    </div>
  )
}

export default TimeTable