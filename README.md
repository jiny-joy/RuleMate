# 나눔스페이스 규정메이트

Claude AI를 활용한 회사 규정 안내 서비스입니다. 취업규칙과 여비규정에 대한 질문에 AI가 답변해줍니다.

## 주요 기능

- 📖 **취업규칙 안내**: 연차, 휴가, 근무시간, 급여, 퇴직 등에 대한 질문 응답
- ✈️ **여비규정 안내**: 출장 일비, 숙박비, 식비, 교통비 등에 대한 질문 응답
- 🤖 **AI 기반 답변**: Claude API를 사용한 자연어 처리 기반 정확한 답변
- 📱 **반응형 디자인**: 모바일, 태블릿, 데스크톱 모두 지원
- 💬 **대화형 인터페이스**: 카카오톡 같은 친숙한 채팅 UI

## 설치 방법

### 1. 프로젝트 클론 또는 다운로드

```bash
cd company-chatbot
```

### 2. 의존성 설치

```bash
npm install
```

### 3. 환경 변수 설정

`.env` 파일을 생성하고 Anthropic API 키를 설정합니다:

```bash
# .env 파일
VITE_ANTHROPIC_API_KEY=your_api_key_here
```

**API 키 발급 방법:**
1. [Anthropic Console](https://console.anthropic.com/)에 접속
2. 계정 생성 또는 로그인
3. API Keys 메뉴에서 새 API 키 생성
4. 생성된 키를 `.env` 파일에 붙여넣기

### 4. 개발 서버 실행

**중요: 프론트엔드와 백엔드 서버를 모두 실행해야 합니다!**

**방법 1: 한 번에 실행 (권장)**
```bash
npm run dev:all
```

**방법 2: 별도 터미널에서 실행**
```bash
# 터미널 1: 백엔드 프록시 서버
npm run server

# 터미널 2: 프론트엔드 개발 서버
npm run dev
```

서버가 실행되면:
- 🖥️ **프론트엔드**: http://localhost:5173 (또는 5174, 5175, 5176 등)
- 🔧 **백엔드 프록시**: http://localhost:3001

브라우저에서 프론트엔드 URL로 접속하면 챗봇을 사용할 수 있습니다.

## 프로덕션 빌드

```bash
npm run build
```

빌드된 파일은 `dist` 폴더에 생성됩니다.

## 커스터마이징 가이드

챗봇을 자신의 회사에 맞게 수정할 수 있습니다.

### 📝 회사 규정 문서 수정

[src/CompanyPolicyChatbot.jsx](src/CompanyPolicyChatbot.jsx) 파일에서 다음 부분을 수정하세요:

#### 1. 규정 카테고리 및 문서 수정 (Lines 5-254)

```javascript
const POLICY_CATEGORIES = {
  employment: {
    name: '취업규칙',
    document: `...여기에 회사의 취업규칙 전문을 입력...`,
    commonQuestions: [
      '연차는 몇 일인가요?',
      // 자주 묻는 질문 추가
    ]
  },
  // 새로운 카테고리 추가 가능
  newCategory: {
    name: '복리후생',
    icon: Heart, // lucide-react 아이콘
    color: 'bg-purple-500',
    document: `...복리후생 규정...`,
    commonQuestions: ['질문1', '질문2']
  }
}
```

#### 2. 회사명 변경 (Line 257)

```javascript
const COMPANY_NAME = '나눔스페이스'; // 자신의 회사명으로 변경
```

#### 3. 연락처 정보 수정 (Lines 260-271)

```javascript
const CONTACT_INFO = {
  email: 'support@nanumspace.com',
  teams: 'https://teams.microsoft.com/l/channel/...',
  teamsChannel: '경영지원팀',
  phone: '02-1234-5678',
  phoneDisplay: '02-1234-5678',
  workingHours: '평일 09:00-18:00 / 점심시간 12:00-13:00'
};
```

**Teams 채널 링크 가져오기:**
1. Teams에서 해당 채널 접속
2. 채널명 옆 `...` 클릭 → "채널 링크 가져오기" 선택
3. 복사된 링크를 `teams` 필드에 붙여넣기

## 기술 스택

### 프론트엔드
- ⚛️ **React 18**: UI 프레임워크
- ⚡ **Vite**: 빌드 도구 및 개발 서버
- 🎨 **Tailwind CSS**: 유틸리티 기반 CSS 프레임워크
- 🎭 **Lucide React**: 아이콘 라이브러리

### 백엔드
- 🚀 **Express**: Node.js 웹 프레임워크 (프록시 서버)
- 🔐 **CORS**: Cross-Origin Resource Sharing 처리
- 🤖 **Claude API (Anthropic)**: AI 자연어 처리

## 프로젝트 구조

```
company-chatbot/
├── src/
│   ├── CompanyPolicyChatbot.jsx  # 메인 챗봇 컴포넌트
│   ├── App.jsx                   # 앱 진입점
│   ├── main.jsx                  # React 렌더링
│   └── index.css                 # Tailwind CSS 설정
├── server.js                     # Express 프록시 서버 (CORS 해결)
├── .env                          # 환경 변수 (API 키)
├── .env.example                  # 환경 변수 예시
├── tailwind.config.js            # Tailwind 설정
├── postcss.config.js             # PostCSS 설정
├── vite.config.js                # Vite 설정
└── package.json                  # 의존성 관리
```

## 주의사항

### 🔒 보안

- ⚠️ **API 키를 절대 공개 저장소에 커밋하지 마세요!**
- `.env` 파일은 `.gitignore`에 포함되어 있습니다.
- 이 프로젝트는 **백엔드 프록시 서버**(`server.js`)를 사용하여 API 키를 보호합니다.
- 프론트엔드에서 직접 Claude API를 호출하지 않고, 백엔드 프록시를 통해 호출합니다.
- CORS 문제를 해결하고 API 키를 클라이언트에 노출시키지 않습니다.

### 💰 비용

- Claude API는 사용량에 따라 과금됩니다.
- 현재 모델: `claude-sonnet-4-20250514`
- [Anthropic 요금표](https://www.anthropic.com/pricing)에서 비용을 확인하세요.

### 📱 브라우저 호환성

- 최신 Chrome, Firefox, Safari, Edge 브라우저 지원
- IE는 지원하지 않습니다.

## 문제 해결

### API 키 오류
```
⚠️ API 키가 설정되지 않았습니다.
```
→ `.env` 파일에 `VITE_ANTHROPIC_API_KEY`가 올바르게 설정되어 있는지 확인하세요.

### 프록시 서버 연결 오류
```
⚠️ 프록시 서버에 연결할 수 없습니다.
```
→ 백엔드 서버가 실행 중인지 확인하세요:
- `npm run dev:all` 사용 시: 두 서버가 모두 실행되는지 확인
- 별도 실행 시: `npm run server`로 백엔드 서버를 먼저 실행

### CORS 오류
```
Access to fetch has been blocked by CORS policy
```
→ 백엔드 프록시 서버를 통해 API를 호출하고 있는지 확인하세요.
→ 프론트엔드 코드가 `http://localhost:3001/api/claude`를 호출하는지 확인.

### Tailwind CSS 스타일이 적용되지 않음
→ 개발 서버를 재시작하세요 (`npm run dev:all`)

### 빌드 오류
→ `node_modules`를 삭제하고 다시 설치하세요:
```bash
rm -rf node_modules package-lock.json
npm install
```

## 라이선스

이 프로젝트는 MIT 라이선스를 따릅니다.

## 문의

프로젝트에 대한 문의사항은 경영지원팀으로 연락주세요.
