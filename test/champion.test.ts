import * as chai from 'chai';
import * as mongoose from 'mongoose';

import { Champion } from '../src/models/champion';

describe('Champion model test', () => {
    var c = new Champion();

    it('Should be invalid if title is empty', function(done) {
        c.validate(function(err) {
            chai.expect(err.errors.title).to.exist;
            done();
        });
    });

    it('Should be invalid if name is empty', function(done) {
        c.validate(function(err) {
            chai.expect(err.errors.name).to.exist;
            done();
        });
    });

    it('Should be invalid if _id is empty', function(done) {
        c.validate(function(err) {
            chai.expect(err.errors._id).to.exist;
            done();
        });
    });
});

describe('Database test for champions', () => {
    before(function (done) {
        mongoose.connect('mongodb://localhost:27017/league-static-test', {useNewUrlParser: true});
        const db = mongoose.connection;
        db.on('error', console.error.bind(console, 'connection error'));
        db.once('open', function() {
          done();
        });
    });

    it('Should save a new champion in test database', function(done) {
        var testChampion = new Champion({
          _id: 'TestChampion',
          name: 'Test Champion Name',
          title: 'Test Champion Title'
        });
   
        testChampion.save(done);
    });

    it('Should retrieve test champion from test database', function(done) {
        //Look up the 'TestChampion' object previously saved.
        Champion.find({_id: 'TestChampion'}, (err, name) => {
          if(err) {throw err;}
          if(name.length === 0) {throw new Error('No data found!');}
          done();
        });
      });

    after(function(done){
        mongoose.connection.db.dropDatabase(function(){
            mongoose.connection.close(done);
        });
    });
});