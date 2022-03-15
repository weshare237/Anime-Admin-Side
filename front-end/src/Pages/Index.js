import React from 'react'
import CustomTemplate from '../Components/CustomTemplate'
import MainHeader from '../Components/MainHeader'
import Sidebar from '../Components/Sidebar'

const Index = () => {
  return (
    <div class='wrapper'>
      <MainHeader />
      <Sidebar />
      <CustomTemplate />
    </div>
  )
}

export default Index
