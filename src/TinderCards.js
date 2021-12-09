import { SwipeableDrawer } from '@material-ui/core';
import React, {useState} from 'react'
import TinderCard from "react-tinder-card"
import "./TinderCards.css"


function TinderCards() {

  const [people, setPeople] = useState([
    {
      name: "Abobus",
      url:
       "https://memepedia.ru/wp-content/uploads/2021/09/abobus-1-768x670.jpg",

    },
    {
      name: "Lemonchello",
      url:
       "https://fotolupidedahome.files.wordpress.com/2018/12/rmrlplj7hs8.jpg",
    },


  ]);

  const swiped = (direction, nameToDelete) => {
    console.log("removing:" + nameToDelete);
  };

  const outOfFrame = (name) => {
    console.log(name + "out of screen");
  };


  return (
    <div className="tinderCards">
      <div className="tinderCards__cardContainer">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
            onSwipe={(dir) => swiped(dir, person.name)}
            onCardLeftScreen={() => outOfFrame(person.name)}
            >
            
            <div
              style={{ backgroundImage: `url(${person.url})` }}
              className="card"
              >
                <h3>{person.name}</h3>
              </div>

          </TinderCard>
        ))}
      </div> 
      
    </div>
  )
}

export default TinderCards
