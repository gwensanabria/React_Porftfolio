const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const sendGrid = require('@sendGrid/mail')

const app = express()
const PORT = process.env.PORT || 8080

app.use(bodyParser.json())

app.use(cors())

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE')
    res.setHeader('Access-Control-Allow-Headers', 'Contenet-Type', 'Authorization')
    next()
})

app.get('/api', (req, res, next) => {
    res.send('API Status: Running')
})

app.post('/api/email', (req, res, next) => {

    console.log(req.body)


    sendGrid.setApiKey(process.env.SENDGRID_API_KEY)
    
    const msg = {
        to: 'gwensanabria@gmail.com',
        from: req.body.email,
        subject: 'Website Contact',
        text: req.body.message
    }

    sendGrid.send(msg)
        .then(result => {

            res.status(200).json({
                success:true
            })

        })
        .catch(err => {

            console.log('error: ', err)
            res.status(401).json({
                success: false
            })

        })

})

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });