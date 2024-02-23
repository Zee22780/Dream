import React from 'react'
import SideMenu from './SideMenu'
import MainSection from './MainSection'
import Footer from './Footer'

// interface Props {
//   children: React.ReactNode;
// }

// const PageLayout = ({children}: Props) => {
  const PageLayout = () => {
  return (
    <>
      <div className=''>
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
