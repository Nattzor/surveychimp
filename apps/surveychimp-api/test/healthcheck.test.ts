import * as supertest from 'supertest';
import app from '../src/app';

const requestWithSupertest = supertest(app);

describe('Healthcheck', () => {
  test('GET /healthcheck', async () => {
    const res = await requestWithSupertest.get('/healthcheck');
    expect(res.status).toEqual(200);
  });
});