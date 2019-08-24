import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Modali, { useModali } from 'modali';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import './App.css'


function Home({ deleteFav, favPlayers, stats, user, editFav }) {
    const [exampleModal, toggleExampleModal] = useModali();


    let favs;
    let content = <h1>Loading</h1>
    if (Object.keys(favPlayers).length) {


        content = <h1>Favorites Players! <hr /></h1>
        console.log(favPlayers.players[0])

        favs = favPlayers.players.map((player, id) => {
            return <h1 key={id}> <Link onClick={() => stats(player.playerId)} to='/details' style={{ color: 'gold' }} activeStyle={{ color: 'red' }}>{player.firstName} {player.lastName}</Link>{' '}
                <button onClick={() => deleteFav(player._id)}>Delete</button>


            </h1>
        })
    }





    return (
        <section>
            <div className="myFavs">
                {content}
                {favs}
            </div>
        </section>
    )
}

export default Home;
