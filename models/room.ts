import User from "./user"

type RoomState = "lobby" | "game"

// RoomUser is a User with additional properties in context of a room
export type RoomUser = User & {
    isReady: boolean
}

type Room = {
    id: string
    name: string
    roomUsers: RoomUser[] // Array of User IDs
    roomState: RoomState
    host: User
}

export default Room
