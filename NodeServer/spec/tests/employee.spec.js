var supertest = require('supertest');
var app = supertest('http://localhost:3000');

describe('GET /employees', function () {
    it('returns all employees', function () {
        // newer mocha versions accepts promises as well
        return app
            .get('/employees')
            .set('Accept', 'application/json')
            .expect(200).end(function (err, res) {
                if (err) {
                    done.fail(err)
                } else {
                    let a = res.body;
                    console.log(a);
                    done();
                }
            });
    })
});
