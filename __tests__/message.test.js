'use strict';

const { app } = require('../lib/server.js');
const { db } = require('../lib/model');
const supertest = require('supertest');
const request = supertest(app);

beforeAll(async () => {
  await db.sync();
});
afterAll(async () => {
  await db.drop();
});

describe('Testing the messages router', () => {
  it('should read from messages data', async () => {
    const response = await request.get('/message');

    expect(response.status).toEqual(200);
    expect(response.body.count).toBeDefined();
    expect(response.body.results).toBeDefined();
  });
  it('should read from messages data', async () => {
    const response = await request.get('/message/1');

    expect(response.status).toEqual(200);
    expect(response.body.count).toEqual(1);
    expect(response.body.results).toBeDefined();
  });
});
