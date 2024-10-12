import React from 'react'
import Header from '../components/Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer/Footer'

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
    <Footer/>
    
</footer>

</>
  )
}

export default Root