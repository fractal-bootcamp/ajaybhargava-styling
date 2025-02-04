import './App.css'
import TaskList from './components/TaskList'

const items = [
  {
      id: 1,
      title: "Laundry",
      description: "Wash, dry, fold, and put away clothes and linens",
      isCompleted: false
  },
  {
      id: 2,
      title: "Dishwashing",
      description: "Wash and dry dishes, pots, pans, and utensils.",
      isCompleted: false
  },
  {
      id: 3,
      title: "Vacuuming",
      description: "Vacuum carpets, rugs, and floors throughout the house",
      isCompleted: false
  },
  {
      id: 4,
      title: "Dusting",
      description: "Dust furniture, shelves, and other surfaces",
      isCompleted: false
  },
]


function App() {
  return (
    <div>
      <div className='text-6xl text-start'>
        Task List
      </div>
      <div className='text-sm text-start'>
        Sorted by completion
      </div>
      <TaskList items={items} />
    </div>
  )
}

export default App
