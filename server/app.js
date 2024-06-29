const express = require("express")
const swaggerUi = require("swagger-ui-express")
const YAML = require("yamljs")


const swaggerDocument = YAML.load("./FrontEnd_Hiring_Challenge_APIs.yml")
const app = express()

app.use("/api-docs",swaggerUi.serve,swaggerUi.setup(swaggerDocument))
app.listen(3000,()=>{
    console.log("Swagger ui running in port 3000")
})