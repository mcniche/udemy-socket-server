import Server from "./classes/server";
import router from './routes/router';
import bodyParser from 'body-parser';
import cors from 'cors';

// OJO: TODO ESTO SE DEBE DEFINIR EN EL MISMO ORDEN O NO FUNCIONA

const server = new Server();

// BobyParser
server.app.use(bodyParser.json());
server.app.use(bodyParser.urlencoded({extended: true}));

// CORS, con esto se permite que cualquier persona
// pueda invocar mis servicios
server.app.use(cors({origin: true, credentials: true}));

// Rutas de servicio
server.app.use('/', router);

server.start(() => {
    console.log(`Servidor corriendo en ${server.port}`);
});


