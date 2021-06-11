
function dataReducer(state = { data: [], module }, action) {
    switch (action.type) {
        case "LOAD_DATA":
            return {
                ...state,
                data: action.payload
            };
        case "LOAD_MODULE":
            return {
                ...state,
                module: action.payload
            };

        default:
            return state;
    }
}

export default dataReducer