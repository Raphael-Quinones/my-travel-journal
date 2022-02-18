import React from "react"
import Card from "./Card"
import data from "../data"

export default function Content(){

    const dataArray = data.map(item => <Card item={item}/>
        )
    return (
        <div className = "content">
            {dataArray}
            
        </div>
    )
}