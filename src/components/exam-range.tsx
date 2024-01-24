import React from "react";
import { Paper, Card } from "@mui/material";
import json from "../data/exam-range.json";

const ExamRange = () => {
  return(
    json.map((item) => {
      return(
        <Paper>
          <h3 className="text-lg">{item.subject}</h3>
          <p>範囲：<span className="whitespace-pre-wrap" dangerouslySetInnerHTML={{__html: item.range}}></span></p>
          <p>課題 : {item.homework}</p>
        </Paper>
      )
    })
  )
}

export default ExamRange;