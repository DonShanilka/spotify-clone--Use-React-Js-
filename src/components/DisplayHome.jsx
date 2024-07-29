import React from 'react'
import Navbar from './Navbar'
import albumData from '../assets/assets'
import AlbumItem from './AlbumItem'

const DisplayHome = () => {
    return (
        <>
            <Navbar />
            <div className='my-5 font-bold text-2xl'>
                {albumData.map((item, index) => (<AlbumItem />))}
            </div>
        </>
    )
}

export default DisplayHome