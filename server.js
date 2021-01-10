const express = require('express');
const path = require('path');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const app = express();
require('dotenv').config();

const jwt_strategy = require('./middleware/passport-strategy');
const passport = require('passport');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(passport.initialize());
passport.use('jwt', jwt_strategy);

//routes, all routes must use /api prefix because of nginx routing

app.use('/api',authRoutes);

app.use(function (req, res, next) {
    res.sendStatus(404);
});

const PORT = process.env.PORT || 5000;

const mongoose = require('mongoose');
const { allowedNodeEnvironmentFlags } = require('process');

const dbURI = process.env.MONGODB_URI;
mongoose.connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error:'));

db.on('connected', () => {
    app.listen(PORT, () => {
        console.log('Server running');
    });
});
