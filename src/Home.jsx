import React from 'react'
import Title from './HomeComponents/Title/Title'
import Impact from './HomeComponents/Impact/Impact'
import Programmes from './HomeComponents/Programmes/Programmes'
import Sponsor from './HomeComponents/Sponsor/Sponsor'

const Home = () => {
  return (
    <div>
        <Title />
        <Impact />
        <Programmes />
        <Sponsor />
    </div>
  )
}

export default Home