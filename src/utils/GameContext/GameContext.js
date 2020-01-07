import { createContext } from 'react'

const GameContext = createContext({
  cards: [],
  maxScore: 0,
  score: 0,
  handleCardClick: () => {}
})

export default GameContext