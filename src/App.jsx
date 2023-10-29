import { Header } from './Assets/Layout/Header'
import { Home } from './Assets/Pages/Home'
import { Projects } from './Assets/Pages/Projects'
import { About } from './Assets/Pages/About'
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
