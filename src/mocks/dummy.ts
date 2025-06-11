import type {
  TemporalSummaryResponse,
  EntireSummaryResponse,
} from "@/types/ServerResponse";

export const TemporalSummaryMockResponse: TemporalSummaryResponse = {
  statusCode: 202,
  title: "6월 11일 회의 요약",
  createdAt: "2025-06-11",
  summaryResult: JSON.stringify({
    summary:
      "회의에서는 신제품 출시 일정이 논의되었고, 일부 마케팅 전략이 제안되었습니다.",
    keywords: null,
    decisions: [],
    todo: null,
    qa: null,
  }),
  parsed: {
    summary:
      "회의에서는 신제품 출시 일정이 논의되었고, 일부 마케팅 전략이 제안되었습니다.",
    keywords: null,
    decisions: null,
    todo: null,
    qa: null,
  },
};

export const EntireSummaryMockResponse: EntireSummaryResponse = {
  statusCode: 200,
  title: "6월 11일 회의 요약",
  createdAt: "2025-06-11",
  summaryResult: JSON.stringify({
    summary:
      "회의에서는 신제품 출시 일정이 확정되었고, 마케팅 전략과 관련된 의사결정이 이루어졌습니다.",
    keywords: ["출시 일정", "마케팅 전략", "신제품"],
    decisions: [
      "신제품 출시일은 7월 15일로 확정한다.",
      "SNS 중심의 마케팅 캠페인을 진행한다.",
    ],
    todo: [
      "홍보 이미지 디자인 시안을 6월 15일까지 제출",
      "제품 페이지 콘텐츠 초안을 6월 20일까지 작성",
    ],
    qa: [
      {
        question: "출시일은 언제인가요?",
        answer: "7월 15일로 결정되었습니다.",
      },
      {
        question: "마케팅 방식은 어떻게 되나요?",
        answer: "SNS 중심의 온라인 마케팅을 진행합니다.",
      },
    ],
  }),
  parsed: {
    summary:
      "회의에서는 신제품 출시 일정이 확정되었고, 마케팅 전략과 관련된 의사결정이 이루어졌습니다.",
    keywords: ["출시 일정", "마케팅 전략", "신제품"],
    decisions: [
      "신제품 출시일은 7월 15일로 확정한다.",
      "SNS 중심의 마케팅 캠페인을 진행한다.",
    ],
    todo: [
      "홍보 이미지 디자인 시안을 6월 15일까지 제출",
      "제품 페이지 콘텐츠 초안을 6월 20일까지 작성",
    ],
    qa: [
      {
        question: "출시일은 언제인가요?",
        answer: "7월 15일로 결정되었습니다.",
      },
      {
        question: "마케팅 방식은 어떻게 되나요?",
        answer: "SNS 중심의 온라인 마케팅을 진행합니다.",
      },
    ],
  },
  pdfLink:
    "https://inha-pj-05-meeting-minutes-pdf.s3.us-east-1.amazonaws.com/pdf/meeting-minutes-1748526903113.pdf",
};
