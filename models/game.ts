import User from "./user";

// Pre-game: Players can join and leave the room
// Pre-round: Dice are rolled and first Player gets turn
// Round: Player with turn can make a bid or other Players can call a challenge
// Post-round: Winner of challege is displayed and host starts next round
// Game-over: Winner of game is displayed and host ends the game
type GamePhase =
  | "pre-game"
  | "pre-round"
  | "round"
  | "post-round"
  | "game-over";

type Bid = {
  quantity: number;
  face: number;
  playerId: string;
};

type Player = User & {
  hand: number[];
};

type Game = {
  playerHands: Player[];
  gamePhase: GamePhase;
  bids: Bid[];
  hasChallengeBeenMade: boolean;
  challengingPlayerId: string;
  winningPlayerId: string;
};

export default Game;
