import Image from 'next/image'
import TimeTable from '@/components/timetable'

export default function Home() {
  return (
    <div>
      <p className='text-4xl'>2023年度1年4組 時間割共有サイト</p>
      <p className='text-2xl text-slate-300'>1年4組 後期時間割</p>
      <TimeTable />
    </div> 
  )
}
