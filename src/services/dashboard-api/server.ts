import * as trpcExpress from "@trpc/server/adapters/express";
import express from "express";
import cors from "cors";
import { localTrpcCompose } from "./app/composition-root";

// created for each request
const createContext = () => ({});
const app = express();

app.use(cors());

app.use(
  "/trpc",
  trpcExpress.createExpressMiddleware({
    router: localTrpcCompose().appRouter,
    createContext,
  }),
);

app.listen(4000, () => {
  console.log("Server is running on http://localhost:4000/trpc");
});
