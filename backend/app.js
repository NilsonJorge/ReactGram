require('dotenv').config()


const express = require("express")
const path = require('path')
const cors = require('cors')

const port = process.env.PORT;

const app = express();

//config JSON and form data response
app.use(express.json());
app.use(express.urlencoded({extended: false}));
// Lista de origens permitidas
const allowedOrigins = ['https://nilsonjorge.github.io', 'http://localhost:5173'];

app.use(cors({
  credentials: true,
  origin: function(origin, callback) {
    // Permitir solicitações sem origem (como de mobile apps ou curl)
    if (!origin) return callback(null, true);
    
    if (allowedOrigins.indexOf(origin) !== -1) {
      // Se a origem está na lista de permitidas
      callback(null, true);
    } else {
      // Se a origem não está na lista de permitidas
      callback(new Error('Not allowed by CORS'));
    }
  }
}));



//Upload directory
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

//DB connection
require("./config/db.js")


//routes
const router = require("./routes/Router.js")

app.use(router);

app.listen(port, () => {
    console.log(`App rodando na porta ${port}`);
})