import * as chai from 'chai';
import * as mongoose from 'mongoose';

import { Item } from '../src/models/items';

describe('Item model test', () => {
    var i = new Item();

    it('Should be invalid if _id is empty', function(done) {
        i.validate(function(err) {
            chai.expect(err.errors._id).to.exist;
            done();
        });
    });

    it('Should be invalid if name is empty', function(done) {
        i.validate(function(err) {
            chai.expect(err.errors.name).to.exist;
            done();
        });
    });
});

describe('Database test for items', () => {
    before(function (done) {
        mongoose.connect('mongodb://localhost:27017/league-static-test', {useNewUrlParser: true});
        const db = mongoose.connection;
        db.on('error', console.error.bind(console, 'connection error'));
        db.once('open', function() {
          done();
        });
    });

    it('Should save a new item in test database', function(done) {
        var testItem = new Item({
          _id: '1000',
          name: 'TestItemName'
        });
   
        testItem.save(done);
    });

    it('Should retrieve test item from test database', function(done) {
        //Look up the 'TestItem' object previously saved.
        Item.find({_id: '1000'}, (err, name) => {
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