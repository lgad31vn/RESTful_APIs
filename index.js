import express from 'express';
import connectDB from './config/db';
import routes from './src/routes/routes';

const app = express();
const PORT = 4000;

//mongoose connection
connectDB();

//body parser setup
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); //works like body-parser to parse the request into language that api can read

//use route with regular route function and app.route
//route(app);

//use app.use with router = express.Router();
app.use('/contact', require('./src/routes/routerRoutes'));
// routes(app);

//Serveing static files images, pdf, ...
app.use(express.static('public'));

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
