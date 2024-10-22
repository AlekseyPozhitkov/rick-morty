import React from 'react'
import Header from './components/Header'
import logo from '../../public/Rick&Morty.svg'
import Sort from './components/Sort'


const Characters = () => {
  return (
    <div className='characters'>
      <Header />
      <img src={logo} alt="title-Rick&Morty" />
      <Sort />


    </div>
  )
}

export default Characters