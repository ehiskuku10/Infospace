import axios from "axios"

const axiosInstance = axios.create({
    baseURL: 'https://api.pexels.com/v1',
    headers: {
        "Authorization": `Bearer 563492ad6f917000010000010105a150a3b14b6ca891654288f6f90a`
    }
})

const SWITCH_CATEGORY = "SWITCH_CATEGORY"
const LOAD_PHOTOS = "LOAD_PHOTOS"
const HAS_LOADED_PHOTOS = "HAS_LOADED_PHOTOS"

export const switchCategory = (photos) => {
    return ({
        type: SWITCH_CATEGORY,
        photos: photos
    })
}

export const hasLoaded = (response) => {
    return ({
        type: HAS_LOADED_PHOTOS,
        response: response
    })
}

export const loadPhotos = (photos) => {
    return ({
        type: LOAD_PHOTOS,
        photos: photos
    })
}


export const fetchPhotos = (e) => (dispatch) => {
    e.preventDefault()
    dispatch(hasLoaded(false));
    axiosInstance({
        method: "get",
        url: `https://api.pexels.com/v1/search?query=${e.target.id}&per_page=6&page=1`,
        headers: {
            "Authorization": `Bearer 563492ad6f917000010000010105a150a3b14b6ca891654288f6f90a`
        }
    }).then(res => {
           console.log(res.data.photos)
           dispatch(switchCategory(res.data.photos));
           dispatch(hasLoaded(true));
    })
}



export default function reducer(state={
    photos: [],
    loaded: false
}, action) {
    switch (action.type) {
        case SWITCH_CATEGORY:
            return {
                ...state,
                photos: action.photos
            }
        case LOAD_PHOTOS:
            return {
                ...state,
                photos: action.photos
            }
        case HAS_LOADED_PHOTOS:
            return {
                ...state,
                loaded: action.response
            }
        default:
            return state
    }
}