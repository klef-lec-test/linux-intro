import Image from 'next/image';
import React from 'react';
import TimeTable from '@/components/timetable';
import ExamTemplate from '@/components/exam_temprate';
import Header from '@/components/header';
import WinterHw from '@/components/winter_hw';
import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Dashboard - 2023_1-4</title>
      </Head>
      <Header title={"Dashboard"}></Header>
      <TimeTable />
      <WinterHw />
      <ExamTemplate />
    </div>
  )
}
