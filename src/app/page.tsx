import Image from 'next/image';
import React from 'react';
import TimeTable from '@/components/timetable';
import ExamTemplate from '@/components/exam_temprate';
import Header from '@/components/header';
import WinterHw from '@/components/winter_hw';

export default function Home() {
  return (
    <div>
      <Header title={"Dashboard"}></Header>
      <TimeTable />
      <WinterHw />
      <ExamTemplate />
    </div>
  )
}
