/**
 * 01 04 00 00 00 16 71 c4 
 * 02 04 00 00 00 16 71 f7 
 * 03 04 00 00 00 16 70 26 
 * 04 04 00 00 00 16 71 91 
 * 05 04 00 00 00 16 70 40 
 * 06 04 00 00 00 16 70 73 
 * 07 04 00 00 00 16 71 a2 
 * 08 04 00 00 00 16 71 5d 
 * 09 04 00 00 00 16 70 8c 
 * 0a 04 00 00 00 16 70 bf 
 * 0b 04 00 00 00 16 71 6e 
 * 0c 04 00 00 00 16 70 d9 
 * 0d 04 00 00 00 16 71 08 
 * 0e 04 00 00 00 16 71 3b 
 * 0f 04 00 00 00 16 70 ea 
 * 10 04 00 00 00 16 72 85 
 * 01 04 00 00 00 16 71 c4 
 * 06 04 00 00 00 16 70 73 
 * 0b 04 00 00 00 16 71 6e 
 * 10 04 00 00 00 16 72 85 
 * 
 * 
 * 01 04 8c 40 34 ff ff ff ff 00 42 01 00 18 05 00 01 01 38 21 73 20 62 53 43 41 36 30 4b 54 4c 2d 44 4f 2f 55 53 2d 34 38 30 00 00 00 5c 10 00 00 00 09 90 00 98 03 27 03 48 00 26 0c e9 00 15 00 17 13 a3 13 82 13 8b 00 1d 00 1c 00 1d 1a 51 00 18 03 7b 00 00 03 9b 00 00 02 58 02 18 01 94 00 00 10 00 20 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 0b ff ff ff ff ff ff ff ff ff ff 08 07 00 00 0c e4 00 28 00 1a f9 e8 
 * 01 04 8c 40 34 ff ff ff ff 00 42 01 00 18 05 00 01 01 38 21 73 20 62 53 43 41 36 30 4b 54 4c 2d 44 4f 2f 55 53 2d 34 38 30 00 00 00 5c 10 00 00 00 09 90 00 98 03 27 03 52 00 26 0c ec 00 15 00 18 13 a1 13 86 13 8b 00 1c 00 1b 00 1d 1a 15 00 18 03 7b 00 00 03 9b 00 00 02 58 02 18 01 94 00 00 10 00 20 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 0d ff ff ff ff ff ff ff ff ff ff 08 07 00 00 0c e4 00 28 00 1a 04 ca 
 * 
 * 01 04 8c 40 34 ff ff ff ff 00 42 01 00 16 05 00 01 01 38 21 73 20 62 53 43 41 36 30 4b 54 4c 2d 44 4f 2f 55 53 2d 34 38 30 00 00 00 5c 10 00 00 00 08 4b 00 ea 02 82 01 fe 00 36 14 d9 00 09 00 09 13 5d 13 47 13 51 00 14 00 14 00 15 1a 2f 00 07 03 72 00 00 03 91 00 00 02 58 02 08 01 93 00 00 10 00 20 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 03 ff ff ff ff ff ff ff ff ff ff 08 07 00 00 0c e4 00 28 00 0e 16 4d
 */

// const config = require('./config');

// const mongoose = require('mongoose');
// mongoose.connect(config.mongodb_url);

const CommandManager = require('./class/Manager/CommandManager');
const commandManager = new CommandManager();

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'admin',
  password : 'qgk112358',
  database : 'monitor'
});
connection.connect();

connection.query('SELECT * FROM temp', (error, results, fields) => {
  results.forEach(result => {
    console.log(result.id);
    // let commands = commandManager.splitCommand(result.);
  });
});

// const result = commandManager.splitCommand('01 04 8c 40 34 ff ff ff ff 00 42 01 00 16 05 00 01 01 38 21 73 20 62 53 43 41 36 30 4b 54 4c 2d 44 4f 2f 55 53 2d 34 38 30 00 00 00 5c 10 00 00 00 08 4b 00 ea 02 82 01 fe 00 36 14 d9 00 09 00 09 13 5d 13 47 13 51 00 14 00 14 00 15 1a 2f 00 07 03 72 00 00 03 91 00 00 02 58 02 08 01 93 00 00 10 00 20 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 03 ff ff ff ff ff ff ff ff ff ff 08 07 00 00 0c e4 00 28 00 0e 16 4d');
// console.log(result);