const mongoose = require("mongoose");

const PredictionSchema = new mongoose.Schema({
  matchId: { type: String, required: true },
  league: { type: String, required: true },
  homeTeam: { type: String, required: true },
  awayTeam: { type: String, required: true },
  matchDate: { type: Date, required: true },
  
  // Prédictions
  overUnder: { type: String, enum: ["Over 2.5", "Under 2.5"] },
  btts: { type: String, enum: ["Yes", "No", "V1", "V2"] },
  exactScore: { type: String },
  confidence: { type: Number, min: 0, max: 100 },
  
  // Résultat réel (pour l'apprentissage)
  actualScore: { type: String },
  actualOverUnder: { type: String },
  actualBtts: { type: Boolean },
  
  timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Prediction", PredictionSchema);
