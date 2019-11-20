import * as Constants from './Constants'

export default function Core(state={
    photos: [],
    loaded: false,
    signUpPrompt: false,
    backdropVisibility: false,
    showSearch: false,
    showMagModal: false
}, action) {
    switch (action.type) {
        case Constants.SWITCH_CATEGORY:
            return {
                ...state,
                photos: action.photos
            }
        case Constants.LOAD_PHOTOS:
            return {
                ...state,
                photos: action.photos
            }
        case Constants.HAS_LOADED_PHOTOS:
            return {
                ...state,
                loaded: action.response
            }
        case Constants.DISPLAY_BACK_DROP:
            return {
                ...state,
                signUpPrompt: false,
                backdropVisibility: action.visibility
            }
        case Constants.SHOW_SIGNUP_PROMPT:
            return {
                ...state,
                signUpPrompt: action.decision
            }
        case Constants.SHOW_SEARCH_BLOCK:
            return {
                ...state,
                showSearch: action.option
            }
        case Constants.SHOW_CREATE_MAG_MODAL:
                return {
                    ...state,
                    showMagModal: action.option
                }
        default:
            return state
    }
}
