import Room from "../../models/room";

export const START_ROOM = "start_room";
export const END_ROOM = "end_room";

export const ROOM_ALREADY_EXISTS = "room_already_exists";
export const ROOM_DOES_NOT_EXIST = "room_does_not_exist";

export const USER_JOINED_ROOM = "user_joined_room";
export const USER_LEFT_ROOM = "user_left_room";
export const USER_ALREADY_IN_ROOM = "user_already_in_room";
export const JOIN_ROOM_SUCCESS = "join_room_success";
export const LEAVE_ROOM_SUCCESS = "leave_room_success";

export const READY_SUCCESS = "ready_success";
export const UNREADY_SUCCESS = "unready_success";
export const USER_READY = "user_ready";
export const USER_UNREADY = "user_unready";

export const UPDATE_ROOM_METADATA = "update_room_metadata";

export const UNKNOWN_ERROR = "unknown_error";

export interface RoomEmitterEvents {
  [START_ROOM]: (data: { newRoom: Room }) => void;
  [END_ROOM]: () => void;

  [ROOM_ALREADY_EXISTS]: () => void;
  [ROOM_DOES_NOT_EXIST]: () => void;

  [USER_JOINED_ROOM]: (data: { userName: string }) => void;
  [USER_LEFT_ROOM]: (data: { userName: string }) => void;
  [USER_ALREADY_IN_ROOM]: () => void;
  [JOIN_ROOM_SUCCESS]: (data: { room: Room }) => void;
  [LEAVE_ROOM_SUCCESS]: () => void;

  [READY_SUCCESS]: () => void;
  [UNREADY_SUCCESS]: () => void;
  [USER_READY]: (data: { userName: string }) => void;
  [USER_UNREADY]: (data: { userName: string }) => void;

  [UPDATE_ROOM_METADATA]: (data: { room: Room }) => void;
  [UNKNOWN_ERROR]: (data: { code: number; message: string }) => void;
}
