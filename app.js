const express = require('express');
const app = express();
const routes = require('./api/routes/index.js')
const swaggerUi = require('swagger-ui-express')
const swaggerJsDoc = require('swagger-jsdoc')
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const swaggerOptions = {
    swaggerDefinition : {
        info : {
            title : "Wednesday Solutions.",
            description: 'Wednesday Solutions',
            contact : {
                name : 'Mahesh Tripathi'
            }
        },
        servers : [`http:localhost:${process.env.PORT}`]
    },
    apis: ["./api/routes/index.js"]
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs))
app.use('/api/user', routes);
app.listen(prosecc.env.PORT, () => console.log(`App running on port number ${process.env,PORT}`))