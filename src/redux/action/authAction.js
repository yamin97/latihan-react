export const login = (data) => {
    return {
        type: 'LOGIN',
        payload: data
    }
}

export const logout = () => {
    return{
        type: 'LOGOUT'
    }
}

export const contoh = () => {
    return{
        type: 'CONTOH'
    }
}

