let assert = require('chai').assert;
let supertest = require('supertest');
let url = supertest('http://127.0.0.1:1508');
let app = require('../app');
let user = require('../routes/user');
let sinon = require('sinon');
let schema = require('../model/schema');
let chai = require('chai');
let expect = chai.expect;

describe('test case for get', ()=>{
	beforeEach(()=>{
		let getStub = sinon.stub(schema.prototype, 'find');
		getStub.yields(null, [{name:"Preeti", username:"Preeti7", password:"hello"}])
	});
	it('equality for username', (done)=>{
		url
		.get('/')
		.expect(200)
		.expect('Content-Type',/json/)
		.end((err,res)=>{
			if(err){
				console.log(err);
				done();
			}
			else{
				assert.equal(res.body[0].username,'pretty');
				done();
			}
		});
	});

});

describe('test cases for post',()=>{
	beforeEach(()=>{
		let schemaStub = sinon.stub(schema.prototype, 'save');
		schemaStub.yields(null, [{name:"preeti", username:"cdghrjgc", password:"hii"}])
	});
	it('equality of name', (done)=>{
		url
		.post('/user')
		.expect(200)
		.expect('Content-Type',/json/)
		.end((err,res)=>{
			if(err){
				console.log(err);
				done();
			}
			else{
				//console.log(res);
				assert.equal(res.body[0].name,'preeti');
				done();
			}
		});
	});
});

describe('test cases for update',()=>{
	beforeEach(()=>{
		let schemaStubUpdate = sinon.stub(schema.prototype, 'update');
		//schemaStubUpdate.yields(null, [{name:"preeti", username:"cdghrjgc", password:"hii"}])
		schemaStubUpdate.withArgs({name:"Preeti"},{$set:{username:"PreetiG"}}).yields(null,{ok:1, nModified:0, n:0})
	});
	it('updation of username', (done)=>{
		url
		.put('/update')
		.expect(200)
		.expect('Content-Type',/json/)
		.send({$set:{username:"PreetiG"}})
		.end((err,res)=>{
			if(err){
				console.log(err);
				done();
			}
			else{
				//console.log(res);
				/*assert.equal(res.body.ok,1);
				assert.equal(res.body.nModified,0);
				assert.equal(res.body.n,0);*/
				
				expect(res.body.ok).to.equal(1);
				expect(res.body.nModified).to.equal(0);
				expect(res.body.n).to.equal(0);
				done();
			}
		});
	});
});

describe('test cases for delete',()=>{
	beforeEach(()=>{
		let schemaStubDelete = sinon.stub(schema, 'remove');
		schemaStubDelete.withArgs({name:"Chandu"}).yields(null, {ok:1, n: 0})
	});
	it('deletion of name', (done)=>{
		url
		.delete('/delete')
		.expect(200)
		.expect('Content-Type',/json/)
		.send({name:"Chandu"})
		.end((err,res)=>{
			if(err){
				console.log(err);
				done();
			}
			else{
				//console.log(res);
				assert.equal(res.body.ok, 1);
				assert.equal(res.body.n, 0);
				done();
			}
		});
	});
});


