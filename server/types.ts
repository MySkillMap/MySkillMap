// This is used for any custom types in our server.ts file.


// Any error logged will follow the types in this ServerError object
export type ServerError = {
    log: string;
    message: {err: string};
    status: number;
  }
