import { Message, SystemMessage } from "../../models/chat"

export const CHAT_MESSAGE = "chat_message"
export const SYSTEM_MESSAGE = "system_message"

export interface ChatEmitterEvents {
    [CHAT_MESSAGE]: (data: { message: Message }) => void
    [SYSTEM_MESSAGE]: (data: { message: SystemMessage }) => void
}
