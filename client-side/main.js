// The goal is to have an html page with a bunch of inputs to describe a person. Whenever someone hits submit, or the get all persons button, it console.logs the list of person objects, which is stored in a database (which will just be another js file for now). when they make a new person and submit, it will post that person to the database and console.log the database with the new person so you can see it worked.


const baseURL = 'http://localhost:5025/api/persons'

let getAllBtn = document.querySelector('#get-button')
let submitBtn = document.querySelector('#submit-button')

function getAllPersons(event) {
    event.preventDefault()

    axios.get(baseURL)
    .then((res) => {
        console.log(res.data)
    })
    .catch((err) => {
    console.log(err)
    })
}
getAllBtn.addEventListener('click', getAllPersons)



function addPerson(body) {
    axios.post(baseURL, body).then((res) => {
        console.log(res.data)
    })
}




function submitHandler(event) {
    event.preventDefault()

    let firstName = document.querySelector('#name1')
    let lastName = document.querySelector('#name2')
    let age = document.querySelector('#age')
    let favColor = document.querySelector('#color')
    let hometown = document.querySelector('#home')
    let picURL = document.querySelector('#img')
    
    let bodyObj = {
        firstName: firstName.value,
        lastName: lastName.value,
        age: age.value,
        favColor: favColor.value,
        hometown: hometown.value,
        picURL: picURL.value
    }

    addPerson(bodyObj)

    firstName = ''
    lastName = ''
    age = ''
    favColor = ''
    hometown = ''
    picURL = ''


}
submitBtn.addEventListener('submit', submitHandler)





