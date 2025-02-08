const express = require('express');
const { connectDB } = require('./config/database');
const taskRoutes = require('./routes/taskRoutes');
require('dotenv').config();
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./docs/swagger');

const app = express();
const PORT = process.env.PORT || 3000;

connectDB();

app.use(express.json());

app.use('/api/tasks', taskRoutes);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});