const URL = `http://localhost:3001/stocks`

const getAllStocks = () => {
    return fetch(URL)
    .then(resp => resp.json())
    .catch(error => console.log(error))
}

export default { getAllStocks }

export const someVariable = "some value"
export const someFunction = () => {
    // does stuff
}

