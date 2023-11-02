import Home from "./components/home"
import { source } from "./utils"

export default async function (){
  const url = process.env.API_LINK
  console.log(url)
  return(
    <>
      <Home url={url ? url : " no url"}/>
    </>
  )
}