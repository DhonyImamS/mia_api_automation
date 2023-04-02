const httpLib = require('supertest');
const reqresServer =  httpLib('https://reqres.in/api');

function createUser(nameUser, jobUser) {
    return reqresServer
            .post('/users')
            .send({
                "name": nameUser,
                "job": jobUser
            });
}

module.exports = {
    createUser
}