import { HttpResponse, http } from "msw";
import dummy from "./dummy.json";

export const handlers = [
  http.get("/temporal", () => {
    return HttpResponse.json(dummy.temporalSummary);
  }),
  http.get("/entire", () => {
    return HttpResponse.json(dummy.entireSummary);
  }),
  //   http.get("/entire", async ({ request }) => {
  //     const body = await request.json();
  //     console.log(body);
  //     await delay(5000);
  //     return HttpResponse.json(dummy.entireSummary);
  //   }),
];
