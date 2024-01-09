"use client";
import { Paper } from "@mui/material";
import { get } from "http";
import React, { useState, useEffect } from "react";
import { json } from "stream/consumers";



const ExamTemplate = () => {
  const [days, setDays] = useState();
  useEffect(() => {
    fetch('/api/days_left')
      .then((res) => { return res.json(); })
      .then((json) => setDays(json.days_left))
      .catch(() => alert("ERROR"));
  }, []);
  return (
    <div>
      <Paper>
        <h2 className="text-2xl">学年末試験<span className="text-xl">(あと {days} 日)</span></h2>
        <p>Comming Soon...</p>
      </Paper>

    </div>
  )
}

export default ExamTemplate
