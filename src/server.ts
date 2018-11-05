import app from './app';
import * as mongoose from 'mongoose';

//mongoose.connect('mongodb://localhost:27017/league-static');

const PORT = process.env.PORT || 3000;

app.listen(PORT, (err) => {
    if (err) {
        return console.log(err);
    }

    return console.log('Express server listening on port ' + PORT);
})
