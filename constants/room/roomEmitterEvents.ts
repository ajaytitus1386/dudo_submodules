import User from "../../models/user"
import Room, { RoomOptionalRules, RoomUser } from "../../models/room"

export const START_ROOM = "start_room"
export const HOST_ENDS_ROOM = "host_ends_room"

export const ROOM_ALREADY_EXISTS = "room_already_exists"
export const ROOM_DOES_NOT_EXIST = "room_does_not_exist"

export const USER_JOINED_ROOM = "user_joined_room"
export const USER_LEFT_ROOM = "user_left_room"
export const USER_ALREADY_IN_ROOM = "user_already_in_room"
export const JOIN_ROOM_SUCCESS = "join_room_success"
export const LEAVE_ROOM_SUCCESS = "leave_room_success"
export const USER_NOT_IN_ROOM = "user_not_in_room"
export const CHANGE_HOST = "change_host"

export const READY_SUCCESS = "ready_success"
export const UNREADY_SUCCESS = "unready_success"
export const USER_READY = "user_ready"
export const USER_UNREADY = "user_unready"

export const UPDATE_ROOM_METADATA = "update_room_metadata"
export const UPDATE_OPTIONAL_RULES = "update_optional_rules"

export const UNKNOWN_ERROR = "unknown_error"

export interface RoomEmitterEvents {
    [START_ROOM]: (data: { newRoom: Room }) => void
    [HOST_ENDS_ROOM]: () => void

    [ROOM_ALREADY_EXISTS]: () => void
    [ROOM_DOES_NOT_EXIST]: () => void

    [USER_JOINED_ROOM]: (data: { user: RoomUser }) => void
    [USER_LEFT_ROOM]: (data: { user: RoomUser }) => void
    [USER_ALREADY_IN_ROOM]: () => void
    [JOIN_ROOM_SUCCESS]: (data: { room: Room }) => void
    [LEAVE_ROOM_SUCCESS]: () => void
    [USER_NOT_IN_ROOM]: () => void
    [CHANGE_HOST]: (data: { newHost: User }) => void

    [READY_SUCCESS]: () => void
    [UNREADY_SUCCESS]: () => void
    [USER_READY]: (data: { user: RoomUser }) => void
    [USER_UNREADY]: (data: { user: RoomUser }) => void

    [UPDATE_ROOM_METADATA]: (data: { room: Room }) => void
    [UPDATE_OPTIONAL_RULES]: (data: { rules: RoomOptionalRules }) => void

    [UNKNOWN_ERROR]: (data: { code: number; message: string }) => void
}
