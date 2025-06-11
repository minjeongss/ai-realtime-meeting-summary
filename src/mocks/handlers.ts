import { HttpResponse, http } from "msw";
import { TemporalSummaryResponse, EntireSummaryResponse } from "./dummy";

export const handlers = [
  http.get("/temporal", () => {
    return HttpResponse.json(TemporalSummaryResponse);
  }),
  http.get("/entire", () => {
    return HttpResponse.json(EntireSummaryResponse);
  }),
  //   http.get("/entire", async ({ request }) => {
  //     const body = await request.json();
  //     console.log(body);
  //     await delay(5000);
  //     return HttpResponse.json(dummy.entireSummary);
  //   }),
];
