const express = require('express');
const { default: mongoose } = require('mongoose');
const app = express()
const dotenv = require('dotenv')
const userRouter = require('./Routes/UserRoute')
dotenv.config()


app.use(express.json())
app.use('/api/users', userRouter )



//connect to DB
mongoose.set('strictQuery', true)
mongoose.connect(process.env.MONGO_URI, err=> err? console.log(err) : console.log('DB is connected ...'))


const PORT = process.env.PORT || 7000;
app.listen(PORT, err=> err? console.log(err) : console.log(`Server is running on ${PORT}...`))
