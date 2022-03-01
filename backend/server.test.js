const request = require('supertest');
const app = require('./server');

describe('Maths Api', () => {
    it('POST /api/math --> send a list of csv numbers', () => {
        request(app).post('/api/math').send({
            numbers: "1,2,3"
        }).expect("Content-Type", /json/).expect(201)
            .then((response) => {
                expect(response.body).toEqual(
                    expect.objectContaining({
                        numbers: '1,2,3',
                        sum: 6,
                        average: 2,
                        standardDeviation: 1
                    })
                )
            })
    })

    it('POST /api/math --> validated request body', () => {
        request(app).post('/api/math').send({ numbers: '' }).expect(422)
    })
})