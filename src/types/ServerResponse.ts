export interface SummaryResponse {
  statusCode: number;
  title: string;
  createdAt: string; // (YYYY-MM-DD)
  summaryResult: string;
  parsed: EntireSummaryResult | TemporalSummaryResult;
}

interface EntireSummaryResult {
  summary: string;
  keywords: string[];
  decisions: string[];
  todo: string[];
  qa: QA[];
}

interface QA {
  question: string;
  answer: string;
}

interface TemporalSummaryResult {
  summary: string;
  keywords: null;
  decisions: null;
  todo: null;
  qa: null;
}
