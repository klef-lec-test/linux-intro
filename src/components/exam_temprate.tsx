
const ExamTemplate = () => {
  const today: any = new Date();
  const exam_day: any = new Date("2023, 11, 30");
  let days: any = (exam_day - today) / 86400000;
  if (days <= 0) {
    days = 0;
  };
  days = Math.ceil(days);
  return (
    <div>
      <p className="text-3xl">後期中間試験<span className="text-2xl">(あと {days} 日)</span></p>
    </div>
  )
}

export default ExamTemplate
