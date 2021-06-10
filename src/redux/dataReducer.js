function dataReducer(state = { data: [] }, action) {
    switch (action.type) {
        case "RESET_DB":
            return {
                ...state,
                users: []

            };
        default:
            return state;
    }
}

export default dataReducer