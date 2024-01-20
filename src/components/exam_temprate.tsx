"use client";
import { Paper } from "@mui/material";
import { get } from "http";
import React, { useState, useEffect } from "react";
import ExamRange from "./exam-range";

const memory = new WebAssembly.Memory({ initial: 20, maximum: 50 });

const ExamTemplate = () => {
  const today: any = new Date();
  const exam_day: any = new Date("2024, 2, 8");
  let days: any = (exam_day - today) / 86400000;
  days = Math.ceil(days);
  return(
    <div>
      <Paper>
        <h2 className="text-2xl">学年末試験<span className="text-xl">(あと{days}日)</span></h2>
        <ExamRange />
      </Paper>

    </div>
  )
}


export default ExamTemplate
