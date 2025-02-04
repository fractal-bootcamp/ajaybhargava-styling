import { useAutoAnimate } from "@formkit/auto-animate/react";
import { useState } from "react";

type Task = {
    id: number,
    title: string,
    description: string,
    isCompleted: boolean
}


// This is useful for pulling the function out of the React Tree for Unit Testing
// Now this function is independently testable with an array of tasks and an index to toggle
function sortAndCheck(items: Task[], indexToToggle: number): Task[] {
    console.log(items)
    const newItems = items.map((e, currIdx) => {
        if (indexToToggle === currIdx) return {...e, isCompleted: !e.isCompleted}
        return e
    })
    
    console.log(newItems)
    const sortedItems = newItems.toSorted((task1, task2) => {
        return Number(task2.isCompleted) - Number(task1.isCompleted)
    })
    
    console.log(sortedItems)
    return sortedItems
}


export default function TaskList({ items }: { items: Task[] }) {
    const [localItems, setLocalItems] = useState<Task[]>(items)
    const [parent] = useAutoAnimate()

    return(
        <div ref={parent}>
            {/* Mapping function takes index, array, and a function */}
            {localItems.map((item, idx) => (
                <div key={item.id} className="py-2">
                    <div key={item.id} className={`flex row-auto border-1 border-gray-200 min-w-[400px] rounded-lg p-4 ${item.isCompleted ? 'bg-green-100' : ''}`}>
                        <div className="flex items-center justify-center p-2">
                        <input type="checkbox" checked={item.isCompleted} onClick={() => setLocalItems(sortAndCheck(localItems, idx))} className={`appearance-none rounded-lg w-6 h-6 border-1 ${item.isCompleted ? 'bg-green-500' : ''}`} />
                    </div>
                    <div className="flex-col text-start px-2">
                        <div className="flex-row text-xl">
                            {item.title}
                        </div>
                        <div className="flex-row font-light text-sm text-gray-500">
                            {item.description}
                        </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}