declare module "@cashfreepayments/cashfree-js" {
  // You can improve these types as needed

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  export function load(options: { mode: "sandbox" | "production" }): Promise<any>;
}