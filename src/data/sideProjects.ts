export type SideProjectLink = {
  id: number;
  title: string;
  link: string;
};

export type SideProjectStack = {
  name: string;
  icon: string;
};

export type SideProjectTestAccount = {
  email: string;
  password: string;
};

export type SideProjectItem = {
  id: number;
  title: string;
  subTitle: string;
  descriptions: string[];
  links: SideProjectLink[];
  stacks: SideProjectStack[];
  testAccounts?: SideProjectTestAccount[];
  testNotice?: string;
};

export const sideProjects: SideProjectItem[] = [
  {
    id: 1,
    title: "재고관리시스템",
    subTitle: "실사용 중인 내부 관리자 페이지",
    descriptions: [
      "카테고리별 제품(소품)을 이미지와 함께 등록·수정·관리하는 기능 구현",
      "일정별로 필요한 소품을 체크리스트에 담아 진행할 수 있는 기능 구현",
      "달력을 통한 일정 확인 기능 구현",
      "추가·수정·삭제 등 주요 작업 이력 로그 조회 기능 구현",
      "계정별 권한에 따라 조회·삭제 등 기능을 제한하는 권한 관리 적용",
    ],
    links: [
      {
        id: 1,
        title: "서비스 바로가기",
        link: "https://procket-one.vercel.app/login",
      },
    ],
    stacks: [
      { name: "Next.js", icon: "/language_logo/next.svg" },
      { name: "Prisma", icon: "prisma" },
      { name: "Vercel", icon: "vercel" },
      { name: "Supabase", icon: "supabase" },
      { name: "Supabase Storage", icon: "supabase" },
    ],
  },
  {
    id: 2,
    title: "웹 채팅 서비스",
    subTitle: "친구 기반 실시간 채팅 서비스",
    descriptions: [
      "이메일 기반 회원가입 및 JWT HttpOnly 로그인 인증 구현",
      "친구 추가 후 1:1 및 단체 채팅방에서 실시간 대화가 가능한 Socket 기반 채팅 구현",
      "사진·파일 업로드 및 채팅방 상단 메시지 고정 기능 구현",
      "메시지 수정·삭제와 나와의 채팅 기능 구현",
    ],
    links: [
      {
        id: 1,
        title: "서비스 바로가기",
        link: "https://synchat-self.vercel.app/",
      },
    ],
    stacks: [
      { name: "Next.js", icon: "/language_logo/next.svg" },
      { name: "Prisma", icon: "prisma" },
      { name: "Socket.IO", icon: "socket" },
      { name: "Express", icon: "/language_logo/express.svg" },
      { name: "Vercel", icon: "vercel" },
      { name: "Railway", icon: "railway" },
      { name: "Railway DB", icon: "railway" },
      { name: "Railway Bucket", icon: "railway" },
    ],
    testAccounts: [
      { email: "user1@test.com", password: "123123!" },
      { email: "user2@test.com", password: "123123@" },
    ],
    testNotice:
      "현재 도메인·쿠키 설정 이슈로 Safari와 Chrome 시크릿 모드에서는 로그인 또는 세션 유지가 어려울 수 있어요.\nChrome 일반 모드에서 간단한 기능만 가볍게 테스트해 주세요!\nSafari의 경우 ITP(Intelligent Tracking Prevention) 정책으로 세션·쿠키가 차단될 수 있습니다.\n\n알림, 소소한 오류 등 부족한 점이 많으니 너그럽게 봐주시면 감사하겠습니다! 🥹",
  },
];
