const request = require('supertest');
const app = require('../server');

describe('Todo API', () => {

  test('GET /todos returns an array', async () => {
    const res = await request(app).get('/todos');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  test('POST /todos creates a new todo', async () => {
    const res = await request(app)
      .post('/todos')
      .send({ text: 'Test todo' });
    expect(res.statusCode).toBe(201);
    expect(res.body.text).toBe('Test todo');
  });

  test('GET /health returns ok', async () => {
    const res = await request(app).get('/health');
    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe('ok');
  });

});