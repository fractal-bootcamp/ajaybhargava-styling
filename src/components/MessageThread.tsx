type Message = {
    id: number,
    username: string,
    userId: number,
    message: string,
}

interface MessageProps {
    msg: Message,
    isConsecutive: boolean
}

function isConsecutive(msg: Message, idx: number, messages: Message[]){
    if (idx === 0 || messages[idx - 1] === undefined) return false
    return msg.userId === messages[idx - 1].userId
}


function Message({msg, isConsecutive}: MessageProps){
    return (
        <div id="Message" className={`grow ${msg.userId === 2 ? 'bg-gray-100' : 'bg-blue-300'} border-1 p-4 text-left rounded-2xl`}>
            {msg.message}
        </div>
    )
}

export default function MessageThread ({messages} : {messages : Message[]}) {
    return (
    <div>
        {messages.map((msg, idx, msgs) => {
            return (
            <div key={msg.id} className="flex w-2xl py-1">
                <div id="AvatarLeft" className="flex-none">
                    <div className={`${ msg.userId === 1 && !(isConsecutive(msg, idx, msgs)) ? 'grow rounded-full border-1 size-14 flex items-center justify-center' : 'grow rounded-full size-14 flex items-center justify-center' }`} >
                    </div>
                </div>
                {/* Set to flex-row-reverse if the message is from the same user */}
                <div id="Columns" className={`flex ${msg.userId === 1 ? 'flex-row' : 'flex-row-reverse' } min-w-full pl-2 pr-2`}> 
                    <Message msg={msg} isConsecutive={isConsecutive(msg, idx, msgs)} />
                    <div id="Spacer" className="grow min-w-[100px]" />
                </div>
                <div id="AvatarRight" className="flex-none">
                    <div className={`${ msg.userId === 2 && !(isConsecutive(msg, idx, msgs)) ? 'grow rounded-full border-1 size-14 flex items-center justify-center' : 'invisible' }`} />
                </div>
            </div>
        )})}
    </div>
    )
}