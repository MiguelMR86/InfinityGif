import React from 'react'
import Nav from './components/Nav'
import Main from './components/Main'
import ScrollTopBtn from './components/ScrollTopBtn'
function App() {

  return (
    <div className='w-full min-h-screen p-4'>
      <Nav />
      <Main />
      <ScrollTopBtn />
    </div>
  )
}

export default App
