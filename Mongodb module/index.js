const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const dboper =require('./operations');

const url= 'mongodb://localhost:27017/';
const dbname = 'conFusion';

MongoClient.connect(url,{useUnifiedTopology: true} ,(err,client) => {

    assert.equal(err,null);

    console.log("connected to the server");

    const db= client.db(dbname);
    
        dboper.insertDocument(db,{name : "Dish1", description : "Test"},'dishes', (result) =>
        {
            console.log('Insert Document"\n', result.ops)   //ops-> number of operations done

            dboper.findDocuments(db,'dishes', (docs) => 
            {    
                console.log("Found Documents:\n", docs);

                dboper.updateDocument(db, {name: "Dish1"},{description : 'Updated Test'}, 'dishes', (result) => 
                {
                    console.log("Updated Document:\n", result.result);

                    dboper.findDocuments(db,'dishes', (docs) =>
                {
                        console.log("Found Documents:\n", docs);

                        db.dropCollection('dishes',(result) =>
                        {
                            console.log('Dropped Collection: ', result);

                            client.close();
                        });
                });
            });
        });
    });


});
