import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/post.js'

const app = express();

app.use(bodyParser.json({limit:"30mb", extended:"true"}))
app.use(bodyParser.urlencoded({limit:"30mb", extended:"true"}))
app.use(cors());
app.use('/post',postRoutes);

const CONNECTION_URL='mongodb+srv://oni:Onioni22@cluster0.y8usq.mongodb.net/<dbname>?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL,{useNewUrlParser:true, useUnifiedTopology:true})
        .then(()=> app.listen(PORT, ()=> console.log(`Server running on port:${PORT}`)))
        .catch(err => console.log(err.message))

mongoose.set('useFindAndModify', false)
