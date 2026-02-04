import express, { Application } from 'express';
import cors from 'cors';
import 'dotenv/config';
import reportRoutes from './routes/report.routes';
import scoutRoutes from './routes/scout.routes';
import agiRoutes from './routes/agi.routes';
import newScoutRoutes from './api/scout.routes';

const app: Application = express();

app.use(cors());
app.use(express.json());
app.use('/api/v1', reportRoutes);
app.use('/api/v1/scout', scoutRoutes);
app.use('/api/v1', agiRoutes);
// New modular scout routes (ScoutIQ GRID Gateway)
app.use('/api/v1/scout', newScoutRoutes);

export default app;

