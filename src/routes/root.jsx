import React from 'react'
import Header from '../components/Header/Header'
import { Outlet } from 'react-router-dom'

function Root() {
  return (
<>
<header>
    <Header/>
</header>
<main>
    <Outlet/>
</main>

<footer>
    
</footer>

</>
  )
}

export default Root