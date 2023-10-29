import { Header } from './Assets1/Layout/Header'
import { Home } from './Assets1/Pages/Home'
import { Projects } from './Assets1/Pages/Projects'
import { About } from './Assets1/Pages/About'
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
