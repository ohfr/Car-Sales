export const REMOVE_FEATURE = "REMOVE_FEATURE";
export const ADD_FEATURE = "ADD_FEATURE";

export const addFeature = (payload) => {
    return {
        type: ADD_FEATURE,
        payload: payload
    }
}

export const removeFeature = (payload) => {
    return {
        type: REMOVE_FEATURE,
        payload: payload
    }
}