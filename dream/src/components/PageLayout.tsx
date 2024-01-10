import React from 'react'
import SideMenu from './SideMenu'
import NavBar from './NavBar'
import MainSection from './MainSection'
import Footer from './Footer'

const PageLayout = () => {
  return (
    <>
      <div className='px-10'>
        <NavBar />
        <div className='grid grid-cols-6'>
          <SideMenu />
          <MainSection />
        </div>
        <Footer />
      </div>
    </>
  )
}

export default PageLayout
