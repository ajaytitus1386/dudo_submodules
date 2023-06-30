import { Bid } from "../../models/game"

export const START_GAME = "start_game"
export const END_GAME = "end_game"

export const PLAYER_MAKES_BID = "player_makes_bid"
export const PLAYER_MAKES_CHALLENGE = "player_makes_challenge"

export const START_NEXT_ROUND = "start_next_round"

export interface GameListenerEvents {
    [START_GAME]: (data: { hostName: string; roomName: string }) => void
    [END_GAME]: (data: { hostName: string; roomName: string }) => void

    [PLAYER_MAKES_BID]: (data: { bid: Bid; roomName: string }) => void
    [PLAYER_MAKES_CHALLENGE]: (data: {
        playerName: string
        roomName: string
    }) => void

    [START_NEXT_ROUND]: (data: { roomName: string }) => void
}
