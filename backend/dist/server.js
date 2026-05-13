"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const db_1 = __importDefault(require("./config/db"));
const env_1 = require("./config/env");
// Connect to Database
(0, db_1.default)();
const PORT = env_1.env.port;
app_1.default.listen(PORT, () => {
    console.log(`Server running in ${env_1.env.nodeEnv} mode on port ${PORT}`);
});
