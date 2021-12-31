const express = require("express")
const app = express();
const swaggerJsdoc = require("swagger-jsdoc")
const swaggerUi = require("swagger-ui-express")

const PORT = process.env.PORT || 8000


const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: "my-api",
            description: "my-api for learnings.",
            contact: {
                name: "pratik sonar"
            },
            servers: ["https://localhost:8000"]
        }
    },
    //['.routes/*.js']
    apis: ["index.js"]
}

const swaggerDocs = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))



app.listen(PORT, () => {
    console.log("server is working on " + PORT)
})