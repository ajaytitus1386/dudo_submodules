// Base Route names
export const ROOM_NAME = "/room_name"

export const USER_RATING = "/user_rating"

// Functions for endpoints
const userRoomNameRoute = (path: string) => `${ROOM_NAME}${path}`

const userRatingRoute = (path: string) => `${USER_RATING}${path}`

// Objects for endpoints - For Fronted
export const ROOM_NAME_ROUTER = {
    RANDOM: (query: { seed: string | undefined }) =>
        userRoomNameRoute(
            "/random" + (query.seed ? `?seed=${query.seed}` : "")
        ),
}

export const USER_RATING_ROUTER = {
    NEW: userRatingRoute("/new"),
}
