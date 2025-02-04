type Message = {
	id: number;
	username: string;
	userId: number;
	message: string;
};

interface MessageProps {
	msg: Message;
	hasPriorMessage: boolean;
	hasNextMessage: boolean;
}

function hasPriorMessage(msg: Message, idx: number, messages: Message[]) {
	if (idx === 0 || messages[idx - 1] === undefined) return false;
	return msg.userId === messages[idx - 1].userId;
}

// look into the array
function hasNextMessage(msg: Message, idx: number, messages: Message[]) {
	if (idx === messages.length || messages[idx + 1] === undefined) return false;
	return msg.userId === messages[idx + 1].userId;
}

function getCornerStyles(
	msg: Message,
	hasPriorMessage: boolean,
	hasNextMessage: boolean,
) {
	if (!hasPriorMessage && !hasNextMessage) {
		return "border-rounded";
	}
	if (msg.userId === 1 && hasPriorMessage) {
		return "border-tl-rounded";
	}
	if (msg.userId === 1 && hasPriorMessage) {
		return "border-tl-rounded";
	}
	if (msg.userId === 2 && hasPriorMessage) {
		return "border-tl-rounded";
	}
	if (msg.userId === 2 && hasPriorMessage) {
		return "border-tl-rounded";
	}
}

function Message({ msg, hasPriorMessage, hasNextMessage }: MessageProps) {
	return (
		<div key={msg.id} className="flex w-2xl py-1">
			<div id="AvatarLeft" className="flex-none">
				<div
					className={`${msg.userId === 1 && !hasPriorMessage ? "grow rounded-full border-1 size-14 flex items-center justify-center" : "grow rounded-full size-14 flex items-center justify-center"}`}
				/>
			</div>
			{/* Set to flex-row-reverse if the message is from the same user */}
			<div
				id="Columns"
				className={`flex ${msg.userId === 1 ? "flex-row" : "flex-row-reverse"} min-w-full pl-2 pr-2`}
			>
				<div
					id="Message"
					className={`grow ${msg.userId === 2 ? "bg-gray-100" : "bg-blue-300"} border-1 p-4 text-left rounded-2xl`}
				>
					{msg.message}
				</div>
				<div id="Spacer" className="grow min-w-[100px]" />
			</div>
			<div id="AvatarRight" className="flex-none">
				<div
					className={`${msg.userId === 2 && !hasPriorMessage ? "grow rounded-full border-1 size-14 flex items-center justify-center" : "invisible"}`}
				/>
			</div>
		</div>
	);
}

export default function MessageThread({ messages }: { messages: Message[] }) {
	return (
		<div>
			{messages.map((msg, idx, msgs) => {
				return (
					<Message
						key={msg.id}
						msg={msg}
						hasPriorMessage={hasPriorMessage(msg, idx, msgs)}
						hasNextMessage={hasNextMessage(msg, idx, msgs)}
					/>
				);
			})}
		</div>
	);
}
