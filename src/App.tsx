import './App.css'
import InstagramStory from './components/InstagramStory'

const instagram_story = [
  {
    id: 1,
    avatar: './images/avatar.png',
    image: './images/flowers.jpeg',
    name: 'Helena',
    group: 'Group name',
    time: '3 min ago'
  }
]

function App() {
  return (
    <div>
      <div className='text-4xl py-4 text-start'>
        Post
      </div>
    </div>
  )
}

export default App
