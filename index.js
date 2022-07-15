const axios = require("axios")
const fs = require("fs")

const duckUrl = "https://random-d.uk/api/random"


const apiCall = () => {
    fetch(duckUrl)
    .then((res) => {
        return res.json()
    })
    .then((res) => {
        console.log("res")
        console.log(res.data)
    })
}

const apiCallAxios = () => {
    axios.get(duckUrl)
    .then((res) => {
        console.log(res)
        const duck1 = res.data
        axios.get(duckUrl)
        .then((response) => {
            const duck2 = response.data
            const htmlString = `
            <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        </head>
        <body>
            <h1>Quack Quack Quack</h1>
            <img src="${duck1.url}" alt="">
            <img src="${duck2.url}" alt="">
        </body>
        </html>`
            fs.writeFile("duckImg.html", htmlString, function (err) {
                err ? console.log(err) : console.log("success")
            })
        })
    })
    
}

test("5")

function test (param1) {

}

apiCallAxios()