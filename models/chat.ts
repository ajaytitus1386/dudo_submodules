type Message = {
    //Id and name are identical in V1.0
    senderId: string
    senderName: string
    message: string
    timestamp: number
}

type SystemMessage = {
    message: string
    timestamp: number
}

export { Message, SystemMessage }
