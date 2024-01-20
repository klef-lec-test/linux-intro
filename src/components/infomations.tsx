import { Paper } from "@mui/material"

const INFOMATIONS = [
  {
    title: "不具合報告(Issue)について",
    date: "2024.01.20",
    contents: "本ページの不具合につきましては、GitHubのIssueにて受け付けております。不具合の報告は、下記のリンクからお願いいたします。\n<a href=\"https://github.com/haru-0205/timetable-frontend-next/issues\">https://github.com/haru-0205/timetable-frontend-next/issues\</a>\nなお、詳しいやり方は<a href=\"https://timetable-frontend-next.vercel.app/help/how-to-raise-issue\">こちら</a>をご覧ください。"
  },
  {
    title: "本ページの不具合について",
    date: "2024.01.20",
    contents: "本ページの「学年末試験」の欄において、「あとx日」の部分が更新されないという不具合が発生しておりました。ご利用の皆様には多大なるご迷惑をおかけしたことをお詫び申し上げます。\nなお、本不具合につきましては、現在、当方で解決に向けて作業をしております。完了次第こちらに掲載いたします。\nご不便をおかけしますが、ご理解、ご協力のほどよろしくお願いいたします。"
  },
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
          <div className="whitespace-pre-wrap" dangerouslySetInnerHTML={{__html: item.contents}}></div>
        </Paper>
      )
    })
  )
}

export default Infomations