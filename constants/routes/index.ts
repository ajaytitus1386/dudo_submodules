// Base Route names
export const ROOM_NAME = "/room_name"

// Functions for endpoints
const userRoomNameRoute = (path: string) => `${ROOM_NAME}${path}`

// Objects for endpoints
export const ROOM_NAME_ROUTER = {
    RANDOM: userRoomNameRoute("/random"),
}
