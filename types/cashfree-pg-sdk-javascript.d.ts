declare module "cashfree-pg-sdk-javascript" {
  export default class Cashfree {
    constructor(options: { mode: "sandbox" | "production" });
    checkout(options: {
      paymentSessionId: string;
      redirectTarget?: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    }): Promise<any>;
  }
}
