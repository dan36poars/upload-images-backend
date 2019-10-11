const fs = require('fs');
const path = require('path');
const folder = path.resolve(__dirname, '..', 'assets');

module.exports = {
    store(req, res) {

        console.log(1);

        // callback is a asyncronous function
        // this code is a bad code. because inflate the function 
        // on inside other.
        // how figure out this code
        // fs.readFile( folder +'/file1.txt', (err, contents) => {
        //     // console.log(err, 'successfully open' + String(contents) );
        //     console.log(4)
        //     fs.readFile( folder + '/file2.txt', ( err2, contents2 ) => {
        //         console.log(err, 'successfully open: ' + String(contents) );
        //         console.log(err2, 'successfully open: ' + String(contents2) );
        //     });
        // });

        // that is the way to resolve the bad code over.
        // then we will use promises

        const readFile = file => new Promise( ( resolve, reject ) => {
            fs.readFile( folder + `/${file}`, (err, contents) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(contents);
                }
            });
        });


        // Promisse statement
        // const promessa = readFile('file2.txt')
        //     .then(results => {
        //         console.log(null, String(results));
        //         return readFile('file1.txt');  
        //     })
        //     .then( results => {
        //         console.log(null, String(results));
        //     });

        // check if promessa variable was resolve
        // with undefined value the promisse was resolved
        // setTimeout( () => { console.log(promessa) }, 3000 );

        // async/await - is new way to work with a Promise.
        // the sugar syntax on the Promise
        // a new way procedence form on a Promise
        const init = async() => {
            try {
                // statements
                const contents = await readFile('file2.txt');
                const contents2 = await readFile('file1.txt');
                return String(contents) + '\n\r' + String(contents2);
            } catch(e) {                
                return e;
            }
        }

        setTimeout(() => { 
            init().then( results => console.log(results) );
        }, 3000);

        init()
        .then( contents => console.log(contents) );

        console.log(2);

        console.log(3);

        return res.json( { msg: true } );
    },

    index( req, res ) {

        const openFile = file => new Promise( ( resolve, reject ) => {
            fs.open( folder + `/${file}`, 'r', ( err , file ) => {
                if (err) {
                   reject(err);
                } else {
                   resolve(file);
                }
            });
        });

        const closeFile = file => new Promise( ( resolve, reject ) => {
            fs.close( file, (err, file ) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(file);
                }
            }); 
        });

   
        const open = async() => {
            try {
                const file = await openFile('file12.txt');
                const fileClose = await closeFile(file);
                resp = [ file, fileClose ];
                return resp;
            } catch(e) {
                return e;
            }
        }

        open()
        .then( result =>  {
            console.log(result);
            return res.json({ msg : result });
        });
      
       

    }


}
