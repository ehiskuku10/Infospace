import axios from "axios"

const axiosInstance = axios.create({
    baseURL: 'https://api.pexels.com/v1',
    headers: {
        "Authorization": `Bearer 563492ad6f917000010000010105a150a3b14b6ca891654288f6f90a`
    }
})

const SWITCH_CATEGORY = "SWITCH_CATEGORY"

export const switchCategory = (photos) => {
    return ({
        type: SWITCH_CATEGORY,
        photos: photos
    })
}


export const fetchPhotos = (e) => (dispatch) => {
    e.preventDefault()
    axiosInstance({
        method: "get",
        url: `https://api.pexels.com/v1/search?query=${e.target.id}&per_page=6&page=1`,
        headers: {
            "Authorization": `Bearer 563492ad6f917000010000010105a150a3b14b6ca891654288f6f90a`
        }
    }).then(res => {
           console.log(res.data.photos)
           dispatch(switchCategory(res.data.photos));
    })
}



export default function reducer(state={
    photos: []
}, action) {
    switch (action.type) {
        case SWITCH_CATEGORY:
            return {
                ...state,
                photos: action.photos
            }
        default:
            return state
    }
}