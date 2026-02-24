export type ProjectLink = {
  id: number;
  title: string;
  link: string;
};

export type ProjectStack = {
  name: string;
  icon: string;
};

export type ProjectSection = {
  title?: string; // 없어도 됨
  items: string[];
};

export type ProjectItem = {
  id: number;
  title: string;
  subTitle: string[];
  descriptions: ProjectSection[];
  links?: ProjectLink[];
  stacks: ProjectStack[];
  communication: ProjectStack[];
};

export const projects: ProjectItem[] = [
  {
    id: 1,
    title: "법무법인 YK 센터 웹 서비스",
    subTitle: [],
    descriptions: [
      {
        items: [
          "센터별 페이지 특성을 고려한 SEO 구조 설계 및 메타데이터 관리",
          "검색 API 및 검색 결과 로직 구현을 통해 사용자 검색 경험 개선",
          "SSR / ISR 혼합 적용 및 revalidate 전략 설계",
          "nginx 및 Docker 기반 라우팅·리다이렉트 구조 구성",
          "공통 구조 기반 신규 센터 확장 설계",
          "요구사항 반영을 통한 UI 개선 및 기능 보완",
        ],
      },
    ],
    links: [
      {
        id: 1,
        title: "형사센터",
        link: "https://www.yklawfirm-crime.co.kr/",
      },
      {
        id: 2,
        title: "이혼센터",
        link: "https://www.yklawfirm-divorce.co.kr/",
      },
      {
        id: 3,
        title: "민사센터",
        link: "https://www.yklawfirm-civil.co.kr/",
      },
      {
        id: 4,
        title: "성범죄센터",
        link: "https://www.yklawfirm-assault.co.kr/",
      },
      {
        id: 5,
        title: "가사상속센터",
        link: "https://www.yklawfirm-inherit.co.kr/",
      },
    ],
    stacks: [
      { name: "Next.js", icon: "/language_logo/next.svg" },
      { name: "React", icon: "/language_logo/react.svg" },
      { name: "TypeScript", icon: "/language_logo/typescript.svg" },
      { name: "JavaScript", icon: "/language_logo/javascript.svg" },
      { name: "Express", icon: "/language_logo/express.svg" },
      { name: "SCSS", icon: "/language_logo/scss.svg" },
    ],
    communication: [
      { name: "Git/GitHub", icon: "/language_logo/github.svg" },
      { name: "Slack", icon: "/language_logo/slack.svg" },
      { name: "Jira", icon: "/language_logo/jira.svg" },
      { name: "Figma", icon: "/language_logo/figma.svg" },
    ],
  },
  {
    id: 2,
    title: "NAEK / YEHS",
    subTitle: [
      "NAEK - 공업 및 에너지 기술의 기반 조성을 위해 설립된 학술 연구기관",
      "YEHS - 한국공학한림원이 주관하는 미래 공학 리더 양성 프로그램",
    ],
    descriptions: [
      {
        items: [
          "UI/UX 개선을 위한 디자인 시스템 반영 및 컴포넌트 리팩토링",
          "React Redux 를 활용한 전역 상태 관리 적용",
          "재사용 가능한 UI 컴포넌트, 공통 모듈 도입으로 유지보수 시간 단축",
          "지명추천서 프로세스 개편 후, 운영진 업무 처리 속도 향상",
          "RESTful API 연동 및 데이터 처리",
          "Client-Server 간 구간 암호화 적용 및 보안 강화",
          "패키지 빌드 후 서비스 모니터링 및 유지보수 (UI 검수 및 기능 점검)",
          "어드민 페이지 기획 및 개발 (CRUD 기반의 데이터 관리 기능 개발 및 최적화)",
          "반응형 웹 (Media Query) 최적화 및 크로스 브라우징 대응",
        ],
      },
    ],
    links: [
      {
        id: 1,
        title: "한국공학한림원",
        link: "https://www.naek.or.kr/",
      },
      {
        id: 2,
        title: "차세대공학리더",
        link: "https://www.naekyehs.org/",
      },
    ],
    stacks: [
      { name: "React", icon: "/language_logo/react.svg" },
      { name: "JavaScript", icon: "/language_logo/javascript.svg" },
      { name: "HTML", icon: "/language_logo/html.svg" },
      { name: "SCSS", icon: "/language_logo/scss.svg" },
      { name: "PYTHON", icon: "/language_logo/python.svg" },
    ],
    communication: [
      { name: "Git/GitLab", icon: "/language_logo/gitlab.svg" },
      { name: "Figma", icon: "/language_logo/figma.svg" },
    ],
  },
  {
    id: 3,
    title: "EBUY",
    subTitle: [
      "전자화폐 거래 및 해외 증권사의 원화 입출금 서비스를 제공하는 중개 플랫폼",
    ],
    descriptions: [
      {
        title: "어플리케이션 (App Server)",
        items: [
          "웹 기반 어플리케이션 개발 및 배포",
          "외부 API 연동 회원가입 프로세스 기획 및 개발",
          "RESTful API 및 Socket.io 기반 입출금/지불대행 서비스 개발",
          "모바일 환경 UI 개발",
        ],
      },
      {
        title: "어드민 백오피스 (Admin Server)",
        items: [
          "내부 운영진용 백오피스 기획 및 개발",
          "사용자/매니저/파트너/입출금관리 등 핵심 기능 개발",
          "PHP Cron 기반 은행 스크래핑 자동 입금 시스템 구축",
          "Socket.io 기반 실시간 데이터 처리 자동화",
          "Skype → 웹 기반 CS 시스템 전환",
          "데이터 마이그레이션 참여",
        ],
      },
      {
        title: "포탈 백오피스 (Portal Server)",
        items: [
          "파트너 직원용 백오피스 기획 및 개발",
          "지불대행/출금대행/정산 관리 기능 개발",
          "Admin : Portal 대화 시스템 구축",
        ],
      },
      {
        title: "샌드박스 환경 (Sandbox Server)",
        items: [
          "API 테스트용 샌드박스 환경 구축",
          "지불/출금 API 테스트 환경 제공",
        ],
      },
    ],
    links: [],
    stacks: [
      { name: "HTML", icon: "/language_logo/html.svg" },
      { name: "CSS", icon: "/language_logo/css3.svg" },
      { name: "JavaScript", icon: "/language_logo/javascript.svg" },
      { name: "jQuery", icon: "/language_logo/jquery.svg" },
      { name: "PHP", icon: "/language_logo/php.svg" },
      { name: "MYSQL/MariaDB", icon: "/language_logo/mariaDB.svg" },
    ],
    communication: [
      { name: "Git/GitLab", icon: "/language_logo/gitlab.svg" },
      { name: "Figma", icon: "/language_logo/figma.svg" },
    ],
  },
];
