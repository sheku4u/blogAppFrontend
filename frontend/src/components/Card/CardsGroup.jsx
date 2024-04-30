import React from 'react'
import {Card} from '../index' 
import AllNews from '../../assets/AllNews.png'
import Food from '../../assets/Food.png'
import Healthcare from '../../assets/Healthcare.png'
import India from '../../assets/India.png'
import World from '../../assets/World.png'
function CardsGroup() {

   
const cardsData = [
    {cardLink:"#all",
        text:"All",
        imgSrc:AllNews,
    },
    {cardLink:"#medical",
        text:"Medical",
        imgSrc:Healthcare,
    },
    {cardLink:"#fruits",
        text:"Fruits",
        imgSrc:Food,
    },
    {cardLink:"#world",
        text:"World",
        imgSrc:World,
    },
    {cardLink:"#india",
        text:"India",
        imgSrc:India,
    },
]
  return (
    <div>
        <ul style={{display:"flex" , listStyle:"none", justifyItems:"center",}}>
        {
            cardsData.map((card)=>(
                <li key={card.text} style={{marginInline:"0.5em"}}>
                <Card imgSrc={card.imgSrc} imgWidth={"100%"} text={card.text} sectionLink={card.cardLink}/>
                </li>
            ))
        }
        </ul>
    </div>
  )
}

export default CardsGroup