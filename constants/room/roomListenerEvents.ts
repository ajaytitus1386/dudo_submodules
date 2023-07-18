import { RoomOptionalRules } from "../../models/room"

export const CREATE_ROOM = "create_room"
export const END_ROOM = "end_room"

export const USER_JOIN_ROOM = "user_join_room"
export const USER_LEAVE_ROOM = "user_leave_room"

export const USER_READY = "user_ready"
export const USER_UNREADY = "user_unready"

export const SET_OPTIONAL_RULES = "set_optional_rules"

/* -------------------------------------------------------------------------- */

/**
 * An interface that defines the what arguments are expected for each event
 */
export interface RoomListenerEvents {
    [CREATE_ROOM]: (data: { roomName: string; hostName: string }) => void
    [END_ROOM]: (data: { roomName: string }) => void

    [USER_JOIN_ROOM]: (data: { roomName: string; userName: string }) => void
    [USER_LEAVE_ROOM]: (data: { roomName: string; userName: string }) => void

    [USER_READY]: (data: { roomName: string; userName: string }) => void
    [USER_UNREADY]: (data: { roomName: string; userName: string }) => void

    [SET_OPTIONAL_RULES]: (data: {
        roomName: string
        rules: RoomOptionalRules
    }) => void
}
