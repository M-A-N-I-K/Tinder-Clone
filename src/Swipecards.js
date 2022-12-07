import React, { useState } from 'react'
import TinderCard from "react-tinder-card"
import "./Swipecards.css"

function Swipecards() {
    const [people, setPeople] = useState([{
        name: "Elon musk",
        url: "https://wallpapercave.com/dwp2x/wp2048440.jpg"
    },
    {
        name: "Jeff Bezos",
        url: "https://wallpapercave.com/wp/wp4025589.jpg"
    }
    ]);

    const swiped = (direction, nameToDelete) => {
        console.log("Removing : ", nameToDelete);
        // setLastDirectiom(direction);
    }
    const outOfFrame = (name) => {
        console.log(name, " Out of Frame");
    }

    return (
        <div className='swipeCards'>
            <div className="tinder__cardContainer">
                {people.map((person) => (
                    <TinderCard className='swipe'
                        key={person.name}
                        properSwipe={["up", "down"]}
                        onSwipe={(dir) => swiped(dir, person.name)}
                        onCardLeftscreen={() => outOfFrame(person.name)}>
                        <div style={{ backgroundImage: `url(${person.url})` }}
                            className="card">
                            <h3>{person.name}</h3>
                        </div>

                    </TinderCard>
                ))}
            </div>
        </div>
    )
}

export default Swipecards
