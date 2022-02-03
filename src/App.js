import React from "react"
import Navbar from "./components/Navbar"
import Card from "./components/Card"
import dataSet from "./data.js"
import { library } from '@fortawesome/fontawesome-svg-core'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

library.add(faMapMarkerAlt)

export default function App() {
  let cardElements = dataSet.map( item => {
    return(
      <Card
        key={item.id}
        item={item}
      />
    )
  })
  return(
    <>
      <Navbar />
      {cardElements}
    </>
  )
}
