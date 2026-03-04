"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const hadithRoutes_1 = __importDefault(require("./src/routes/hadithRoutes"));
require("./src/config/env");
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// Use project routes
app.use("/api", hadithRoutes_1.default);
app.get("/", (req, res) => {
    const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Hadith Server</title>
      <style>
        body {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          margin: 0;
          font-family: Arial, sans-serif;
          background: linear-gradient(135deg, #1e90ff, #ff7f50);
          color: #333;
        }
        .container {
          text-align: center;
          padding: 20px;
          background-color: white;
          border-radius: 10px;
          box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
        }
        h1 {
          color: #1e90ff;
          font-size: 2.5rem;
        }
        p {
          color: #555;
          font-size: 1.2rem;
          margin: 10px 0;
        }
        a {
          display: inline-block;
          margin-top: 15px;
          padding: 10px 20px;
          background-color: #1e90ff;
          color: white;
          text-decoration: none;
          border-radius: 5px;
          transition: background-color 0.3s;
        }
        a:hover {
          background-color: #ff7f50;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>Welcome to My Hadith!</h1>
        <p>The server is running and ready to serve your requests.</p>
      </div>
    </body>
    </html>
  `;
    res.send(htmlContent);
});
exports.default = app;
