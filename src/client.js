import createXHRClient from 'http';

class Client {
    constructor(config = {}) {
        this.http = createXHRClient(config);
    }

    getContentTypes() {
        throw new Error('Not implemented');
    }

    getContentEntries(options = {}) {
        throw new Error('Not implemented');
    }

    putContentEntry(options = {}, data = {}) {
        throw new Error('Not implemented');
    }

    postContentEntry(options = {}, data = {}) {
        throw new Error('Not implemented');
    }

    deleteContentEntry(options = {}, data = {}) {
        throw new Error('Not implemented');
    }
}

const createClient = (config = {}) => new Client(config);

export { Client, createClient };
