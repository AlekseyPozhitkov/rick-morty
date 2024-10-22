import React, { useEffect, useState } from 'react'
import axios from "axios"
import MediaCard from './MediaCard'

const Cards = () => {

    const [labels, setLabels] = useState([])

    useEffect(() => {
        axios
    })


    return (
        <div className="cards">

            <MediaCard />
        </div>
    )
}

export default Cards