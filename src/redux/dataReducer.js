
function dataReducer(state = { auth_module: [], content_module: [], module: "" }, action) {
    switch (action.type) {
        case "LOAD_AUTH":
            return {
                ...state,
                auth_module: action.payload
            };
        case "LOAD_CONTENT":
            return {
                ...state,
                content_module: action.payload
            };
        case "SELECTED_MODULE":
            return {
                ...state,
                module: action.payload
            };

        default:
            return state;
    }
}

export default dataReducer