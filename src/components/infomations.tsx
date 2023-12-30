import { Paper } from "@mui/material"

const INFOMATIONS = [
  {
    title: "このページについて",
    date: "2024.01.01",
    contents: "このページは元々あったOMUCT_1-4のリプレース版です。まだまだ開発途中ですが、ご活用いただけると幸いです。"
  },
  {
    title: "合唱プロジェクトについて",
    date: "2024.01.01",
    contents: "合唱プロジェクトは名前を「Clef Project」と改め、まもなく再始動します。"
  }
]

const Infomations = () => {
  return (
    INFOMATIONS.map((item) => {
      return (
        <Paper>
          <h3 className="text-lg">{item.title}</h3>
          <p className="text-blue-900">{item.date}</p>
          <p>{item.contents}</p>
        </Paper>
      )
    })
  )
}

export default Infomations