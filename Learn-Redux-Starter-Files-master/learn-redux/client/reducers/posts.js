// a reducer takes in two things:

//1. the action (info about what happened)
//2. copy of current state


//initially state is empty
function posts(state = [], action) {

    switch (action.type) {

        case "INCREMENT_LIKES":

        const i = action.index;
            //return the updated state
            return [
                ...state.slice(0, i),// before the one we are updating
                { ...state[i], likes: state[i].likes + 1 },//inbetween 
                ...state.slice(i + 1), //agter the one we are updating
            ]

            console.log("increment likes")

        default:
            return state;
    }

    return state

}

export default posts;