<<<<<<< HEAD
"use client"
import Image from 'next/image';
import React from 'react';
import TimeTable from '@/components/timetable';
=======
import Image from 'next/image'
import TimeTable from '@/components/timetable'
>>>>>>> parent of 02260d9 (update layout.tsx, page.tsx and exam_temprate.tsx)
import ExamTemplate from '@/components/exam_temprate';
import Header from '@/components/header';
import WinterHw from '@/components/winter_hw';
import Head from 'next/head';
import Info from '@/components/info_template';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Dashboard - 1-4</title>
        <meta lang='ja' />
      </Head>
      <Header title={"Dashboard"}></Header>
      <TimeTable />
      <WinterHw />
      <ExamTemplate />
<<<<<<< HEAD
      <Info />
    </div>
=======
    </div> 
>>>>>>> parent of 02260d9 (update layout.tsx, page.tsx and exam_temprate.tsx)
  )
}
