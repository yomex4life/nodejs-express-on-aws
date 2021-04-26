let chai = require('chai');
const chaiHttp = require('chai-http');
let server = require("../src/index");

chai.should();
chai.use(chaiHttp);

describe('Task APi', ()=>{
    describe("GET Posts", ()=>{
        it("Should get all posts,", (done)=> {
            chai.request(server)
            .get('/pt')
            .end((err, response) =>{
                response.should.have.status(200);
                done();
            });
        })
    })
});