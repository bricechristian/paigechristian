import bodyParser from 'body-parser'
import express from 'express'
import path from 'path'
import blogRouter from './blogRouter'
import mongoose from 'mongoose'

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/paigesblog' || process.env.MONGODB);
// mongoose.connect(process.env.MONGODB);

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

const staticFiles = express.static(path.join(__dirname, '../../client/build'))
app.use(staticFiles)

app.use('/api', blogRouter);

app.use('/*', staticFiles)

app.set('port', (process.env.PORT || 3000))
app.listen(app.get('port'), () => {
  console.log(`Listening on ${app.get('port')}`)
})