const express = require("express")
const app = express();
const swaggerJsdoc = require("swagger-jsdoc")
const swaggerUi = require("swagger-ui-express")

const PORT = process.env.PORT || 8000

app.listen(PORT, () => {
    console.log("server is working on" + PORT)
})