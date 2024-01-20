import { Paper } from "@mui/material"
import INFOMATIONS from "../data/imfomations.json"


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