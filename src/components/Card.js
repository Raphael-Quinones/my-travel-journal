import React from "react"
import Sand from "../images/travel_photos/sand_dunes.jpeg"
import Pin from "../images/location_pin.png"
import data from "../data"

//for determining if card is last
const dataLength = data.length;
let i=0;
export default function Card(props){
    //add 1 everytime function is called
    i++;
    return(
        <div>
        <div className = "card">
            <img className = "card--image" src = {require("../images/travel_photos/" + props.item.imageUrl)}/>
            <div className = "card--content">
                <div className = "content--location">
                    <img className = "location--pin" src = {Pin} />
                    <p className = "location--country">
                        {props.item.location}
                    </p>
                    <a href ={props.item.googleMapsUrl}className = "location--maps">
                        View on Google Maps
                    </a>
                </div>

                <div className = "content--place">
                    {props.item.title}
                </div>

                <p className = "content--date">
                    {props.item.startDate} - {props.item.endDate}
                </p>

                <p className = "content--description">
                    {props.item.description}
                </p>

            </div>

            

        </div>
        {/*Don't display hr if last card */}
        {!(data.length === i) && <hr className = "card--border" />}

        </div>
    )
}