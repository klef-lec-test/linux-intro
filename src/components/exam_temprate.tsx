import { Paper } from "@mui/material";
import { get } from "http";
import React, { useState, useEffect } from "react";
import Left from "../../api/left-days/pkg/left_days_bg.wasm"

const memory = new WebAssembly.Memory({ initial: 20, maximum: 50 });

const ExamTemplate = () => {
  const leftDays = Left.left(0)
  console.log(leftDays)
  return (
    <div>
      <Paper>
        <h2 className="text-2xl">学年末試験<span className="text-xl">(あと {leftDays} 日)</span></h2>
        <p>Comming Soon...</p>
      </Paper>

    </div>
  )
}


export default ExamTemplate
