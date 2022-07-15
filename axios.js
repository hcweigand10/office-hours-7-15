const { default: axios } = require("axios")

const duckUrl = "https://random-d.uk/api/random"
const cocktailUrl = "www.thecocktaildb.com/api/json/v1/1/random.php"
const dogUrl = "http://dog-api.kinduff.com"
const catUrl = "https://cat-fact.herokuapp.com/facts"
const axolotlUrl = "https://axoltlapi.herokuapp.com/"

const apiCall = () => {
    axios.get(duckUrl)
    .then((response) => {
        console.log(response)
    })
}

apiCall()