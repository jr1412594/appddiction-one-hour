import React from 'react'

export default function Genre({ shows }) {


    const displayGenres = () => {
        const genres = shows.map(show => {
            return show.genres
        })

        const onlyGenres = genres.flat()

        const uniqGenres = [...new Set(onlyGenres)]
    
        return uniqGenres.map(genre => {
            return <option>{ genre }</option>
        })
    }

    return (
        <div>
            <select 
                className='drop-down'
                name="select"

            >
                <option>Select</option>
                { displayGenres() }
            </select>
        </div>
    )
}
