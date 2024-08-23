import express from 'express';
import morgan from 'morgan';
import ViteExpress from 'vite-express';

// Set up express instance
const app = express();

// Set up middleware
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));
app.use(express.json());

// Import handler functions from controller.js
import handlerFunctions from './controller.js';

// Routes
app.get('api/items', handlerFunctions.getItems);

// Open door to server
ViteExpress.listen(app, 8080, console.log(`Server running at http://localhost:8080`));