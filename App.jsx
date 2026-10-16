import { createElemnt } from "react"
import { createRoot } from "react-dom/client"
import Pageholder from "./Pageholder"
import "./App.css"

const root = createRoot(document.getElementById('root'))

root.render(
  <Pageholder/>
)