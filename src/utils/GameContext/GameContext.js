import { createContext } from 'react'

const GameContext = createContext({
  cards: [],
  score: 0,
  maxScore: 0,
  handleCardClick: () => {},
  incrementScore: () => {},
  updateMaxScore: () => {},
  resetGame: () => {}
})

export default GameContext