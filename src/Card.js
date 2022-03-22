import "./Card.css"

import React from 'react'
import { isEmpty } from "lodash"

function Card(props) {
 
    const addDefaultSrc=(ev)=>{
        console.log("test",ev)
        ev.target.src = `../player-images/63706.jpg`
    }
    function convertTZ(date) {
      if(date){ 
        var date = new Date(date + ' UTC');
        console.log(date.toLocaleString());
        return date.toLocaleString() 
      }
      else{ return "--"}
    
    }
  console.log("vv",props?.UpComingMatchesList)
  return (
    <div className='card'>
        
        
                <img onError={()=>addDefaultSrc()} className="card__img" src={require(`../src/player-images/${props?.Id}.jpg`)} alt=""/>
          
        <div className="card__body">
            <h2 className="card__title">{props?.PFName}</h2>
            <p className="card__desc">{props?.SkillDesc}</p>
            <p className="card__price">
                ${props?.Value}
            </p>
            <div className="upcoming_match"><p>{" "}</p>Upcoming Match </div>
           {!isEmpty(props?.UpComingMatchesList)  && props?.UpComingMatchesList?.length>0 && props?.UpComingMatchesList[0]?.CCode ? <div>
            <p>
              {props?.UpComingMatchesList[0]?.CCode} <i className='far fa-futbol' ></i>  {props?.UpComingMatchesList[0]?.VsCCode}
             
            </p>
            <p>
            {props?.UpComingMatchesList[0]?.MDate && convertTZ(props?.UpComingMatchesList[0]?.MDate)}
            </p>
            </div>:null
            }
            
            {/* <button className="card__btn"></button> */}
        </div>
        {/* <h1>{props.playerName}</h1> */}
    </div>
  )
}

export default Card