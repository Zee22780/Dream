import React from 'react'
import SideMenu from './SideMenu'
import NavBar from './NavBar'
import MainSection from './MainSection'
import Footer from './Footer'

const PageLayout = () => {
  return (
    <div>
      <NavBar />
      <SideMenu />
      <MainSection />
      <Footer />
    </div>
  )
}

export default PageLayout
