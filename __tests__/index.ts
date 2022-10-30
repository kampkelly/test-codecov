import { assert } from 'chai';
import supertest from 'supertest';

import app from '../src/app';

const server = supertest.agent(app);

describe('GET /', () => {
  it('should test singe route', async () => {
    const res = await server.get(`/`);

    assert.equal(res.status, 201);
  });
});

