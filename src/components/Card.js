import "./Card.css"

import React from 'react'
import { isEmpty } from "lodash"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFutbolBall } from '@fortawesome/free-solid-svg-icons'


function Card(props) {
 
    
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
        
        
                <img className="card__img" src={require(`../player-images/${props?.Id}.jpg`)} alt=""/>
          
        <div className="card__body">
            <h2 className="card__title">{props?.PFName}</h2>
            <p className="card__desc">{props?.SkillDesc}</p>
            <p className="card__price">
                ${props?.Value}
            </p>
            <div className="upcoming_match"><p>{" "}</p>Upcoming Match </div>
           {!isEmpty(props?.UpComingMatchesList)  && props?.UpComingMatchesList?.length>0 && props?.UpComingMatchesList[0]?.CCode ? <div>
            <p>
              {props?.UpComingMatchesList[0]?.CCode}  <FontAwesomeIcon icon={faFutbolBall} />  {props?.UpComingMatchesList[0]?.VsCCode}
             
            </p>
            <p>
            {props?.UpComingMatchesList[0]?.MDate && convertTZ(props?.UpComingMatchesList[0]?.MDate)}
            </p>
            </div>:null
            }   
        </div>
    </div>
  )
}

export default Card