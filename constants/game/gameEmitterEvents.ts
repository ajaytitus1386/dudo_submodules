import Game, { Bid, GamePhase, Player } from "../../models/game"
import Room from "../../models/room"

export const HOST_STARTS_GAME = "host_starts_game"
export const HOST_ENDS_GAME = "host_ends_game"

export const BROADCAST_GAME_STATE = "broadcast_game_state"
export const DEAL_PLAYER_HAND = "deal_player_hand"

export const PLAYER_BID_MADE = "player_bid_made"
export const PLAYER_CHALLENGE_MADE = "player_challenge_made"
export const ROUND_STARTS = "round_starts"
export const ROUND_ENDS = "round_ends"
export const GAME_OVER = "game_over"

export const NEXT_PLAYER_TURN = "next_player_turn"
export const CHANGE_GAME_PHASE = "change_game_phase"
export const GAME_WINNER = "game_winner"

export interface GameEmitterEvents {
    [HOST_STARTS_GAME]: (data: { game: Game; room: Room }) => void
    [HOST_ENDS_GAME]: (data: { room: Room }) => void

    [BROADCAST_GAME_STATE]: (data: { game: Game }) => void
    [DEAL_PLAYER_HAND]: (data: { hand: number[] }) => void

    [PLAYER_BID_MADE]: (data: { bid: Bid }) => void
    [PLAYER_CHALLENGE_MADE]: (data: {
        challengingPlayerId: string
        //TODO: Remove lastBid from this event
        lastBid: Bid
    }) => void

    [ROUND_STARTS]: (data: { game: Game }) => void
    [ROUND_ENDS]: (data: { game: Game }) => void
    [GAME_OVER]: (data: { game: Game }) => void

    [NEXT_PLAYER_TURN]: (data: { playerId: string }) => void
    [CHANGE_GAME_PHASE]: (data: { newPhase: GamePhase }) => void
    [GAME_WINNER]: (data: {
        winningPlayerId: string
        playerHands: Player[]
    }) => void
}
