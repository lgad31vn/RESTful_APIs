import express from 'express';

const app = express();
const PORT = 4000;

//use route with regular route function and app.route
//route(app);

//use app.use with router = express.Router();
app.use('/contact', require('./src/routes/routerRoutes'));

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
