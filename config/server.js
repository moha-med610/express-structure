import app from '../app.js';
import dotenv from 'dotenv';

dotenv.config();

// start the server
const port = process.env.PORT || 3000;

const startingServer = async () => {
    try {
        // Connect to the database
        
        app.listen(port, () => {
            console.log(`Server Running on http://localhost:${port}`);
        });
    } catch (err) {
        console.log('Error To Start Server: ' + err.message);
        process.exit(1);
    }
}

startingServer();