<div align="center">
  <img style="width:350px" src="https://github.com/user-attachments/assets/be19c0c9-f1ba-493d-b5be-3f6d0877412c" />
  <p>실시간 기록 부담을 줄여주는 AI 음성 회의 기록 및 자료 정리 서비스, SummarizeAI</p>
</div>

## 🔎 SummarizeAI가 필요한 이유
SummarizeAI는 실시간 회의 중 자동으로 내용을 기록하고, 참가자에게 요약을 제공하는 AI 기반 음성 회의 기록 및 정리 서비스입니다. 회의 중 수동으로 회의록을 작성하는 번거로움과 메모로 인한 논의 흐름의 단절을 줄여, 효율적인 협업과 고품질 회의 진행을 가능하게 합니다.

기존 서비스(a.k.a.클로바노트)에서 발전해 실시간으로 중간 참가자를 위한 요약 제공하며, 회의 종료시 요약본 PDF 제공합니다.


## 🤖 주요 기능 흐름
![process](https://github.com/user-attachments/assets/fdc354d1-603a-45af-a468-c2ef4bcab511)

### 🎙️회의 녹음
클라이언트와 서버 간의 `소켓 연결(Websocket)`을 통해 실시간으로 진행되며, 클라이언트는 음성을 일정 단위로 분할하여 서버로 전송하고, 서버는 각 클라이언트로부터 수신한 음성 데이터를 하나로 병합해 전체 회의 음성을 구성합니다.

### 📃 회의 요약
회의가 종료된 후 병합된 음성 파일을 AWS Transcribe로 전달하여 텍스트로 변환하고, 이를 기반으로 회의 전체 요약, 주요 키워드, 결정사항, 할 일 목록, 질문과 답변 등을 포함한 정리된 요약본을 제공합니다.

#### 중간 참가자를 위한 요약: 회의 시작 시점부터 중간 참가자 입장 시점까지의 요약본 제공
![meeting_point](https://github.com/user-attachments/assets/a522bfbe-a4b4-4956-b6c0-99d041d837ee)

#### 전체 참가자를 위한 PDF 제공: 회의 요약 결과를 PDF 문서로 자동 변환하여 보관 및 공유 가능
![summary_point](https://github.com/user-attachments/assets/9b827092-29ba-4573-90b6-8c269945a695)

## ⚙️ 인프라

## ✨ 시연 영상
https://github.com/user-attachments/assets/c79ebd3e-63b1-444f-a8fb-576449eb4d59

