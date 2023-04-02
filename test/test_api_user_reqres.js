const {expect} = require('chai');
const apiReqres = require('../api/api_user_reqres');


describe('Test API USER - REQRES', async () => {
    it('test api create user reqres should return success', async () => {
        const namaUser = 'Dhony';
        const jobUser = 'Tester';
        const response = await apiReqres.createUser(namaUser, jobUser);

        console.log(response.status);
        expect(response.status).to.equal(201);
    });

    it('test api create user reqres should return success', async () => {
        const namaUser = 123123123123123;
        const jobUser = 'Tester';
        const response = await apiReqres.createUser(namaUser, jobUser);

        console.log(response.status);
        expect(response.status).to.equal(400);
    });

    // it('test api get single user reqres should return success', () => {
        
    // });
});