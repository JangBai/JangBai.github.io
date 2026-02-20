export type ExperienceItem = {
  id: number;
  company: string;
  position: string;
  period: string;
  sections: {
    title: string;
    descriptions: string[];
  }[];
};

export const experienceData: ExperienceItem[] = [
  {
    id: 1,
    company: "법무법인 와이케이",
    position: "주임 | 마케팅IT팀",
    period: "2025.07 ~ 현재",
    sections: [
      {
        title: "검색 중심 서비스 구조 및 SEO 설계",
        descriptions: [
          "Next.js 기반 웹 서비스에서 검색 노출을 고려한 페이지 구조 설계 및 SEO 요구사항 반영",
          "동적 라우팅 구조 개선을 통해 콘텐츠 관리 효율 및 유지보수성 향상",
        ],
      },
      {
        title: "센터 단위 서비스 구조 설계 및 공통 UI 관리",
        descriptions: [
          "형사·이혼·민사센터 등 법률 서비스 구조 설계 및 공통 UI 분리",
          "신규 센터 추가 시 개발·유지보수 부담 최소화",
        ],
      },
      {
        title: "협업 기반 운영 효율 개선",
        descriptions: [
          "기획·디자인·운영 담당자와 협업하여 업무 흐름 단순화",
          "UI 개선 및 기능 보완을 병행하여 서비스 안정성 지속 개선",
        ],
      },
    ],
  },
  {
    id: 2,
    company: "주식회사 아쿠시 (HSM클라우디피아)",
    position: "사원 | 개발팀",
    period: "2022.02 ~ 2025.02 (3년)",
    sections: [
      {
        title: "클라이언트 맞춤형 ERP 및 업무 시스템 프론트엔드 개발",
        descriptions: [
          "기업별 요구사항을 분석하여 업무 프로세스에 맞는 화면 및 기능 구현",
          "데이터 관리 인터페이스(CRUD 기반) 설계 및 운영 기능 고도화",
        ],
      },
      {
        title: "자사 MVC 기반 웹 시스템 구조 설계 및 개선",
        descriptions: [
          "프로젝트 구조 및 라우팅 체계 정립",
          "코드 리팩토링을 통해 기능 추가 및 유지보수 흐름 정비",
        ],
      },
      {
        title: "실시간 데이터 처리 기반 기능 개선",
        descriptions: [
          "실시간 통신 구조를 적용하여 기존 수동 업무 프로세스를 자동화",
          "데이터 처리 흐름 개선을 통해 운영 효율 향상",
        ],
      },
    ],
  },
];
