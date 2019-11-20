import axios from "axios"
import * as Constants from "./Constants"

const axiosInstance = axios.create({
    baseURL: 'https://api.pexels.com/v1',
    headers: {
        "Authorization": `Bearer 563492ad6f917000010000010105a150a3b14b6ca891654288f6f90a`
    }
})



export const showSignUpPrompt = (decision) => {
    return ({
        type: Constants.SHOW_SIGNUP_PROMPT,
        decision 
    })
}

export const displayBackdrop = (visibility) => ({
    type: Constants.DISPLAY_BACK_DROP,
    visibility
    
})

export const switchCategory = (photos) => {
    return ({
        type: Constants.SWITCH_CATEGORY,
        photos: photos
    })
}

export const hasLoaded = (response) => {
    return ({
        type: Constants.HAS_LOADED_PHOTOS,
        response: response
    })
}

export const loadPhotos = (photos) => {
    return ({
        type: Constants.LOAD_PHOTOS,
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


export const addNewUser = (values) => (dispatch) => {
    axios({
        method: 'POST',
        url: 'http://127.0.0.1:7777/register',
        crossDomain: true,
        data: {
            fullname: values.fullname,
            email: values.email,
            password: values.password
        }
    })
    .then((response) => {
        return console.log(response)
    })  
}

export const showSearchBlock = (option) => ({
    type: Constants.SHOW_SEARCH_BLOCK,
    option
})
        
export const showCreateMagModal = (option) => ({
    type: Constants.SHOW_CREATE_MAG_MODAL,
    option
})