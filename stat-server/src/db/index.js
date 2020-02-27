const conn_str = "mongodb://"
const author = 'bkseo'

class Conn {
    constructor(name) {
        this.name = name;
    }

    get_name() {
        return this.name
    }

    
}
 
const mycon = new Conn('jjkim')
// module.exports = { conn_str, author }
exports.mycon = mycon