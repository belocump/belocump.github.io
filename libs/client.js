import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: "belocump",
  apiKey: process.env.API_KEY,
});
