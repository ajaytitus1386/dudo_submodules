import User from "./user"

// Pre-game: Players can join and leave the room
// Pre-round: Dice are rolled and first Player gets turn
// Round: Player with turn can make a bid or other Players can call a challenge
// Post-round: Winner of challege is displayed and host starts next round
// Game-over: Winner of game is displayed and host ends the game
export type GamePhase =
    | "pre-game"
    | "pre-round"
    | "round"
    | "post-round"
    | "game-over"

export type Bid = {
    quantity: number
    face: number
    playerId: string
}

export type Player = User & {
    hand: number[]
}

export type PlayerStats = User & {
    wins: number
    losses: number
    remainingDice: number
}

export type Round = {
    currentPlayerTurn: string
    playerHands: Player[]
    bids: Bid[]
    hasChallengeBeenMade: boolean
    challengingPlayerId: string
    winningPlayerId: string
}

type Game = {
    roomId: string
    gamePhase: GamePhase
    currentRound: Round
    roundsPlayed: number
    playerStats: PlayerStats[]
}

export default Game
