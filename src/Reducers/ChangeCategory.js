const SWITCH_CATEGORY = "SWITCH_CATEGORY"

export const switchCategory = (e) => {
    e.preventDefault()
    console.log(e.target.id)
    return ({
        type: SWITCH_CATEGORY,
        id: Math.floor(Math.random()*5)
    })
}

export default function reducer(state={
    posts: []
}, action) {
    switch (action.type) {
        case SWITCH_CATEGORY:
            return {
                ...state,
                posts: [(action.id)]
            }
        default:
            return state
    }
}