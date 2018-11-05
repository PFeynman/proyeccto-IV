import app from './app';
import * as mongoose from 'mongoose';

//mongoose.connect('mongodb://localhost:27017/league-static');
mongoose.connect('mongodb://heroku_62llrqpk:b2v4g31m0h86lq64s18sbnlhc0@ds251223.mlab.com:51223/heroku_62llrqpk');

const PORT = process.env.PORT || 3000;

app.listen(PORT, (err) => {
    if (err) {
        return console.log(err);
    }

    return console.log('Express server listening on port ' + PORT);
})
