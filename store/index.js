// state
export const state = () => ({
    DEVICE_TYPE: '',
})
// actions
export const actions = {
    
}

// mutation
export const mutations = {
    setDeviceType(state, device) {
        state.DEVICE_TYPE = device
    }
}

// getters
export const getters = {
    DEVICE_TYPE: state => {
        return state.DEVICE_TYPE
    }
}