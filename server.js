const express = require('express');
const path = require('path');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const app = express();

if (process.env.NODE_ENV !== 'production')
    require('dotenv').config();

const jwt_strategy = require('./middleware/passport-strategy');
const passport = require('passport')

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(passport.initialize());
passport.use('jwt',jwt_strategy)

app.use(authRoutes);

app.use(function (req, res, next) {
    res.sendStatus(404);
});

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
    });
}

const PORT = process.env.PORT || 5006;

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
        console.log('-> Connected to the database ');
        console.log(`-> Server running on port ${PORT}`);
    });
});
