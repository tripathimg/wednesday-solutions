const chai = require('chai')
const chaiHttp = require('chai-http')
const expect = chai.expect;
const server = require('../test-server.js')
// Assep running on port number ${port}`))rtion Style
chai.use(chaiHttp)

describe('as', async () => {
    describe('GET /api/user/vehicle/bookings', () => {
        it('should return 200', done => {
            chai.request(server)
                .get("/api/user/vehicle/bookings?uid=1")
                .end((err, res) => {
                    expect(res.statusCode).equal(200);
                    done();
                })
        })

        it('should return 404', done => {
            chai.request(server)
                .get("/api/user/vehicle/booking?uid=1")
                .end((err, res) => {
                    expect(res.statusCode).equal(404);
                    done();
                })
        })
    })


    describe('as', async () => {
        describe('GET /api/user/nearby/vehicle', () => {
            it('should return 200', done => {
                chai.request(server)
                    .get("/api/user/nearby/vehicle?lat=19.144630&lng=72.948790&dist=10")
                    .end((err, res) => {
                        expect(res.statusCode).equal(200);
                        done();
                    })
            })

            it('should return 404', done => {
                chai.request(server)
                    .get("/api/user/nearby/vehicles?lat=19.144630&lng=72.948790&dist=10")
                    .end((err, res) => {
                        expect(res.statusCode).equal(404);
                        done();
                    })
            })
        })
    })

    describe('as', async () => {
        describe('GET /api/user/:uid', () => {
            it('should return 200', done => {
                chai.request(server)
                    .get("/api/user/1")
                    .end((err, res) => {
                        expect(res.statusCode).equal(200);
                        done();
                    })
            })

            it('should return 404', done => {
                chai.request(server)
                    .get("/api/users/2")
                    .end((err, res) => {
                        expect(res.statusCode).equal(404);
                        done();
                    })
            })
        })
    })

    describe('as', async () => {
        describe('GET /api/user', () => {
            it('should return 200', done => {
                chai.request(server)
                    .get("/api/user")
                    .end((err, res) => {
                        expect(res.statusCode).equal(200);
                        done();
                    })
            })

            it('should return 404', done => {
                chai.request(server)
                    .get("/api/users")
                    .end((err, res) => {
                        expect(res.statusCode).equal(404);
                        done();
                    })
            })
        })
    })

    describe('as', async () => {
        const data = {
            uid: 1,
            vid: 1,
            s_lat: 19.144630,
            s_lng: 72.948790,
            d_lat: 19.147740,
            d_lng: 73.041010
        }

        describe('GET api/user/vehicle/request', () => {
            it('should return 200', done => {
                chai.request(server)
                    .post("/api/user/vehicle/request")
                    .send(data)
                    .end((err, res) => {
                        expect(res.statusCode).equal(200);
                        done();
                    })
            })

            it('should return 404', done => {
                chai.request(server)
                    .post('/api/user/vehicle/requests')
                    .send(data)
                    .end((err, res) => {
                        expect(res.statusCode).equal(404);
                        done();
                    })
            })
        })
    })
})