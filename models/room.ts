import Player from "./player";

type RoomState = "lobby" | "game";

type Room = {
  id: string;
  name: string;
  players: Player[]; // Array of Player IDs
  roomState: RoomState;
  host: Player;
};

export default Room;
