import { Header } from './assets/Layout/Header'
import { Home } from './assets/Pages/Home'
import { Projects } from './assets/Pages/Projects'
import { About } from './assets/Pages/About'
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
