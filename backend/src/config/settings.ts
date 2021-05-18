export const JSON_RESPONSE = {
    SUCCESS : {
        statusCode : 200,
        body : {
            status : "success",
            message : "SUCCESS",
            description : "Service executed successfully",
            data : {}
        }
    },
    BAD_REQUEST : {
        statusCode : 400,
        body : {
            status : "error",
            message : "BAD_REQUEST",
            description : "Some params are missing",
            data : {}
        }
    },
    UNAUTHORIZED : {
        statusCode : 401,
        body : {
            status : "error",
            message : "UNAUTHORIZED",
            description : "Permission denied",
            data : {}
        }
    },
    FORBIDDEN : {
        statusCode : 403,
        body : {
            status : "error",
            message : "FORBIDDEN",
            description : "User role without permissions",
            data : {}
        }
    },
    INTERNAL_SERVER_ERROR : {
        statusCode : 500,
        body : {
            status : "error",
            message : "INTERNAL_SERVER_ERROR",
            description : "Internal server error",
            data : {}
        }
    }
};