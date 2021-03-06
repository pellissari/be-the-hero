const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/dbconnection');

describe('ONG', () => {
    beforeEach(async () => {
        await connection.migrate.rollback();
        await connection.migrate.latest();
    });

    afterAll(() => {
        connection.destroy();
    })
    it('Shou be able to create a new ONG', async () => {
        const response = await request(app)
            .post('/ongs')
            .send({
                name: "aaa",
                email: "contato@apae.com.br",
                whatsapp: "11951686182",
                city: "São Paulo",
                uf: "SP"
            })

        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8);
    })
})