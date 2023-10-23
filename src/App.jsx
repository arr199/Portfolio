import { Header } from './assets/Pages/Header'
import { Home } from './assets/Pages/1-Home/Home'
import { Projects } from './assets/Pages/2-Projects/Projects'
import { About } from './assets/Pages/3-About/About'
import { createContext, useState } from 'react'

export const PageContext = createContext()
function App () {
  const [currentPage, setCurrentPage] = useState('home')

  return (
    <>

   <main className='snap-mandatory snap-y overflow-auto h-screen overflow-x-hidden w-full'>
      <Header></Header>
      <PageContext.Provider value={{ currentPage, setCurrentPage }}>
      <Home></Home>
      <Projects></Projects>
      <About></About>
      </PageContext.Provider>
    </main>
    </>

  )
}

export default App
