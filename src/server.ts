import 'dotenv/config';
import app from './app';
import { initializeAllGridServices } from './grid';
import { initializeOllama } from './ollama/ollama.client';
import { initializeScoutEngine } from './scout/scout.engine';

const PORT = process.env.PORT || 4000;

/**
 * Initialize all ScoutIQ services on startup
 */
async function initializeServices(): Promise<void> {
  console.log("[SERVER] Initializing ScoutIQ services...");
  
  // Initialize GRID Gateway (Central Data + Statistics)
  await initializeAllGridServices();
  
  // Initialize Ollama LLM
  await initializeOllama();
  
  // Initialize Scout Engine
  initializeScoutEngine();
  
  console.log("[SERVER] All services initialized successfully");
}

// Start server
initializeServices().then(() => {
  app.listen(PORT, () => {
    console.log(`🚀 ScoutIQ Server running on port ${PORT}`);
    console.log(`📡 API Endpoints:`);
    console.log(`   • GET  /api/v1/scout/health`);
    console.log(`   • POST /api/v1/scout/analyze`);
    console.log(`   • POST /api/v1/scout/predict`);
    console.log(`   • POST /api/v1/scout/player`);
    console.log(`   • POST /api/v1/scout/team`);
    console.log(`   • GET  /api/v1/scout/tournaments`);
    console.log(`   • GET  /api/v1/scout/series`);
    console.log(`   • GET  /api/v1/scout/teams`);
    console.log(`   • GET  /api/v1/scout/players`);
    console.log(`   • GET  /api/v1/scout/teams/:teamId/stats`);
    console.log(`   • GET  /api/v1/scout/players/:playerId/stats`);
  });
}).catch((error) => {
  console.error("[SERVER] Failed to initialize services:", error);
  process.exit(1);
});

