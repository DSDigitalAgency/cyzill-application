// Exporting a utility function for creating custom error objects
export const errorHandler = (statusCode, message) => {
    // Validate input types
    if (typeof statusCode !== 'number') {
        throw new Error('Status code must be a number');
    }

    if (typeof message !== 'string') {
        throw new Error('Message must be a string');
    }

    // Create a new Error object with the provided message
    const error = new Error(message);

    // Set the statusCode property of the error object
    error.statusCode = statusCode;

    // Return the created error object
    return error;
};
