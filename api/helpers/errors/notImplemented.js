class NotImplemented extends Error {
    constructor(message){
        super(message);
        this.name = 'NotImplemented';
    }
}

module.exports = NotImplemented;