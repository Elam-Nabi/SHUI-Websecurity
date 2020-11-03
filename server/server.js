const express = require('express');
const mongoose = require('mongoose')
const app = express();
const cors = require('cors');
require('dotenv/config')

const flowItemsRoutes = require('./routes/api/FlowItems')

app.use('/api/FlowItems', flowItemsRoutes)

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 3000

mongoose.connect(process.env.MONGO_URI, { useUnifiedTopology: true, useNewUrlParser: true }, () => {
    console.log('You are connected to DB!')
})


app.listen(PORT, () => console.log(`Server running at PORT: ${PORT}`))