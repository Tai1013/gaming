// state
export const state = () => ({
    DEVICE_TYPE: '',
    dark: true,
})
// actions
export const actions = {

}

// mutation
export const mutations = {
    setDeviceType(state, device) {
        state.DEVICE_TYPE = device
    },
    SET_DARK(state, bool) {
        state.dark = bool;
    },
}

// getters
export const getters = {
    DEVICE_TYPE: (state) => state.DEVICE_TYPE,
    dark: (state) => state.dark,
}