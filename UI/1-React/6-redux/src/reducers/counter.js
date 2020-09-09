
const counter = (state = 10, action) => {
    const { type } = action
    switch (type) {
        case "INCREMENT":
            return state + 1
        case "DECREMENT":
            return state - 1
        default:
            return state
    }
}

export default counter