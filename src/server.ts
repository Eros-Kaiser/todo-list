import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import todoRoutes from './routes/todoRoutes';

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api', todoRoutes);


// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
