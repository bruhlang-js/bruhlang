class InvalidFileError extends Error {
    constructor(...args) {
        super(...args);
    }
}

module.exports = {
    InvalidFileError,
}