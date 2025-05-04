class ApiError extends error {
    constructor(
        statusCode,
        message = "Somthing went wrong",
        errors = [],
        stack = ""
    ) {
        super(message),
            this.statusCode = statusCode,
            this.data = null,
            this.message = message,
            this.success = false,
            this.errors =errors     
    }
}

export {ApiError}