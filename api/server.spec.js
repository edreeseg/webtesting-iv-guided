const server = require('./server');
const request = require('supertest');

it('server on', async () => {
    const response = await request(server)
        .get('/');
    expect(response.status).toBe(200);
});

it('POST /', async () => {
    const response = await request(server).post('/hobbits').send({ name: 'Ed' });
    expect(response.status).toBe(201);
});