export interface TemporalSummaryResponse {
  type: string;
  meetingId: string;
  title: string;
  createdAt: string; // (YYYY-MM-DD)
  summaryText: SummaryText;
}

export interface EntireSummaryResponse {
  type: string;
  meetingId: string;
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
