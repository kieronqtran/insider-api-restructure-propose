
declare namespace Express {
  export interface Request {
    readonly user: {
      email: string;
      name: string;
      permissions: string[];
      aud: string;
    }
  }
}
