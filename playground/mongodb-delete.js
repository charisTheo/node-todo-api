const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to Mongo Servers');
    }
    console.log('Connected to Mongo Servers');

    //deleteMany()
    // db.collection('Todos').deleteMany({text: 'Something to do'}).then((result) => {
    //     console.log(result);
    // });

    //deleteOne()
    // db.collection('Todos').deleteOne({text: 'Something to do'}).then((result) => {
    //     console.log(result);
    // });

    //findOneAndDelete()
    // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    //     console.log(result);
    // });

    db.collection('Users').deleteOne({_id: new ObjectID('5926cda654a6dbcd7a0cf466')}).then((result) => {
        console.log(result);
    });

    // db.close();
})
