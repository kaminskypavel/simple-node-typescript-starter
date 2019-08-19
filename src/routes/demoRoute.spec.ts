import request from 'supertest';
import app from '../app';

describe('GET /demo', function() {
	it('responds with json', async () => {
		const response = await request(app).get('/demo');
		expect(response.status).toBe(200);
		expect(JSON.parse(response.text)).toEqual({status: 'success', data: 'this is a demo controller'});
	});
});
