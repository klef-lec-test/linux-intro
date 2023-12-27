import Image from 'next/image';
import TimeTable from '@/components/timetable';
import ExamTemplate from '@/components/exam_temprate';

export default function Home() {
  return (
    <div>
      <p className='text-4xl'>2023年度1年4組 時間割共有サイト</p>
      <TimeTable />
      <ExamTemplate />
    </div>
  )
}
