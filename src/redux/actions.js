const loadData = (data) => {
    return {
        type: "LOAD_DATA",
        payload: data
    }
}

const loadModule = (data) => {
    return {
        type: "LOAD_MODULE",
        payload: data
    }
}

const isDataLoaded = () => {
    return {
        type: "IS_DATA_LOADED",
    }
}

const actions = { loadData, loadModule, isDataLoaded }

export default actions