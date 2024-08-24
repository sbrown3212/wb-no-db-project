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
// Gets data to populate table
app.get('/api/items', handlerFunctions.getItems);

// Deletes a row based on id
app.delete('/api/deleteItem/:id', handlerFunctions.deleteItem);

// Adds item to DATA
app.post('/api/addItem', handlerFunctions.addItem)

// Edits an item row
app.put('/api/editItem', handlerFunctions.editItem)

// Open door to server
ViteExpress.listen(app, 8080, console.log(`Server running at http://localhost:8080`));