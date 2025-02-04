const MessageThread = () => {
    return (
        <div className="flex border-1 w-2xl">
            <div id="AvatarLeft" className="flex-none  size-14 bg-blue-100">
                <div className="grow rounded-full border-1 size-14">
                    1
                </div>
            </div>
            <div id="Message" className="grow bg-blue-50 rounded-xl border-1">

            </div>
            <div id="Spacer" className="flex-none size-14">

            </div>
            <div id="AvatarRight" className="flex-none size-14 bg-blue-200">

            </div>
        </div>
    )
}
export default MessageThread;