export default {
    namespace: 'state',
    state: {
        loginUser: {}
    },
    reducers: {
        setData(state, action) {
            return {
                ...state,
                ...action.payload
            };
        }
    },
    effects: {}
};
