const express = require('express');
const mongoose = require('mongoose')
const app = express();
const cors = require('cors');
require('dotenv/config')

const flowItemsRoutes = require('./routes/api/FlowItems')
const userRoutes = require('./routes/api/Users')
const tagsRoutes = require('./routes/api/FlowTags')
const subscriptionRoutes = require('./routes/api/Subscriptions')

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 3000

mongoose.connect(process.env.MONGO_URI, { useUnifiedTopology: true, useNewUrlParser: true }, () => {
    console.log('You are connected to DB!')
})

app.use('/api/FlowItems', flowItemsRoutes)
app.use('/api/Users', userRoutes)
app.use('/api/tags', tagsRoutes)
app.use('/api/subscriptions', subscriptionRoutes)

app.listen(PORT, () => console.log(`Server running at PORT: ${PORT}`))