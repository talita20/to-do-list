const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API de Tarefas',
      version: '1.0.0',
      description: 'API para gerenciamento de tarefas',
      contact: {
        name: 'Talita',
        email: 'talitasv20@gmail.com'
      },
    },
    servers: [
      {
        url: 'http://localhost:3000',
        description: 'Servidor de Desenvolvimento'
      }
    ],
    components: {
      schemas: {
        Task: {
          type: 'object',
          required: ['title'],
          properties: {
            id: {
              type: 'integer',
              description: 'ID da tarefa - gerado automaticamente'
            },
            title: {
              type: 'string',
              description: 'Título da tarefa'
            },
            description: {
              type: 'string',
              description: 'Descrição detalhada da tarefa'
            },
            completed: {
              type: 'boolean',
              description: 'Status de conclusão da tarefa',
              default: false
            },
            created_at: {
              type: 'string',
              format: 'date-time',
              description: 'Data de criação - gerada automaticamente'
            },
            updated_at: {
              type: 'string',
              format: 'date-time',
              description: 'Data da última atualização - atualizada automaticamente'
            }
          }
        },
        Error: {
          type: 'object',
          properties: {
            error: {
              type: 'string',
              description: 'Mensagem de erro'
            }
          }
        }
      }
    }
  },
  apis: ['./src/routes/*.js']
};

module.exports = swaggerJsdoc(options);