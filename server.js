const express = require('express')
const path = require('path')
const app = express()

const Rollbar = require('rollbar')

const rollbar = new Rollbar({
    accessToken: '08ee7d46fe52446ea577972a2fe9303d',
    captureUncaught: true,
    captureUnhandledRejections: true
})

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './client/index.html'))
    rollbar.info('Html was monitored successfully!')
})

const port = process.env.PORT || 5150 

app.use(rollbar.errorHandler())

app.listen(port, () => console.log(`Let's rock on port: ${port}`))
