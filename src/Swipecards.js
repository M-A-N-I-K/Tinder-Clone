import React, { useEffect, useState } from 'react'
import TinderCard from "react-tinder-card"
import "./Swipecards.css"
import axios from "axios";

const baseUrl = axios.create({
    baseURL: "http://localhost:8001"
});

function Swipecards() {
    const [people, setPeople] = useState([]);

    useEffect(() => {
        async function fetchData() {
            baseUrl.get("/tinder/cards").then((response) => {
                setPeople(response.data);
            });
        }
        fetchData();
    }, [])

    console.log(people);

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
                        <div style={{ backgroundImage: `url(${person.imgUrl})` }}
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
