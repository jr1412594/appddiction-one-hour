import React from 'react'

export default function ShowCard({ show }) {
    return (
        <div className="show-card">
            <img 
                src={ show.image.medium }
                alt={ show.id }
            />
            <h1>{ show.name }</h1>
            <h4>language: { show.language }</h4>
            <h4>status: {show.status }</h4>
            <h4>rating: { show.rating.average }</h4>
        </div>
    )
}
