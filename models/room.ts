import User from "./user";

type RoomState = "lobby" | "game";

type Player = User & {
  isReady: boolean;
};

type Room = {
  id: string;
  name: string;
  players: Player[]; // Array of User IDs
  roomState: RoomState;
  host: User;
};

export default Room;
