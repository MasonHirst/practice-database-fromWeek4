const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())


const persons = require('./db.json')


app.get('/api/persons', (req, res) => {
    res.status(200).send(persons)
})


app.post('/api/persons', (req, res) => {
    const {firstName, lastName, age, favColor, hometown, picURL} = req.body

    let greatestId = 0 
        for (let i = 0; i < persons.length; i++) {
           if (persons[i].id > greatestId) {
                 greatestId = persons[i].id
            }
        }    
    nextId = greatestId + 1

    let newPerson = {
        id: nextId,
        firstName,
        lastName,
        age: +age,
        favColor,
        hometown,
        picURL
    }

    persons.push(newPerson)
    res.status(200).send(persons)
})



app.listen(5025, () => console.log('server is up and running on port 5025!'))