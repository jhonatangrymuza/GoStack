import express from 'express'
const app = express();
import routes from './routes'

app.use(express.json())
app.use(routes);

app.get('/', (request,response) => {
    return response.json({message:"hello World"})
})

app.listen(3333);
console.log("ver started on port 3333!")