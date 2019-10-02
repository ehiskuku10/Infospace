const DISPLAY_BACK_DROP = "DISPLAY_BACK_DROP"

export const displayBackdrop = (visibility) => ({
    type: DISPLAY_BACK_DROP,
    visibility
    
})

export default function reducer(state={
    backdropVisibility: false
}, action) {
    switch (action.type) {
        case DISPLAY_BACK_DROP:
            return {
                ...state,
                backdropVisibility: action.visibility
            }
        default:
            return state
    }
}