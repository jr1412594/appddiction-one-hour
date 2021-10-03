import React from 'react'
import ShowCard from './ShowCard'

export default function ShowContainer({ shows }) {


    const displayShows = () => {
        return shows.map(show => {
            return <ShowCard show={ show } key={ show.id } />
        })
    }

    return (
        <div className="show-container">
            { displayShows() }
        </div>
    )
}
