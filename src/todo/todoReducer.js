const INITIAL_STATE = { description: '', list: [] }

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'DESCRIPTION_CHANGED':
            return { ...state, description: action.payload }            
            break;
        case 'TODO_SEARCHED':
            return { ...state, list: action.payload }
            break;
        case 'TODO_ADDED':
        case 'TODO_CLEAR':
            return { ...state, description: '' }
            break;
        case 'TODO_MARKED_AS_DONE':
            return { ...state, done: true }
            break;
        case 'TODO_MARKED_AS_PENDING':
            return { ...state, done: false }
            break;
        default:
            return state
            break;
    }
}