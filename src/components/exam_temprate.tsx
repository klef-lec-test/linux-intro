import { Paper } from "@mui/material";
import { get } from "http";
import React, { useState, useEffect } from "react";
import Left from left-days

const ExamTemplate = () => {
  const left_days: any = Left.left
  console.log(left_days.num_days)
  return (
    <div>
      <Paper>
        <h2 className="text-2xl">学年末試験<span className="text-xl">(あと {left_days.num_days} 日)</span></h2>
        <p>Comming Soon...</p>
      </Paper>

    </div>
  )
}


export default ExamTemplate
