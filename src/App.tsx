import "./App.css";
import MessageThread from "./components/MessageThread";

const messages = [
	{
		id: 1,
		username: "One",
		userId: 1,
		message:
			"I just completed my first 10K this morning, and I feel amazing. It was a bit of a struggle towards the end, but pushing through the last kilometer was so rewarding. Now, I'm enjoying a big breakfast to refuel. If anyone wants to join me for a run next week, let me know.",
	},
	{
		id: 2,
		username: "One",
		userId: 1,
		message:
			"I'm also planning a weekend getaway to the mountains. I'm excited to get away from the city and enjoy some fresh air. I'm also bringing my running shoes along, so if anyone wants to join me for a run, let me know.",
	},
	{
		id: 3,
		username: "Two",
		userId: 2,
		message:
			"That's awesome! I'm proud of you. I'm also hitting the gym today to work on my strength. I'll let you know if I'm up for a run next week.",
	},
	{
		id: 4,
		username: "One",
		userId: 1,
		message:
			"Something salacious. Has come up in the news. I'm not sure what to make of it. I'm not sure if I should be worried. I'm not sure if I should be excited. I'm not sure if I should be anything. I'm just not sure.",
	},
	{
		id: 5,
		username: "One",
		userId: 2,
		message:
			"Something salacious. Has come up in the news. I'm not sure what to make of it. I'm not sure if I should be worried. I'm not sure if I should be excited. I'm not sure if I should be anything. I'm just not sure.",
	},
	{
		id: 6,
		username: "One",
		userId: 1,
		message:
			"Something salacious. Has come up in the news. I'm not sure what to make of it. I'm not sure if I should be worried. I'm not sure if I should be excited. I'm not sure if I should be anything. I'm just not sure.",
	},
];

function App() {
	return (
		<div>
			<div className="text-4xl py-4 text-start">Message Thread</div>
			<MessageThread messages={messages} />
		</div>
	);
}

export default App;
