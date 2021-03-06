require('dotenv').config();

const express = require('express');
const app = express();
const  port = 8000;
const mongoose = require('mongoose');
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.set('view-engine', 'ejs')




mongoose.connect(process.env.DATABASE_URL, {UseNewUrlParser: true})
const db = mongoose.connection;
db.on('error', (error) => {
    console.error(error);
});
db.once('open', () => {
    console.log('database connected');
});

const formsRoutes = require('./Routes/forms')
app.use('/forms', formsRoutes)

const hotelsRoutes = require('./Routes/hotels')
app.use('/hotels', hotelsRoutes);

app.listen(port, () => {
   console.log(`Server started to port: ${port}`);
});