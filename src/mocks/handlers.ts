import { HttpResponse, delay, http } from "msw";
import {
  TemporalSummaryMockResponse,
  EntireSummaryMockResponse,
} from "./dummy";

export const handlers = [
  http.get("/temporal", () => {
    return HttpResponse.json(TemporalSummaryMockResponse);
  }),
  http.post("/entire", async () => {
    await delay(1000);
    return HttpResponse.json(EntireSummaryMockResponse);
  }),
];
