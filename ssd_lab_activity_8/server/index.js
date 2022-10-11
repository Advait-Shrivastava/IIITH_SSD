const express = require('express')
const app = express()

const cors = require('cors')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
const connectDB = require('./config/db')
const User = require('./models/user.model')
const Query = require('./models/studentquery.model')
dotenv.config({ path: './config/config.env' })
connectDB()


app.use(cors())
app.use(express.json())


app.post('/api/register', async (req, res) => {
    console.log(req.body)
    try {
        await User.create({
            roll: req.body.roll,
            password: req.body.password,
            role: req.body.role,
        })
        // res.send(user)
        res.json({ status: 'ok' })
    } catch (err) {
        console.log("Here");
        console.log(err);
        res.json({ status: 'error', error: 'Duplicate rollnumber' })
    }
})

app.post('/api/student/addQuery', async (req, res) => {
    console.log(req.body)
    try {
        await Query.create({
            exam: req.body.exam,
            course: req.body.course,
            question: req.body.question,
            ta: req.body.ta,
            comment: req.body.comment,
        })
        // res.send(user)
        res.json({ status: 'ok' })
    } catch (err) {
        console.log("Here");
        console.log(err);
        res.json({ status: 'error', error: 'Required field not filled' })
    }
})

app.post('/api/login', async (req, res) => {
    const user = await User.findOne({
        roll: req.body.roll,
        password: req.body.password,
        role: req.body.role,
    })
    if(user){

        const token = jwt.sign({
            roll : user.roll,
            password:user.password,
            role:user.role,
        },
        'toker789' 
        )
        return res.json({ status: 'ok',user:token })
    }
    else
    {
        return res.json({ status: 'error',user:false })
    }

    
})


app.get('/api/quote', async (req, res) => {
	const token = req.headers['x-access-token']

	try {
		const decoded = jwt.verify(token, 'toker789')
		const roll = decoded.roll
        const password = decoded.password
        const role = decoded.role
		const user = await User.findOne({ 
            roll: roll,
            password: password ,
            role : role,
        })

		return res.json({ status: 'ok', quote: user.quote })
	} catch (error) {
		console.log(error)
		res.json({ status: 'error', error: 'invalid token' })
	}
})

app.post('/api/quote', async (req, res) => {
	const token = req.headers['x-access-token']

	try {
		const decoded = jwt.verify(token, 'toker789')
		const roll = decoded.roll
        const password = decoded.password
        const role = decoded.role
		const user = await User.updateOne({ 
            roll: roll,
            password: password ,
            role : role,
        },
        { $set: { quote: req.body.quote } }
        )

		return res.json({ status: 'ok'})
	} catch (error) {
		console.log(error)
		res.json({ status: 'error', error: 'invalid token' })
	}
})

app.listen(1337, () => {
    console.log("Server started on 1337")
})