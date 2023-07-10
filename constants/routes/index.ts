// Base Route names
export const ROOM_NAME = "/room_name"

// Functions for endpoints
const userRoomNameRoute = (path: string) => `${ROOM_NAME}${path}`

// Objects for endpoints - For Fronted
export const ROOM_NAME_ROUTER = {
    RANDOM: (query: { seed: string }) =>
        userRoomNameRoute("/random?=" + query.seed),
}
