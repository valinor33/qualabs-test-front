const loadAuth = (data) => {
    return {
        type: "LOAD_AUTH",
        payload: data
    }
}

const loadContent = (data) => {
    return {
        type: "LOAD_CONTENT",
        payload: data
    }
}

const loadModule = (data) => {
    return {
        type: "SELECTED_MODULE",
        payload: data
    }
}

const actions = { loadAuth, loadContent, loadModule }

export default actions