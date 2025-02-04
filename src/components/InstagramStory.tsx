import { useState } from "react";
import Avatar from "../images/avatar.png";
import Flower from "../images/flowers.jpeg";

const stories = [
	{
		id: 1,
		avatar: "./images/avatar.png",
		image: "./images/flowers.jpeg",
		name: "Helena",
		group: "Group name",
		time: "3 min ago",
	},
	{
		id: 2,
		avatar: "./images/avatar.png",
		image: "./images/flowers.jpeg",
		name: "Helena",
		group: "Group name",
		time: "3 min ago",
	},
];

type Story = {
	id: number;
	avatar: string;
	image: string;
	name: string;
	group: string;
	time: string;
};

export default function InstagramStory({ stories }: { stories: Story[] }) {
	const [counter, setCounters] = useState<Record<number, number>>({});
	const incrementCounter = (storyId: number) => {
		setCounters((previousCounter: Record<number, number>) => ({
			...previousCounter,
			[storyId]: (previousCounter[storyId] || 0) + 1,
		}));
		console.log(counter);
	};
	return (
		<div>
			{stories.map((story) => (
				<div className="py-2" key={story.id}>
					<div className="flex box-content w-96 h-128">
						<div className="flex flex-col">
							<div className="w-16 h-16 rounded-full overflow-hidden">
								<img src={Avatar} alt="Avatar" />
							</div>
						</div>
						<div className="grow flex-col">
							<div className="grow flex-row text-start p-2">
								<div className="">
									<span className="font-bold">{story.name} </span>
									<span className="font-light text-gray-400">
										in {story.group}
									</span>
								</div>
								<div className="font-light text-gray-400">{story.time}</div>
							</div>
							<div className="flex-row overflow-hidden max-h-[364px] rounded-lg">
								<img src={Flower} alt="Avatar" className="" />
							</div>
							<div className="p-1">
								<div className="flex-row grow text-start font-bold mb-2">
									Post Description
								</div>
								<div className="items-center">
									<div className="flex flex-row items-center gap-2">
										<button
											type="button"
											className="appearance-none"
											onClick={() => {
												incrementCounter(story.id);
											}}
										>
											<svg
												width="24"
												height="21"
												viewBox="0 0 24 21"
												fill={counter[story.id] ? "red" : "none"}
												xmlns="http://www.w3.org/2000/svg"
											>
												<title>Heart</title>
												<path
													d="M20.8401 2.60999C20.3294 2.099 19.7229 1.69364 19.0555 1.41708C18.388 1.14052 17.6726 0.998169 16.9501 0.998169C16.2276 0.998169 15.5122 1.14052 14.8448 1.41708C14.1773 1.69364 13.5709 2.099 13.0601 2.60999L12.0001 3.66999L10.9401 2.60999C9.90843 1.5783 8.50915 0.998704 7.05012 0.998704C5.59109 0.998704 4.19181 1.5783 3.16012 2.60999C2.12843 3.64169 1.54883 5.04096 1.54883 6.49999C1.54883 7.95903 2.12843 9.3583 3.16012 10.39L4.22012 11.45L12.0001 19.23L19.7801 11.45L20.8401 10.39C21.3511 9.87924 21.7565 9.27281 22.033 8.60535C22.3096 7.93789 22.4519 7.22248 22.4519 6.49999C22.4519 5.77751 22.3096 5.0621 22.033 4.39464C21.7565 3.72718 21.3511 3.12075 20.8401 2.60999Z"
													stroke="black"
													stroke-width="2"
													stroke-linecap="round"
													stroke-linejoin="round"
												/>
											</svg>
										</button>
										<span className="font-semibold">
											{counter[story.id] | 0} likes.
										</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			))}
		</div>
	);
}
