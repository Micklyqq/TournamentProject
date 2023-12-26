require('dotenv').config()
const express = require('express');
const sequelize = require('./db');
const models = require('./models/model')
const cors = require('cors');
const router=  require('./routes/index')
const errorHandler = require('./middleware/ErrorHandlingMiddleware')
const fileUpload = require('express-fileupload');
const path = require('path');

const PORT = process.env.PORT ||5000;

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve(__dirname,"static")));
app.use(fileUpload({}));
app.use('/api',router);



app.use(errorHandler);


const start = async ()=>{
    try {
        await sequelize.authenticate();
        await sequelize.sync( ); // если надо добавить новые данные в модель то передай аргументом {alter:true}
        app.listen(PORT,()=>console.log(`Server is starting on PORT:${PORT}`));
    }
    catch (e) {
        console.log(e);
    }
}

start();
