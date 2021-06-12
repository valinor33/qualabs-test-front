
function dataReducer(state = { data: [], module, isDataLoaded: false }, action) {
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

        case "IS_DATA_LOADED":
            return {
                ...state,
                isDataLoaded: true,
            }

        default:
            return state;
    }
}

export default dataReducer