import React, { useState } from 'react';
import { Send, FileText, Book, Plane, MessageCircle, Mail, Phone, X, MessageSquare, Bot } from 'lucide-react';

// 🔧 커스터마이징 포인트 1: 여기에 카테고리와 문서 내용을 추가/수정하세요
const POLICY_CATEGORIES = {
  employment: {
    name: '취업규칙',
    icon: Book,
    color: 'bg-blue-500',
    document: `
주식회사 나눔스페이스 취업규칙
제정 및 시행 2023.1.1. / 개정 2025.8.1.

제1장 총칙

제1조【목적】
이 규칙은 주식회사 나눔스페이스(이하 "회사"라 한다) 사원의 채용ㆍ복무 및 근로조건에 관한 사항을 정함을 목적으로 한다.

제2조【적용범위】
1. 사원의 복무 및 근로조건에 관하여 법령, 근로계약, 단체협약, 그밖에 회사규정에 별도로 정함이 있는 경우를 제외하고는 이 규칙이 정하는 바에 의한다.
2. 제7조의 수습기간, 제16조 중 승진에 관한 사항 및 제4장 제3절 휴직 및 복직에 관한 규정은 기간제 사원 및 단시간 근로사원에게는 적용하지 않는다.

제3조【사원의 정의】
이 규칙에서 "사원"이라 함은 기간의 정함이 없는 정규직사원과 기간의 정함이 있는 기간제사원, 단시간 근로사원을 의미한다.

제2장 채용 및 근로계약

제4조【채용기회】
1. 회사는 사원의 모집 및 채용에 있어서 합리적인 이유 없이 성별, 연령, 신앙, 사회적신분, 출신지역, 출신학교, 혼인, 임신 또는 병력(病歷) 등에 의한 차등을 두지 않는다.
2. 사원의 채용은 최종적으로 대표의 승인을 얻어 채용한다.

제5조【전형 및 채용서류】
회사에 입사를 지원하는 자는 다음 각 호의 서류를 제출하여야 한다.
1. 이력서 1통(6개월 이내의 증명사진 2매 첨부)
2. 주민등록등본 1통
3. 건강검진표 1부(입사후 1개월 이내, 입사 전 6개월 이내 검사결과 유효)
4. 업무 또는 직무관련 자격증 1부
5. 학력을 증명할 수 있는 추가 서류 1부
6. 4대보험 취득, 상실 등을 위한 가족관계서류 1부(피부양자 건강보험 등록에 관련)
7. 경력증명이 필요한 경우 경력증명서 1부

제6조【근로계약】
1. 회사는 채용이 확정된 자와 서면 근로계약 또는 전자근로계약을 체결하고, 해당자에게 근로계약서 사본 1부를 내어 준다.
2. 회사는 근로계약 체결 시 사원에게 임금, 소정근로시간, 휴일, 연차 유급휴가, 취업의 장소와 종사하여야 할 업무에 관한 사항, 근로기준법 제93조 제1호부터 제12호까지의 규정(취업규칙의 작성·신고사항)에서 정한 사항, 근로기준법 제10장의 기숙사에 관한 사항(기숙사가 있는 경우에 한함)을 명확히 제시한다.

제7조【시용 또는 수습기간】
1. 신규로 채용된 자는 최초로 근무를 개시한 날부터 1개월 이내의 기간을 정하여 시용 또는 수습기간을 둔다. 단, 직무에 따라 최대 6개월까지 연장 가능하다.
2. 시용 또는 수습기간 종료됨과 동시에 근로계약은 종료되는 것으로 보며, 계약의 갱신이 이루어지는 경우에 한해 계속 근로한다.
3. 제1항의 시용 또는 수습기간 종료 후 계약의 갱신되어 계속 근로하는 경우 근속년수에 포함한다.

제3장 복무

제8조【복무의무】
1. 사원은 맡은바 직무를 충실히 수행하여야 한다.
2. 사원은 직무상 취득한 비밀을 엄수하고 회사 기밀을 누설해서는 아니 된다.
3. 사원은 회사의 제반 규정을 준수하고 상사의 정당한 직무상 지시에 따라야한다.

제4장 인사

제16조【배치, 전직, 승진】
1. 회사는 사원의 능력, 적성, 경력 등을 고려하여 부서의 배치, 전직, 승진 등 인사발령을 하며, 사원은 정당한 사유 없이 이를 거부할 수 없다.

제17조【휴직】
1. 회사는 다음 각 호의 어느 하나에 해당하는 사유로 사원이 휴직원을 제출하는 경우에는 1개월 이내의 기간을 정하여 휴직을 승인 할 수 있다.
1) 업무 외 질병, 부상, 가정사정 등으로 직무수행이 어렵다고 인정되는 경우
2) 병역법, 기타 법령에 의해 징집 및 소집되었을 때
3) 연수, 직무 등의 사유로 회사가 휴직이 필요하다고 하는 경우

제18조【육아휴직】
1. 만 8세 이하 또는 초등학교 2학년 이하의 자녀를 둔 모든 남녀사원은 육아휴직을 사용할 수 있다.
2. 육아 휴직기간은 최대 1년이며, 이를 분할하여 사용할 수 있다.
3. 신청 시기: 육아휴직 시작일로부터 최소 30일 전
4. 신청 방법: 그룹웨어 전자결재로 휴직원 기안 후 제출
5. 제출 서류:
   1) 휴직원(그룹웨어 전자결재)
   2) 가족관계증명서(자녀 주민등록번호 확인 가능한 서류)
6. 복직 시: 복직일 즉시 복직원 제출

제5장 근로조건

제21조【근무형태】
근무형태는 주간근무를 원칙으로 하며, 필요한 경우 사원의 대표와 합의하여 교대근무제를 시행할 수 있다. 또한 탄력적 또는 선택적 근로시간제를 실시할 수 있다.

제22조【근로시간】
1. 1주간의 근무일은 월요일부터 금요일까지 5일로 하고, 이 경우 소정근로일에 만근하는 경우 일요일은 유급주휴일로 한다.
2. 1주간의 근로시간은 휴게시간을 제외하고 40시간으로 한다.
3. 1일의 근로시간은 8시간으로 하되, 제23조의 휴게시간을 포함하여 08:30부터 17:30까지로 한다.

제23조【휴게】
휴게 시간은 제22조 제3항의 근로시간 중 12:00부터 13:00까지로 한다.

제30조【유급휴일】
1. 1주 동안 소정근로일을 개근한 사원에 대하여는 일요일을 유급 주휴일로 부여한다. 토요일은 무급휴무일로 정한다.
2. 사원의 날(5월 1일)은 유급휴일로 한다.
3. 국가공휴일(임시공휴일 포함)은 유급휴일로 한다.
4. 회사설립일(1월 1일)을 (1월 2일)로 대체하여 유급휴일로 한다.

제31조【연차휴가】
1. 회사는 1년간 80퍼센트 이상 출근한 사원에게 15일의 유급휴가를 주어야 한다. 최초 입사하여 1년까지는 매월 개근 시 총 11일의 연차 유급휴가를 부여한다.
2. 회사는 계속하여 근로한 기간이 1년 미만인 사원 또는 1년간 80퍼센트 미만 출근한 사원에게 1개월 개근 시 1일의 유급휴가를 주어야 한다.
3. 회사는 3년 이상 계속하여 근로한 사원에게는 제1항에 따른 휴가에 최초 1년을 초과하는 계속 근로 연수 매 2년에 대하여 1일을 가산한 유급휴가를 주어야 한다. 이 경우 가산휴가를 포함한 총 휴가 일수는 25일을 한도로 한다.

제35조【경조사휴가】
1. 본인의 결혼: 5일
2. 본인·배우자의 부모 또는 배우자의 사망: 5일
3. 본인·배우자의 조부모 또는 외조부모의 사망: 3일
4. 자녀 또는 그 자녀의 배우자의 사망: 3일
5. 자녀의 결혼: 1일

제35조의2【배우자 출산휴가】
1. 회사는 사원 배우자의 출산을 이유로 고(高)하는 경우 20일의 배우자 출산휴가를 부여한다.
2. 다만, 출산전후휴가기간 등이 지원된 경우 그 금액의 한도에서 지급 책임을 면한다.
3. 제1항의 휴가는 배우자가 출산한 날부터 90일 이내에 신청 및 사용하여야 한다.
4. 배우자 출산휴가는 3회에 한정하여 나누어 사용할 수 있다.
5. 회사는 배우자 출산휴가를 이유로 사원을 해고하거나 그 밖의 불리한 처우를 하여서는 아니 된다.

제36조【생리휴가】
회사는 여성 사원이 청구하는 경우 월 1일의 무급 생리휴가를 부여한다.

제37조【임산부의 보호】
1. 임신 중의 여성 사원에게 산전과 산후를 통하여 90일(한 번에 둘 이상 자녀를 임신한 경우에는 120일)의 보호휴가를 준다.

2. 출산전후휴가 신청 절차:
   1) 신청 시기(출산 전): 출산휴가 시작일로부터 최소 30일 전
   2) 신청 시기(출산 후): 출산휴가 종료 후 15일 이내
   3) 신청 방법: 그룹웨어 전자결재로 신청서 기안 후 제출
   4) 제출 서류(출산 전):
      - 출산전후 및 유·사산 휴가 신청서(그룹웨어 전자결재)
      - 출산예정증명서 1부
   5) 제출 서류(출산 후):
      - 급여지급 확인서
      - 신분증 사본
      - 급여명세서
      - 가족관계 확인 서류
      - 출산전후휴가 사실확인서

3. 유산·사산휴가 신청 절차:
   1) 신청 시기: 유산·사산휴가 종료 후 즉시
   2) 신청 방법: 그룹웨어 전자결재로 신청서 기안 후 제출
   3) 제출 서류:
      - 유산·사산휴가 신청서(그룹웨어 전자결재)
      - 의료기관 진단서(임신기간 기재)

제38조【병가】
1. 회사는 사원이 업무 외 질병, 부상 등으로 병가를 신청하는 경우에는 연간 60일(최초 1회 30일+연장 1회 30일)을 초과하지 않는 범위 내에서 병가를 허가할 수 있다.
2. 병가기간은 무급으로 한다.

제6장 임금

제39조【임금의 구성항목】
1. 사원에 대한 임금은 기본급 및 직책수당(이하 "통상임금"이라 한다.)과 연장·야간·휴일 근로수당 등 법정수당으로 구성한다.

제40조【임금의 계산 및 지급방법】
1. 임금은 월급제를 원칙으로 하되, 결근일에 대하여는 해당 일분을 감하여 지급한다.
2. 임금은 매월 초일부터 말일까지를 산정기간으로 하여 당월 말일 사원이 지정한 사원 명의의 예금 계좌에 입금하여 지급한다.

제7장 퇴직·해고 등

제44조【당연 퇴직 및 퇴직일】
1. 회사는 사원이 다음 각 호에 해당할 때에는 사원을 퇴직 시킬 수 있다.
1) 본인이 퇴직을 원하는 경우
2) 사망하였을 경우
3) 법적 연령 정년에 도달하였을 경우
4) 근로계약기간이 만료된 경우
5) 해고가 결정된 경우

제49조【정년】
정년은 법적으로 만 60세에 도달한 달의 말일자로 한다.

제8장 퇴직급여

제50조【퇴직급여의 수준 등】
1. 회사는 1년 이상 근무한 사원이 퇴직할 경우에는 근속연수 1년에 대하여 평균임금 30일 분을 퇴직금으로 지급한다.

제9장 표창 및 징계

제53조【징계】
1. 회사는 다음 각 호에 해당하는 사원에 대하여 징계위원회의 의결을 거쳐 징계할 수 있다.
1) 부정 및 허위 등의 방법으로 채용된 자
2) 업무상 비밀 및 기밀을 누설하여 회사에 피해를 입힌 자
3) 회사 또는 대표자의 명예 또는 신용에 손상을 입힌 자
4) 회사의 규율과 상사의 정당한 지시를 어겨 질서를 문란하게 한 자

제10장 교육

제58조【직무교육】
1. 회사는 사원의 직무능력향상을 위하여 필요한 경우 직무교육을 시킬 수 있으며 사원은 교육과정에 성실히 임하여야 한다.

제11장 성희롱 예방

제59조【성희롱 예방】
1. 회사는 직장 내 성희롱을 예방하고 사원이 안전한 근로환경에서 일할 수 있는 여건 조성을 위해 1년에 1회 이상 성희롱 관련 법령을 요지, 성희롱 예방을 위한 사업주의 방침, 성희롱 피해자의 권리구제 방법과 가해자의 조치 등을 내용으로 성희롱 예방 교육을 실시한다.

제12장 직장 내 괴롭힘의 금지

제60조【직장내 괴롭힘의 금지】
1. 회사의 모든 임원 및 사원은 직장에서의 지위 또는 관계 등의 우위를 이용하여 업무상 적정범위를 넘어 다른 임원이나 사원에게 신체적·정신적 고통을 주거나 근무환경을 악화시키는 행위("직장 내 괴롭힘")를 하여서는 아니된다.

부칙
제3조【시행일】
본 규칙은 2023년 1월 1일부터 제정·시행한다.
본 규칙은 2025년 8월 1일부터 제정·시행한다.
    `,
    commonQuestions: [
      '연차는 몇 일인가요?',
      '2024년 2월 입사자 현재 연차는?',
      '배우자 출산휴가는 며칠인가요?',
      '근무시간과 휴게시간은?',
      '생리휴가는 유급인가요?',
      '최저임금은 얼마인가요?',
      '해고 시 예고 기간은?',
      '정년은 몇 세인가요?'
    ]
  },
  travel: {
    name: '여비규정',
    icon: Plane,
    color: 'bg-green-500',
    document: `
주식회사 나눔스페이스 여비기준표

▶ 국내여비기준표 (일비, 숙박비, 식비는 모두 1일 기준)

【적용대상】
- 팀장 및 팀원 (전 직원 동일 기준)

【운임 기준】
1. 철도: KTX 일반석
2. 버스: 우등고속 / 우등버스
3. 자가용: 운임 정액 (톨게이트 및 주유비)
4. 항공: 필요 시 승인 후 이용

【일비 (교통비 포함)】
- 금액: 30,000원 (1일 기준)
- 사용: 개인카드 사용 필수
- 중요: 법인카드 사용 시 일비 지급 제외
- 증빙: 별도 영수증 제출 불필요

【숙박비】
- 금액: 실비 (상한액 150,000원)
- 사용: 법인카드 사용 필수
- 증빙: 영수증

【식비】
- 금액: 60,000원 (1일 기준)
- 1회 최대: 20,000원
- 사용시간대:
  * 조식: 06:00-10:00 (1회 가능)
  * 중식: 11:00-14:00 (1회 가능)
  * 석식: 17:00-21:00 (1회 가능)
- 사용처: 음식점, 카페, 편의점 사용 가능
- 결제 방법:
  * 법인카드 사용 원칙
  * 개인카드 사용 시 영수증 제출 필요 (1회 최대 2만원)

【카드 사용 원칙】
1. 운임, 숙박, 식비: 법인카드 사용 필수 (개인카드 사용 불가)
   - 단, 법인카드 사용이 어려울 경우 현금영수증 대체 가능
   - 사업자등록번호: 469-86-02273
2. 교통비(일비): 개인카드 사용 필수 (법인카드 사용 불가)

【증빙 서류】
1. 철도/버스/항공: 왕복티켓 (+단가표)
2. 자가용: 톨게이트(주유) 영수증
3. 숙박: 영수증
4. 식비: 영수증 (1회 최대 2만원)

【특별 규정】
1. 전날 출발 가능 조건:
   - 당일 첫차로 출장 시작시간까지 입실이 어려울 경우
   - 지원 항목: 운임료, 숙박비만 지원 (일비 제외)

2. 버스 프리미엄 이용:
   - 부득이한 사정이 있을 경우에만 가능 (버스 시간 등)

3. 영수증 제출:
   - 별도 영수증 제출 불필요 (법인카드 사용 시)
    `,
    commonQuestions: [
      '출장 일비는 얼마인가요?',
      '숙박비 상한액은?',
      '식비는 언제 사용할 수 있나요?',
      '법인카드와 개인카드 구분은?',
      '전날 출발 가능한가요?',
      'KTX는 어떤 등급을 타나요?'
    ]
  }
};

