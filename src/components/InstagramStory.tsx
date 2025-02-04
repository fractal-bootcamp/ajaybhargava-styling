import { } 

const stories = [
    {
      id: 1,
      avatar: './images/avatar.png',
      image: './images/flowers.jpeg',
      name: 'Helena',
      group: 'Group name',
      time: '3 min ago'
    }
]

type Story = {
    id: number,
    avatar: string,
    image: string,
    name: string,
    group: string,
    time: string
}


export default function InstagramStory({stories} : {stories : Story[]}) {
    const [counter, setCounters] = useState({})
    return (
        <div>

        </div>
    )
}