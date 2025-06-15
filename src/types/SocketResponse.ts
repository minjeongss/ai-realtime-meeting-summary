export interface TemporalSummaryResponse {
  title: string;
  createdAt: string; // (YYYY-MM-DD)
  summaryText: TemporalSummaryResult;
}

interface TemporalSummaryResult {
  summary: string;
  keywords: null;
  decisions: null;
  todo: null;
  qa: null;
}
