import { createContext } from 'react'

const GameContext = createContext({
  currentCard: { value: -1, flipped: true },
  cards: [],
  score: 0,
  maxScore: 0,
  handleCardClick: () => {},
  incrementScore: () => {},
  updateMaxScore: () => {},
  resetGame: () => {}
})

export default GameContext