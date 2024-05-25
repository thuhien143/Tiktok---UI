
function logger(Reducer) {
    return (prevState, action) => {
        console.group(action.type)
        console.log('Prev state: ', prevState)
        console.log('Action: ', action)

        const nextState = Reducer(prevState, action)

        console.log('Next stae: ', nextState)
        console.groupEnd()
        return nextState
    }
}

export default logger