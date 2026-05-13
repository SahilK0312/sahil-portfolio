import app from './app';
import connectDB from './config/db';
import { env } from './config/env';

// Connect to Database
connectDB();

const PORT = env.port;

app.listen(PORT, () => {
    console.log(`Server running in ${env.nodeEnv} mode on port ${PORT}`);
});
