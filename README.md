# Important Notes

```typescript
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
```

This function is not part of the React Tree. This is useful for Unit Testing. Nice way to view the function is to review the `console` for new arrays produced in memory. 