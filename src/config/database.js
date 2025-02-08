const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    port: process.env.DB_PORT || 3306,
    logging: false
  }
);

const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log('MySQL conectado com sucesso');
    
    await sequelize.sync();
    console.log('Tabelas sincronizadas');
  } catch (error) {
    console.error('Erro ao conectar ao MySQL:', error);
    process.exit(1);
  }
};

module.exports = { sequelize, connectDB };