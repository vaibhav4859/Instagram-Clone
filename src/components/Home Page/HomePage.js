import React, { Fragment } from 'react'
import HomeHeader from './HomeHeader'
import Posts from './Posts/Posts';
import SideBar from './SideBar/SideBar';

function HomePage() {
  return (
    <Fragment>
      <HomeHeader />
      <div style={{ display: 'flex' }}>
        <div style={{ marginLeft: '20%' }}>
          <Posts />
          <Posts />
        </div>
        <SideBar />
      </div>
    </Fragment>
  )
}

export default HomePage;