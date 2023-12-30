import { Paper } from "@mui/material";

const ExamTemplate = () => {
  const today: any = new Date();
  const exam_day: any = new Date("2024, 2, 8");
  let days: any = (exam_day - today) / 86400000;
  if (days <= 0) {
    days = 0;
  };
  days = Math.ceil(days);
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
