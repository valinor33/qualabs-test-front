
function dataReducer(state = { data: [], module, isDataLoaded: false, selectedModule: 1 }, action) {
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

        case "SELECTED_MODULE":
            return {
                ...state,
                selectedModule: action.payload
            }

        default:
            return state;
    }
}

export default dataReducer