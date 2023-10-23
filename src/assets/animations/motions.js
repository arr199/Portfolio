export const transition = { type: 'spring', duration: 0.8 }

export const slideAnimation = (direction, animateDelay) => {
  if (!direction) direction = 'left'
  return {
    initial: {
      x: direction === 'left' ? -100 : direction === 'right' ? 100 : 0,
      y: direction === 'up' ? 100 : direction === 'down' ? -100 : 0,
      opacity: 0,
      transition: { ...transition, delay: 0.5 }
    },
    animate: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: { ...transition, delay: animateDelay ?? 0.3 }
    },
    exit: {
      x: direction === 'left' ? -100 : direction === 'right' ? 100 : 0,
      y: direction === 'up' ? 100 : direction === 'down' ? -100 : 0,
      transition: { ...transition, delay: 0 }
    }
  }
}

export const fadeAnimation = (animationDelay) => {
  return {
    initial: {
      opacity: 0,
      transition: { ...transition, delay: 0.5 }
    },
    animate: {
      opacity: 1,
      transition: { ...transition, delay: animationDelay ?? 0.3 }
    },
    exit: {
      opacity: 0,
      transition: { ...transition, delay: 0 }
    }
  }
}

export const slideRightToLeftAnimation = (animationDelay) => {
  return {
    initial: { x: 100, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    transition: {
      type: 'spring',
      damping: 5,
      stiffness: 40,
      restDelta: 0.001,
      duration: 0.3,
      delay: animationDelay ?? 0.3
    }
  }
}
export const slideBottomTopAnimation = (animationDelay) => {
  return {
    initial: { y: 100, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: {
      type: 'spring',
      damping: 7,
      stiffness: 30,
      restDelta: 0.001,
      duration: 0.6,
      delay: animationDelay ?? 0.3,
      delayChildren: 0.2
    }
  }
}

export const slideLeftToRightAnimation = (animationDelay) => {
  return {
    initial: { x: -100, opacity: 0, transition: { ...transition, delay: 0.5 } },
    animate: { x: 0, opacity: 1, transition: { ...transition, delay: animationDelay ?? 0.3 } },
    exit: { x: -100, opacity: 0, transition: { ...transition, delay: 0 } }
  }
}

export const rotatingAnimation = (animationDelay, initial, duration) => {
  return {

    initial: initial ?? { x: -300, y: -300, scale: 0 },
    animate: { x: 0, y: 0, rotate: 360, scale: 1, duration: duration ?? 2 },
    transition: {
      type: 'spring',
      stiffness: 260,
      damping: 20,
      delay: animationDelay ?? 0.3,
      duration: 0.5

    }

  }
}
