"use client"
import Image from 'next/image';
import React from 'react';
import TimeTable from '@/components/timetable';
import ExamTemplate from '@/components/exam_temprate';
import Header from '@/components/header';
import WinterHw from '@/components/winter_hw';
import Head from 'next/head';
import Info from '@/components/info_template';

export default function Home() {
  return (
    <>
      <Head>
        <title>Dashboard - 1-4</title>
        <meta name='description' content="OMUCT 1年4組の時間割と連絡事項・提出物等の共有ページです。" />
      </Head>
      <Header title={"Dashboard"}></Header>
      <TimeTable />
      <ExamTemplate />
      <Info />
    </>
  )
}
