import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <p className='text-4xl'>2023年度1年4組 時間割共有サイト</p>
      <p className='text-2xl text-slate-300'>1年4組 後期時間割</p>
      <table className='border-collapse border-solid'>
        <thead>
          <tr>
            <th colSpan={6}>2023年度 1年4組 後期時間割表</th>
          </tr>
          <tr>
            <th></th>
            <th>月曜日</th>
            <th>火曜日</th>
            <th>水曜日</th>
            <th>木曜日</th>
            <th>金曜日</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td rowSpan={2}>基礎物理1</td>
          </tr>
        </tbody>
      </table>
    </div> 
  )
}
