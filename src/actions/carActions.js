export const REMOVE_FEATURE = "REMOVE_FEATURE";
export const ADD_FEATURE = "ADD_FEATURE";

export const addFeature = (state) => {
    return {
        type: ADD_FEATURE,
        payload: state
    }
}

export const removeFeature = (state) => {
    return {
        type: REMOVE_FEATURE,
        payload: state
    }
}