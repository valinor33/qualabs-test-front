const loadData = (data) => {
    return {
        type: "LOAD_DATA",
        payload: data
    }
}

const actions = { loadData }

export default actions