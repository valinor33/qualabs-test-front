
function dataReducer(state = { data: [] }, action) {
    switch (action.type) {
        case "LOAD_DATA":
            return {
                ...state,
                data: [action.payload]
            };

        default:
            return state;
    }
}

export default dataReducer