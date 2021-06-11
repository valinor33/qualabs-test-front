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

const actions = { loadData, loadModule }

export default actions