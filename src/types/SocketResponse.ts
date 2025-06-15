export interface TemporalSummaryResponse {
  title: string;
  createdAt: string; // (YYYY-MM-DD)
  summaryText: SummaryText;
}

export interface EntireSummaryResponse {
  title: string;
  createdAt: string; // (YYYY-MM-DD)
  summaryText: SummaryText;
  pdfLinks: string;
}

interface SummaryText {
  summary: string;
  keywords: string[] | null;
  decisions: string[] | null;
  todo: string[] | null;
  qa: QA | null;
}

interface QA {
  question: string;
  answer: string;
}
