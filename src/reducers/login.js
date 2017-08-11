
const initState = {
date:'2'
}

export const login = (state = initState, action) => {
    switch (action.type) {
        case "login_success":
            return {
                ...state,
                date: action.date,

            }
        default:
            return state
    }
}
