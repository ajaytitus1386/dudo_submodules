export const CREATE_ROOM = "create_room";
export const HOST_ENDS_ROOM = "host_ends_room";

export const USER_JOIN_ROOM = "user_join_room";
export const USER_LEAVE_ROOM = "user_leave_room";

export const USER_READY = "user_ready";
export const USER_UNREADY = "user_unready";

/* -------------------------------------------------------------------------- */

/**
 * An interface that defines the what arguments are expected for each event
 */
export interface RoomListenerEvents {
  [CREATE_ROOM]: (data: { roomName: string; hostName: string }) => void;
  [HOST_ENDS_ROOM]: (data: { roomName: string }) => void;

  [USER_JOIN_ROOM]: (data: { roomName: string; userName: string }) => void;
  [USER_LEAVE_ROOM]: (data: { roomName: string; userName: string }) => void;

  [USER_READY]: (data: { roomName: string; userName: string }) => void;
  [USER_UNREADY]: (data: { roomName: string; userName: string }) => void;
}