// 🔧 커스터마이징 포인트 2: 회사명 변경
const COMPANY_NAME = '나눔스페이스';

// 🔧 커스터마이징 포인트 3: 경영지원팀 연락처 변경
const CONTACT_INFO = {
  email: 'jiny@nanumspace.com',
  // Teams 채팅 링크 - 사용자와 직접 채팅
  teams: 'https://teams.microsoft.com/l/chat/0/0?users=jiny@jbcp.kr',
  teamsChannel: '경영지원팀',
  teamsEmail: 'jiny@jbcp.kr',
  phone: '063-278-9636',
  phoneDisplay: '063-278-9636',
  workingHours: '평일 09:00-18:00 / 점심시간 12:00-13:00'
};

export default function CompanyPolicyChatbot() {
  const [selectedCategory, setSelectedCategory] = useState('employment');
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);

  // 카테고리 변경 시 대화 초기화
  const handleCategoryChange = (categoryKey) => {
    setSelectedCategory(categoryKey);
    setMessages([]);
    setInputMessage('');
  };

  // Claude API 호출 (프록시 서버를 통해)
  const sendMessageToClaude = async (userMessage) => {
    const currentPolicy = POLICY_CATEGORIES[selectedCategory];
    const today = new Date();
    const todayStr = today.toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      weekday: 'long'
    });

    try {
      // API 엔드포인트: 로컬 개발 시 localhost:3001, 프로덕션 시 /api/claude (Vercel serverless)
      const isLocalhost = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
      const apiEndpoint = isLocalhost
        ? 'http://localhost:3001/api/claude'
        : '/api/claude';

      const response = await fetch(apiEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'claude-sonnet-4-20250514',
          max_tokens: 2000,
          messages: [
            {
              role: 'user',
              content: `당신은 ${COMPANY_NAME}의 ${currentPolicy.name} 전문 상담 AI입니다.

**오늘 날짜: ${todayStr}**

다음은 ${currentPolicy.name} 문서입니다:
${currentPolicy.document}

**중요한 답변 원칙:**
1. **규정에 명시된 내용만 정확히 전달하세요**
   - 규정 문서에 있는 내용을 그대로 안내
   - 해석이나 의견을 추가하지 말 것
   - 해결방안이나 권장사항을 제시하지 말 것

2. **연차 계산 요청 시 (회계연도 기준 - 1월 1일 기준):**
   ⚠️ ${COMPANY_NAME}는 회계연도 기준(1월 1일)으로 연차를 계산합니다!
   ⚠️ **반드시 입사일을 바탕으로 직접 계산해서 "X일입니다"라고 명확한 숫자로 답변하세요!**

   **계산 규칙:**
   【입사 첫 해 (1년 미만)】
   - 매월 개근 시 1일씩 발생 (최대 11일)
   - 예시: 2024년 3월 1일 입사 → 2024년 12월 31일 기준 = 10일

   【입사 후 1년 이상 3년 미만】
   - 다음 해 1월 1일 기준으로 계산
   - 공식: (전년도 재직일수 ÷ 전년도 총일수) × 15일
   - 전년도 80% 이상 출근 시 15일
   - 예시 1: 2023년 3월 1일 입사 → 2024년 1월 1일 기준 = 전년도(2023년) 306일 재직 ÷ 365일 × 15일 = 12.5일 → 반올림하여 13일
   - 예시 2: 2022년 6월 1일 입사 → 2024년 1월 1일 기준 = 전년도(2023년) 365일 재직 ÷ 365일 × 15일 = 15일

   【3년 이상 근무자】
   - 기본 15일 + 2년마다 1일 가산 (최대 25일)
   - 예시 1: 2021년 1월 1일 입사 → 2024년 1월 1일 기준 = 근속 3년 → 15일 + 1일 = 16일
   - 예시 2: 2019년 1월 1일 입사 → 2024년 1월 1일 기준 = 근속 5년 → 15일 + 2일 = 17일
   - 예시 3: 2015년 1월 1일 입사 → 2024년 1월 1일 기준 = 근속 9년 → 15일 + 4일 = 19일

   **답변 형식 (반드시 따를 것):**
   - "입사일 기준으로 계산하면 **X일**입니다." (숫자를 명확히 제시)
   - 계산 과정을 간단히 설명
   - 관련 조항(제31조【연차휴가】) 명시

3. **경조사 휴가 계산 원칙:**
   ⚠️ **경조사 휴가(특히 사망의 경우)는 휴일(토요일, 일요일, 공휴일)을 포함하여 연속된 일수로 계산합니다!**

   **중요한 이유:**
   - 장례식은 정해진 날짜에 진행되므로, 주말이나 공휴일과 관계없이 연속된 기간이 필요
   - 제35조에 명시된 일수는 "휴일 포함 연속 일수"를 의미

   **적용 예시:**
   - 본인·배우자의 부모 사망 (5일): 금요일 사망 → 금/토/일/월/화 (주말 포함 5일)
   - 조부모/외조부모 사망 (3일): 토요일 사망 → 토/일/월 (주말 포함 3일)
   - 자녀 또는 배우자 사망 (3일): 목요일 사망 → 목/금/토 (주말 포함 3일)

   **답변 형식:**
   - "제35조에 따라 X일의 경조사 휴가가 부여됩니다."
   - "경조사 휴가는 휴일(토요일, 일요일, 공휴일)을 포함하여 연속된 X일로 계산됩니다."
   - 장례식이 정해진 날짜에 있기 때문에 실제 근무일 기준이 아닌 연속 일수로 적용됨을 명시

4. **회사 규정 절대 우선 원칙:**
   ⚠️ **회사 취업규칙에 명시된 내용이 있으면, 그것이 최종 기준입니다!**
   - 근로기준법과 다르더라도 회사 규정을 우선 적용
   - 회사 규정이 법보다 불리하더라도, 규정대로 안내
   - ❌ "근로기준법에 따르면..." 식의 추가 설명 금지 (회사 규정이 있는 경우)
   - ❌ 회사 규정이 잘못되었다는 뉘앙스 금지
   - ✅ 회사 규정만 명확히 전달

5. **규정에 원칙만 명시되고 세부 절차가 없는 경우:**
   - 규정에 명시된 원칙을 먼저 안내
   - 구체적인 신청 절차나 세부사항은 경영지원팀(jiny@nanumspace.com, 063-278-9636)에 문의하도록 안내
   - 예시: "근무형태는 주간근무가 원칙이며, 필요한 경우 사원 대표와 합의하여 시행할 수 있습니다. 구체적인 신청 절차는 경영지원팀으로 별도 문의가 필요합니다."
   - ❌ "명시되어 있지 않습니다" 라는 표현 사용 금지
   - ✅ 규정에 있는 내용을 먼저 전달 후, 세부사항은 경영지원팀 문의 안내

6. **규정에 완전히 없는 내용을 질문받은 경우만:**
   - 이 경우에만 근로기준법의 법정 기준을 참고로 안내
   - 주요 법정 기준:
     * 연차휴가: 1년 80% 이상 출근 시 15일, 3년 이상은 2년마다 1일 가산 (최대 25일)
     * 근로시간: 주 40시간, 1일 8시간 (연장근로 주 12시간 한도)
     * 해고예고: 30일 전 예고 또는 30일분 통상임금 지급
     * 퇴직금: 1년 이상 근무 시 30일분 평균임금 × 근속연수
     * 산전후휴가: 90일 (다태아 120일), 산후 45일 이상
     * 육아휴직: 만 8세 이하 또는 초등 2학년 이하 자녀, 최대 1년
     * 생리휴가: 월 1일 (무급 가능)
     * 주휴일: 주 1회 유급 (주 15시간 이상 근무자)

7. **답변 형식:**
   - 관련 조항 번호를 반드시 포함
   - 규정 원문을 인용
   - 간결하고 명확하게 답변
   - 추가 조언이나 제안 없이 사실만 전달

8. **금지 사항:**
   - ❌ "~하시는 것이 좋습니다" (권장사항 제시 금지)
   - ❌ "~하시면 됩니다" (해결방안 제시 금지)
   - ❌ "명시되어 있지 않습니다" (규정에 일부라도 있으면 사용 금지)
   - ❌ "근로기준법에 따르면..." (회사 규정이 있는 경우 금지)
   - ❌ 회사 규정이 법과 다르다는 뉘앙스 금지
   - ❌ 해석이나 개인 의견 추가 금지
   - ✅ 회사 규정을 절대 우선으로 전달
   - ✅ 세부 절차는 경영지원팀 문의 안내
   - ✅ 완전히 없는 내용만 근로기준법 안내

질문: ${userMessage}`
            }
          ]
        })
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error('Claude API 오류:', errorData);
        if (errorData.error === 'API 키가 설정되지 않았습니다. .env 파일을 확인하세요.') {
          return '⚠️ API 키가 설정되지 않았습니다. .env 파일에 VITE_ANTHROPIC_API_KEY를 설정해주세요.';
        }
        return `API 오류가 발생했습니다: ${errorData.error?.message || errorData.error || '알 수 없는 오류'}`;
      }

      const data = await response.json();
      return data.content[0].text;
    } catch (error) {
      console.error('Claude API 오류:', error);
      if (error.message === 'Failed to fetch') {
        return '⚠️ 프록시 서버에 연결할 수 없습니다. 백엔드 서버가 실행 중인지 확인하세요. (npm run server)';
      }
      return '죄송합니다. 일시적인 오류가 발생했습니다. 다시 시도해주세요.';
    }
  };

  // 메시지 전송
  const handleSendMessage = async (messageText) => {
    const textToSend = messageText || inputMessage.trim();
    if (!textToSend) return;

    // 사용자 메시지 추가
    const userMessage = { role: 'user', content: textToSend };
    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);

    // Claude 응답 받기
    const assistantResponse = await sendMessageToClaude(textToSend);
    const assistantMessage = { role: 'assistant', content: assistantResponse };
    setMessages(prev => [...prev, assistantMessage]);
    setIsLoading(false);
  };

  const currentPolicy = POLICY_CATEGORIES[selectedCategory];
  const CategoryIcon = currentPolicy.icon;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4">
      <div className="max-w-6xl mx-auto">
        {/* 헤더 */}
        <div className="bg-white rounded-t-2xl shadow-lg p-4 sm:p-6 border-b">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
            <div className="flex items-center gap-3">
              <FileText className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600 flex-shrink-0" />
              <div className="min-w-0 flex-1">
                <h1 className="text-lg sm:text-2xl font-bold text-gray-800">
                  {COMPANY_NAME} 규정메이트
                </h1>
                <p className="text-xs sm:text-sm text-slate-600 break-keep">
                  AI가 회사 규정과 근로기준법을 기반으로 정확하고 간결하게 답변합니다.
                </p>
              </div>
            </div>
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-amber-100 text-amber-700 shadow self-start sm:self-auto whitespace-nowrap">
              AI Assistant
            </span>
          </div>

          {/* 카테고리 선택 버튼 */}
          <div className="flex gap-2 flex-wrap">
            {Object.entries(POLICY_CATEGORIES).map(([key, policy]) => {
              const Icon = policy.icon;
              return (
                <button
                  key={key}
                  onClick={() => handleCategoryChange(key)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                    selectedCategory === key
                      ? `${policy.color} text-white shadow-md hover:shadow-lg`
                      : 'bg-slate-50 text-slate-700 hover:bg-blue-50 hover:text-blue-700 border border-slate-200'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {policy.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* 채팅 영역 */}
        <div className="bg-white shadow-lg" style={{ height: '700px', overflow: 'hidden' }}>
          <div className="h-full flex flex-col">
            {/* 메시지 표시 영역 */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {messages.length === 0 && (
                <div className="text-center py-12">
                  <CategoryIcon className={`w-16 h-16 mx-auto mb-4 ${currentPolicy.color.replace('bg-', 'text-')}`} />
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {currentPolicy.name}에 대해 물어보세요
                  </h3>
                  <p className="text-gray-600 mb-6">아래 예시를 클릭하거나 질문을 입력하면 🤖 AI가 즉시 답합니다</p>

                  {/* 자주 묻는 질문 */}
                  <div className="grid grid-cols-2 gap-2 max-w-2xl mx-auto">
                    {currentPolicy.commonQuestions.map((question, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleSendMessage(question)}
                        className="text-left p-3 bg-slate-50 hover:bg-blue-50 rounded-lg text-sm text-slate-700 transition-all border border-slate-200 hover:border-blue-200 hover:shadow-sm"
                      >
                        💬 {question}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {messages.map((message, idx) => (
                <div
                  key={idx}
                  className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                      message.role === 'user'
                        ? `${currentPolicy.color} text-white`
                        : 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    <p className="whitespace-pre-wrap">{message.content}</p>
                  </div>
                </div>
              ))}

              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-gray-100 rounded-2xl px-4 py-3">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* 입력 영역 */}
            <div className="border-t p-4 bg-gray-50">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder={`${currentPolicy.name}에 대해 질문하세요...`}
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                  disabled={isLoading}
                />
                <button
                  onClick={() => handleSendMessage()}
                  disabled={isLoading || !inputMessage.trim()}
                  className={`${currentPolicy.color} text-white p-3 rounded-xl hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed`}
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 푸터 */}
        <div className="bg-white rounded-b-2xl shadow-lg p-4">
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-600">
              💡 답변은 AI가 회사 규정과 근로기준법을 기반으로 제공합니다. 정확한 내용은 경영지원팀에 문의하세요.
            </p>
            <button
              onClick={() => setShowContactModal(true)}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap ml-4"
            >
              <MessageCircle className="w-4 h-4" />
              문의하기
            </button>
          </div>
        </div>

        {/* 문의하기 모달 */}
        {showContactModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 relative">
              <button
                onClick={() => setShowContactModal(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
              >
                <X className="w-6 h-6" />
              </button>

              <h2 className="text-2xl font-bold text-gray-800 mb-2">경영지원팀 문의</h2>
              <p className="text-gray-600 mb-6">원하시는 방법으로 문의해주세요</p>

              <div className="space-y-3">
                {/* 이메일 문의 */}
                <a
                  href={`mailto:${CONTACT_INFO.email}?subject=규정 문의&body=안녕하세요, 다음 내용에 대해 문의드립니다:%0D%0A%0D%0A`}
                  className="flex items-center gap-3 p-4 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors"
                >
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800">이메일</div>
                  </div>
                </a>

                {/* Teams 채팅 문의 */}
                <a
                  href={CONTACT_INFO.teams}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 bg-purple-50 hover:bg-purple-100 rounded-lg transition-colors"
                >
                  <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
                    <MessageSquare className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800">Teams 채팅</div>
                  </div>
                </a>

                {/* 전화 문의 */}
                <a
                  href={`tel:${CONTACT_INFO.phone}`}
                  className="flex items-center gap-3 p-4 bg-green-50 hover:bg-green-100 rounded-lg transition-colors"
                >
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800">전화 : {CONTACT_INFO.phoneDisplay}</div>
                  </div>
                </a>
              </div>

              <p className="text-sm text-gray-500 mt-6 text-center">
                평일 09:00~18:00 / 점심시간 12:00~13:00
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
