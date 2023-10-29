import { useEffect, useContext, useState } from 'react'
import { PageContext } from '../App'

// TRACK WHAT PAGE IS CURRENTLY BEING VIEWED //
export function useGetCurrentPage () {
  const { currentPage, setCurrentPage } = useContext(PageContext)

  useEffect(() => {
    const myPages = Array.from(document.querySelectorAll('.page'))
    const header = document.querySelector('#header')
    const observerOptions = {
      root: null,
      threshold: 1,
      rootMargin: '0px'
    }

    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          if (e.target.id === 'home-section') {
            setCurrentPage('home')
          } else if (e.target.id === 'projects-section') {
            setCurrentPage('projects')
            header.style.background = 'inherit'
          } else if (e.target.id === 'about-section') {
            setCurrentPage('about')
          }
        }
      })
    }, observerOptions)

    myPages.forEach(e => observer.observe(e))
    return () => observer.disconnect()
  }, [])
  return { currentPage }
}

// TRACK THE WITDH OF THE SCREEN //
export function useGetScreenWidth () {
  const [width, setWidth] = useState(window.innerWidth)
  useEffect(() => {
    function handleResize () {
      setWidth(window.innerWidth)
    }
    //  SET THE WIDTH EVERY TIME WE RESIZE THE BROWSER //
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  return { width }
}
