let inputDirection = { x: 0, y: 0 }
let lastInputDirection = { x: 0, y: 0 }

export const headTo = { degrees : 0, headAngle : "straight"}



window.addEventListener('keydown', e => {

  switch (e.key) {
    case 'ArrowUp':
      if (lastInputDirection.y !== 0) break
      headTo.degrees = 0
      headTo.headAngle = "straight"
      inputDirection = { x: 0, y: -1 }
      break
    case 'ArrowDown':
      if (lastInputDirection.y !== 0) break
      headTo.degrees = 180      
      headTo.headAngle = "straight"
      inputDirection = { x: 0, y: 1 }
      break
    case 'ArrowLeft':
      if (lastInputDirection.x !== 0) break
      headTo.degrees = -90
      headTo.headAngle = "left"
      inputDirection = { x: -1, y: 0 }
      break
    case 'ArrowRight':
      if (lastInputDirection.x !== 0) break
      headTo.degrees = 90
      headTo.headAngle = "right"
      inputDirection = { x: 1, y: 0 }
      break
  }
})

export function getInputDirection() {
  lastInputDirection = inputDirection
  return inputDirection
}