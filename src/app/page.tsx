import Home from "./components/home"
import { source } from "./utils"

export default async function (){
  const url = await source.getInstance().getSource();
  return(
    <>
      <Home url={url}/>
    </>
  )
}