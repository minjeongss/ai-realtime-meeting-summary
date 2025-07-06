<div align="center">
  <img style="width:350px" src="https://github.com/user-attachments/assets/be19c0c9-f1ba-493d-b5be-3f6d0877412c" />
  <p>실시간 기록 부담을 줄여주는 AI 음성 회의 기록 및 자료 정리 서비스, SummarizeAI</p>
</div>

## 개요
### 기획 의도
- 실시간 회의록 작성 번거로움 > 불필요한 인력 소모
- 회의 진행할 때 메모 병행 시 논의 흐름 끊김 > 회의 품질 저하

### 기존 서비스와 차별점
- 실시간으로 중간 참가자를 위한 요약 제공
- 회의 종료시 요약본 PDF 제공

## 주요 기능 흐름
![process](https://github.com/user-attachments/assets/fdc354d1-603a-45af-a468-c2ef4bcab511)

### 회의 녹음
- 소켓 연결
- 클라이언트 > 서버: 음성 분할하여 전송
- 서버: 각 클라이언트로 들어온 음성 병합

### 회의 요약
- 동작 흐름: 회의 내용 음성 파일 전달 > AWS Transcribe > 회의 내용 텍스트 변환 > 요약 제공
- 요약 내용: 회의 요약, 주요 키워드, 결정사항, 할 일 목록, 질문과 답변

#### 중간 참가자를 위한 요약
- 회의 시작 시점부터 중간 참가자 입장 시점까지의 요약본 제공
![meeting_point](https://github.com/user-attachments/assets/a522bfbe-a4b4-4956-b6c0-99d041d837ee)

#### 전체 참가자를 위한 PDF 제공
- 회의 요약 결과를 PDF 문서로 자동 변환하여 보관 및 공유 가능
![summary_point](https://github.com/user-attachments/assets/9b827092-29ba-4573-90b6-8c269945a695)


## 시연 영상
https://github.com/user-attachments/assets/c79ebd3e-63b1-444f-a8fb-576449eb4d59

