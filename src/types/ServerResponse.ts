export interface TemporalSummaryResponse {
  statusCode: number;
  title: string;
  createdAt: string; // (YYYY-MM-DD)
  summaryResult: string;
  parsed: TemporalSummaryResult;
}

export interface EntireSummaryResponse {
  statusCode: number;
  title: string;
  createdAt: string; // (YYYY-MM-DD)
  summaryResult: string;
  parsed: EntireSummaryResult;
  pdfLink: string;
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
