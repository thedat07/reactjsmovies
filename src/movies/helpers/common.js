import jwt from 'jsonwebtoken'
const TOKEN_KEY = 'reactjs2012'
const saveToken = (token = null) => {
    //save localStorage
    if (token !== null || token !== '') {
        localStorage.setItem('token_login', token)
    }
}
const getTokenLocalStorage = () => {
    let token = localStorage.getItem('token_login');
    return token;
}
const removeToken = () => {
    localStorage.removeItem('token_login');
}
const descrptTokenLocalStorage = () => {
    let token = getTokenLocalStorage();
    let descrptToken = null;
    if (token != null && token !== '') {
        descrptToken = jwt.verify(token, TOKEN_KEY);
        if (descrptToken !== null && descrptToken !== '') {
            return descrptToken;
        }
        return null;
    }
    return descrptToken;
}
const isAuthenticated = () => {
    let token = descrptTokenLocalStorage();
    if (token !== null && token !== '') {
        return true
    }
    return false
}
const isEmptyObject = (obj) => {
    for (let prop in obj) {
        if (obj.hasOwnProperty(prop)) {
            return false;
        }
    }
    return JSON.stringify(obj) === JSON.stringify({});
}
const checkTrailerVideo = (videos = {}) => {
    let check = false;
    if (videos.hasOwnProperty('results')) {
        if (videos.results.length > 0) {
            return true;
        }
    }
    return check;
}
export const helper = {
    saveToken,
    descrptTokenLocalStorage,
    removeToken,
    isAuthenticated,
    isEmptyObject,
    checkTrailerVideo

}