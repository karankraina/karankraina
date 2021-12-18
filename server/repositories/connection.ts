const pgoptions = {
    connect(client, dc, isFresh) {
        if (isFresh) {
            client.on('notice', (msg) => {
                console.log('notice: ', msg);
            });
        }
    },
    query(e) {
        console.log(e.query);
    },
};
const pgp = require('pg-promise')(pgoptions);
console.log(process.env.DATABASE_URL);

const conString = process.env.DATABASE_URL || 'postgres://postgres:1234@localhost:5432/karankraina';
const db = pgp(conString);

export default db;
