const express = require('express')
const app = express()
const path = require('path')

app.use(express.json())
app.use((req, res, next) => {
    res.locals.data = {}
    next()
})
app.use(express.static('public'))
app.use(require('./config/checkToken'));

// Put API routes here, before the "catch all" route
app.use('/api/users', require('./routes/api/users'));
// Protect the API routes below from anonymous users
const ensureLoggedIn = require('./config/ensureLoggedIn');
app.use('/api/items', ensureLoggedIn, require('./routes/api/items'));
app.use('/api/orders', ensureLoggedIn, require('./routes/api/orders'));

// for react router
app.get('*', (req, res) => {
	res.sendFile(path.resolve(path.join(__dirname, 'public', 'index.html')))
})

module.exports = app

/* Mail Chimp Draft Code Below.

app.post('/signup', (req, res) => {
    const { firstName, lasName, email } = req.body
    if (!firstName || !lastName || !email) {
        res.redirect('/fail.html')
        return
    }
    const data = {
        members: [
            {
                email_address: email,
                status: 'subscribed',
                merge_fields: {
                    FNAME: firstName,
                    LNAME: lastName
                }
            }
        ]
    }


    require('dotenv').config();
    const bodyParser = require('body-parser')
    const fetch = require('node-fetch')

    const postData = JSON.stringify(data)
    fetch('https://us13.api.mailchimp.com/3.0/lists/<YOUR_AUDIENCE_ID>', {
        methods: 'POST',
        headers: {
            Authorization: `auth ${process.env.MAILCHIMP_API}`
        }
        body: postData
    })
    .then(res.statusCode === 200 ?
        res.redirect)
}) */
