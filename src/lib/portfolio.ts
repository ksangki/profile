export type Locale = "ko" | "en";

export type NavLink = { href: string; label: string };
export type Stat = { value: string; label: string };
export type Project = {
  id: string;
  number: string;
  title: string;
  category: string;
  year: string;
  client: string;
  summary: string;
  description: string;
  image: string;
  alt: string;
  href?: string;
};

export type Copy = {
  meta: { title: string; description: string };
  ui: {
    skip: string;
    menuOpen: string;
    menuClose: string;
    navAria: string;
    footerAria: string;
    langAria: string;
  };
  site: {
    name: string;
    otherName: string;
    role: string;
    location: string;
    availability: string;
    years: string;
    team: string;
  };
  links: { label: string; href: string }[];
  nav: NavLink[];
  hero: {
    kicker: string;
    body: string;
    cta: string;
    linkedin: string;
    stats: Stat[];
  };
  about: {
    heading: string;
    kicker: string;
    portrait: string;
    portraitAlt: string;
    caption: string;
    lede: string;
    pull: string;
    paragraphs: string[];
  };
  experience: {
    heading: string;
    kicker: string;
    educationKicker: string;
    jobs: {
      org: string;
      role: string;
      period: string;
      bullets: string[];
    }[];
    education: { school: string; field: string; note: string };
  };
  work: {
    heading: string;
    kicker: string;
    intro: string;
    filterLegend: string;
    all: string;
    categories: string[];
    programsHeading: string;
    impactHeading: string;
    talksHeading: string;
    projects: Project[];
    programs: { name: string; detail: string }[];
    impact: Stat[];
    talks: { title: string; event: string; date: string; note: string }[];
  };
  skills: {
    heading: string;
    kicker: string;
    groups: { heading: string; items: { name: string; detail: string }[] }[];
  };
  writing: {
    heading: string;
    kicker: string;
    bookCta: string;
    pressHeading: string;
    platformsHeading: string;
    ebooksHeading: string;
    ebooksKicker: string;
    ebooksLede: string;
    readLabel: string;
    epubLabel: string;
    book: {
      title: string;
      press: string;
      date: string;
      href: string;
      image: string;
      alt: string;
      body: string;
    };
    ebookSeries: {
      heading: string;
      books: {
        title: string;
        subtitle: string;
        href: string;
        epub: string;
        note?: string;
        extras?: { label: string; href: string }[];
      }[];
    }[];
    press: { outlet: string; date: string; title: string; href: string }[];
    platforms: { name: string; detail: string; href: string }[];
  };
  contact: {
    heading: string;
    kicker: string;
    lede: string;
    note: string;
    workLabel: string;
    profileLabel: string;
    pdfLabel: string;
    pdfName: string;
    toLabel: string;
    fromLabel: string;
    replyLabel: string;
    subjectLabel: string;
    bodyLabel: string;
    namePlaceholder: string;
    messagePlaceholder: string;
    send: string;
    sending: string;
    sentKicker: string;
    sentTitle: string;
    sentBody: string;
    writeAnother: string;
    inquiryAria: string;
    inquiryKinds: [string, string, string, string];
    errors: { name: string; email: string; message: string; send: string };
  };
  footer: { typeCredit: string; pdf: string };
};

const SHARED_LINKS = [
  { href: "https://www.linkedin.com/in/ksangki" },
  { href: "https://github.com/ksangki" },
  { href: "https://devocean.sk.com/" },
  { href: "https://www.yes24.com/product/goods/148184184" },
] as const;

const EBOOKS = {
  era: {
    href: "https://ksangki.github.io/beyond-code-era/",
    epub: "https://ksangki.github.io/beyond-code-era/epub/코드-너머의-시대-v1.0.0.epub",
  },
  jobs: {
    href: "https://ksangki.github.io/beyond-code-jobs/",
    epub: "https://ksangki.github.io/beyond-code-jobs/epub/코드-너머의-직업들-v1.1.1.epub",
  },
  org: {
    href: "https://ksangki.github.io/beyond-code-org/",
    epub: "https://ksangki.github.io/beyond-code-org/epub/코드-너머의-조직-v1.2.0.epub",
  },
  summary: {
    href: "https://ksangki.github.io/beyond-code-summary/",
    epub: "https://ksangki.github.io/beyond-code-summary/epub/코드-너머의-시리즈-v1.1.0.epub",
  },
  ax: {
    href: "https://ksangki.github.io/ax-book/",
    epub: "https://ksangki.github.io/ax-book/epub/AX를-만들다-v1.2.0.epub",
  },
  maturity: {
    href: "https://ksangki.github.io/ax-maturity/",
    epub: "https://ksangki.github.io/ax-maturity/epub/나는-이-게임을-안다-v1.0.0.epub",
    check: "https://axmm-check.vercel.app",
    slides: "https://ksangki.github.io/ax-maturity/presentation/",
  },
  ontology: {
    href: "https://ksangki.github.io/ontology-neo4j-ai/",
    epub: "https://ksangki.github.io/ontology-neo4j-ai/epub/온톨로지-실전-입문-v1.0.0.epub",
  },
  website: {
    href: "https://ksangki.github.io/claude-static-site-handson/",
    epub: "https://ksangki.github.io/claude-static-site-handson/epub/따라-하면-완성되는-내-첫-웹사이트-v1.0.0.epub",
  },
  claude: {
    href: "https://ksangki.github.io/claude-practical-guide/",
    epub: "https://ksangki.github.io/claude-practical-guide/epub/일잘러의-Claude-활용법-v1.0.0.epub",
  },
} as const;

const ko: Copy = {
  meta: {
    title: "김상기 — Sangki Kim",
    description:
      "김상기. SK텔레콤 Developer Relations Manager. 코드 너머, 회사보다 오래 남을 개발자를 이야기합니다.",
  },
  ui: {
    skip: "소개로 건너뛰기",
    menuOpen: "메뉴 열기",
    menuClose: "메뉴 닫기",
    navAria: "주요",
    footerAria: "푸터",
    langAria: "언어",
  },
  site: {
    name: "김상기",
    otherName: "Sangki Kim",
    role: "SK텔레콤 Developer Relations Manager",
    location: "서울",
    availability: "강연 · 협업 · 미디어 문의",
    years: "2006—2026",
    team: "기업문화AX팀",
  },
  links: [
    { label: "LinkedIn", href: SHARED_LINKS[0].href },
    { label: "GitHub", href: SHARED_LINKS[1].href },
    { label: "DEVOCEAN", href: SHARED_LINKS[2].href },
    { label: "도서", href: SHARED_LINKS[3].href },
  ],
  nav: [
    { href: "#about", label: "소개" },
    { href: "#experience", label: "경력" },
    { href: "#work", label: "활동" },
    { href: "#skills", label: "역량" },
    { href: "#writing", label: "저술" },
    { href: "#contact", label: "연락" },
  ],
  hero: {
    kicker: "01 — 소개",
    body: "약 20년간 소프트웨어 개발, 프로세스 개선, 품질 보증 분야에서 경험을 쌓아온 기술 리더입니다. DEVOCEAN을 통해 20,000명 이상의 개발자 커뮤니티를 구축하고, 기술 생태계 활성화와 혁신을 주도하고 있습니다.",
    cta: "자세히 알아보기",
    linkedin: "링크드인 프로필",
    stats: [
      { value: "약 20년", label: "개발 · QA · 프로세스" },
      { value: "20,000+", label: "DEVOCEAN 커뮤니티" },
      { value: "500+", label: "LinkedIn 팔로워" },
    ],
  },
  about: {
    heading: "소개",
    kicker: "소개",
    portrait: "/images/portrait.jpg",
    portraitAlt: "트레이싱지 도면과 제도 도구가 놓인 작업 책상.",
    caption: "작업실, 서울",
    lede: "코드 너머, 회사보다 오래 남을 개발자.",
    pull: "회사보다 오래 남을 개발자를 키웁니다.",
    paragraphs: [
      "약 20년간 소프트웨어 개발, 프로세스 개선, 품질 보증 분야에서 경험을 쌓아온 기술 리더입니다. DEVOCEAN을 통해 20,000명 이상의 개발자 커뮤니티를 구축하고, 기술 생태계 활성화와 혁신을 주도하고 있습니다.",
      "소프트웨어 공학을 전공한 후 제품과 프로세스의 품질 향상을 목표로 다양한 역할을 수행해왔습니다. 개발 문화, 퍼스널 브랜딩, 소프트 스킬의 중요성을 깨달으며 개발자들이 장기적으로 경쟁력을 갖출 수 있도록 돕는 것에 관심을 가지고 있습니다.",
      "현재 SK텔레콤 기업문화AX팀에서 Developer Relations를 담당하며, 개발자 커뮤니티와의 협력을 통해 기술 생태계를 활성화하고 AI 등 신기술 도입을 주도하고 있습니다.",
      "「코드 너머, 회사보다 오래 남을 개발자」의 저자로서, 기술 전문성뿐만 아니라 개발자로서의 지속 가능한 성장과 경력 개발에 대해 이야기하고 있습니다.",
    ],
  },
  experience: {
    heading: "경력",
    kicker: "현재 근무 중",
    educationKicker: "학력",
    jobs: [
      {
        org: "SK텔레콤",
        role: "기업문화AX팀 Developer Relations 담당",
        period: "현재 근무 중",
        bullets: [
          "개발자 생태계 활성화 및 기술 커뮤니티 운영",
          "AI 생태계 활성화 방안 연구 및 추진",
          "개발자 역량 혁신 및 교육 프로그램 개발",
          "DEVOCEAN 플랫폼 운영 및 확대 (20,000+ 개발자)",
        ],
      },
      {
        org: "소프트웨어 개발 경력",
        role: "개발, QA, 프로세스 개선",
        period: "약 20년",
        bullets: [
          "소프트웨어 개발 및 아키텍처 설계",
          "프로세스 개선 및 품질 보증 (QA)",
          "팀 리더십 및 기술 멘토링",
          "Agile 방법론 및 개발 문화 혁신",
        ],
      },
    ],
    education: {
      school: "고려대학교",
      field: "소프트웨어 공학",
      note: "소프트웨어 공학의 기초부터 고급 주제까지 학습하며, 제품 개발과 프로세스 개선에 대한 체계적인 이해를 형성했습니다.",
    },
  },
  work: {
    heading: "활동",
    kicker: "DEVOCEAN · 2021—",
    intro:
      "DEVOCEAN은 “Developer's Ocean(개발자의 바다)” + “Devotion(헌신)”의 의미로, SK의 개발자 커뮤니티와 생태계를 활성화하는 플랫폼입니다. 2021년부터 운영하며 20,000명 이상의 SK ICT 개발자와 협력하고 있습니다.",
    filterLegend: "분야로 활동 걸러 보기",
    all: "전체",
    categories: ["커뮤니티", "프로그램", "발표"],
    programsHeading: "주요 프로그램",
    impactHeading: "영향력",
    talksHeading: "커뮤니티 활동 & 발표",
    projects: [
      {
        id: "devocean",
        number: "01",
        title: "DEVOCEAN",
        category: "커뮤니티",
        year: "2021—",
        client: "SK ICT 개발자 커뮤니티",
        summary: "Developer's Ocean과 Devotion(헌신). SK 개발자 생태계를 여는 플랫폼입니다.",
        description:
          "DEVOCEAN은 “Developer's Ocean(개발자의 바다)” + “Devotion(헌신)”의 의미로, SK의 개발자 커뮤니티와 생태계를 활성화하는 플랫폼입니다. 2021년부터 운영하며 20,000명 이상의 SK ICT 개발자와 협력하고 있습니다.",
        image: "/images/projects/devocean.jpg",
        alt: "창밖으로 바다가 보이는 책상 위 편지와 해도.",
        href: "https://devocean.sk.com/",
      },
      {
        id: "expert",
        number: "02",
        title: "DEVOCEAN Expert Program",
        category: "프로그램",
        year: "2022—2025",
        client: "SK 전문가 네트워크",
        summary: "150명 이상의 SK 전문가가 참여하는 헌신의 프로그램입니다.",
        description:
          "조직 안 전문가들이 지식을 나누고 다음 세대를 키우는 자리입니다. 150명 이상의 SK 전문가가 참여하고 있습니다.",
        image: "/images/projects/devotion.jpg",
        alt: "이름표와 찻잔, 프로그램 북이 놓인 참나무 원탁.",
      },
      {
        id: "tech-day",
        number: "03",
        title: "DEVOCEAN Tech Day",
        category: "프로그램",
        year: "2022—2025",
        client: "SK ICT",
        summary: "7회를 개최했고, 8회가 예정되어 있습니다.",
        description:
          "SK ICT 개발자가 한자리에 모이는 기술 축제입니다. 2022년부터 7회를 개최했고 8회가 예정되어 있습니다.",
        image: "/images/projects/capability.jpg",
        alt: "커리큘럼 소책자와 연필이 쌓인 리넨 테이블.",
      },
      {
        id: "seminar",
        number: "04",
        title: "DEVOCEAN Tech Seminar",
        category: "프로그램",
        year: "2022—",
        client: "SK ICT",
        summary: "37회 개최, 300명 이상이 참여했습니다.",
        description:
          "현장의 기술을 나누는 세미나 시리즈입니다. 37회를 개최했고 300명 이상이 참여했습니다. 신입·주니어를 위한 DEVOCEAN Young도 함께 운영합니다.",
        image: "/images/projects/talk.jpg",
        alt: "햇살 드는 홀의 빈 단상과 마이크, 접힌 발표 노트.",
      },
      {
        id: "openlab",
        number: "05",
        title: "DEVOCEAN OpenLab",
        category: "프로그램",
        year: "2024",
        client: "NVIDIA · 모두의연구소",
        summary: "AI 중심 프로그램. 2024년 4월, 100명 이상이 참여했습니다.",
        description:
          "2024년 4월 연 AI 중심 프로그램입니다. NVIDIA, 모두의연구소 등과 협업해 생태계 활성화 방안을 논의했고, 100명 이상이 참여했습니다.",
        image: "/images/projects/ai.jpg",
        alt: "네트워크 도면이 그려진 트레이싱지와 황동 제도 도구.",
      },
      {
        id: "talks",
        number: "06",
        title: "커뮤니티 발표",
        category: "발표",
        year: "2023",
        client: "SKT SUPEX · Korea DevRel Night",
        summary: "DevRel 6년의 경험과 기술 커뮤니티 운영을 나눴습니다.",
        description:
          "2023년 12월 1일 SKT SUPEX에서 「DevRel 6년의 경험과 기술 커뮤니티 운영」을 발표했습니다. 약 200명이 참석했습니다. Korea DevRel Night에서는 LG U+, AWSKRUG, GDG와 함께 기술 리더십과 커뮤니티 활성화를 논의했습니다.",
        image: "/images/projects/beyond-code.jpg",
        alt: "크림색 종이 위의 클로스바운드 책과 만년필.",
      },
    ],
    programs: [
      { name: "DEVOCEAN Expert Program", detail: "150명 이상의 SK 전문가 참여" },
      { name: "DEVOCEAN Tech Day", detail: "7회 개최, 8회 예정 (2022–2025)" },
      { name: "DEVOCEAN Tech Seminar", detail: "37회 개최, 300명 이상 참여" },
      { name: "DEVOCEAN Young", detail: "신입/주니어 개발자 대상 프로그램" },
      { name: "DEVOCEAN OpenLab", detail: "AI 중심 프로그램 (2024년 4월, 100명 이상 참여)" },
    ],
    impact: [
      { value: "20,000+", label: "SK ICT 개발자 커뮤니티" },
      { value: "37+", label: "기술 세미나 개최" },
      { value: "150+", label: "전문가 네트워크" },
      { value: "100+", label: "AI 프로젝트 참여자" },
    ],
    talks: [
      {
        title: "DevRel 6년의 경험과 기술 커뮤니티 운영",
        event: "SKT SUPEX",
        date: "2023년 12월 1일",
        note: "약 200명 참석",
      },
      {
        title: "기술 리더십과 커뮤니티 활성화",
        event: "Korea DevRel Night",
        date: "DevRel 커뮤니티 주최",
        note: "LG U+, AWSKRUG, GDG 협력",
      },
    ],
  },
  skills: {
    heading: "역량",
    kicker: "기술과 사람",
    groups: [
      {
        heading: "기술 역량",
        items: [
          { name: "소프트웨어 엔지니어링", detail: "아키텍처 설계, 개발 방법론, 코드 품질" },
          { name: "프로세스 개선", detail: "CI/CD, 자동화, 개발 문화 혁신" },
          { name: "품질 보증 (QA)", detail: "테스트 전략, 품질 메트릭, 결함 관리" },
          { name: "AI & 신기술", detail: "AI 생태계, 기술 트렌드 분석" },
        ],
      },
      {
        heading: "소프트 스킬",
        items: [
          { name: "Developer Relations", detail: "커뮤니티 관리, 기술 이벤트 운영" },
          { name: "리더십 & 멘토링", detail: "팀 리더십, 기술 멘토링, 역량 개발" },
          { name: "기술 커뮤니케이션", detail: "기술 글쓰기, 발표, 저술" },
          { name: "퍼스널 브랜딩", detail: "개발자 경력 개발, 전문성 구축" },
        ],
      },
    ],
  },
  writing: {
    heading: "저술 & 미디어",
    kicker: "한빛미디어 · e-book · 2025–2026",
    bookCta: "도서 정보 보기",
    pressHeading: "언론 보도",
    platformsHeading: "활동 플랫폼",
    ebooksHeading: "지은 책",
    ebooksKicker: "e-book · 2026",
    ebooksLede:
      "AI가 일하는 방식을 바꾸는 동안, 그 변화를 안에서 겪으며 쓴 기록들. 모두 웹에서 바로 읽을 수 있고 EPUB으로 내려받을 수 있습니다.",
    readLabel: "읽기",
    epubLabel: "EPUB",
    book: {
      title: "코드 너머, 회사보다 오래 남을 개발자",
      press: "한빛미디어",
      date: "2025년 6월 30일 출판",
      href: "https://www.yes24.com/product/goods/148184184",
      image: "/images/projects/beyond-code.jpg",
      alt: "크림색 종이 위의 클로스바운드 책과 만년필.",
      body: "소프트 스킬, 개발 문화, 퍼스널 브랜딩을 통해 개발자가 장기적으로 경쟁력을 갖출 수 있는 방법을 제시합니다. 단순한 기술 전문성을 넘어 「코드 너머」의 가치를 탐구하며, 회사보다 오래 남을 수 있는 개발자가 되기 위한 실질적인 조언과 인사이트를 담고 있습니다.",
    },
    ebookSeries: [
      {
        heading: "코드 너머 시리즈",
        books: [
          {
            title: "코드 너머의 시대",
            subtitle: "AI가 모든 것을 바꾼 세상에서 살아남는 법",
            href: EBOOKS.era.href,
            epub: EBOOKS.era.epub,
          },
          {
            title: "코드 너머의 직업들",
            subtitle: "GPU 위에서 일하는 사람들",
            href: EBOOKS.jobs.href,
            epub: EBOOKS.jobs.epub,
          },
          {
            title: "코드 너머의 조직",
            subtitle: "AX 시대, 일과 조직을 다시 짜는 법",
            href: EBOOKS.org.href,
            epub: EBOOKS.org.epub,
          },
          {
            title: "코드 너머의 시리즈",
            subtitle: "세 권의 결을 한 권에",
            href: EBOOKS.summary.href,
            epub: EBOOKS.summary.epub,
          },
        ],
      },
      {
        heading: "AX 실전",
        books: [
          {
            title: "AX를 만들다",
            subtitle: "일하는 방식을 코드로 다시 짠 6개월의 기록",
            href: EBOOKS.ax.href,
            epub: EBOOKS.ax.epub,
          },
          {
            title: "나는 이 게임을 안다",
            subtitle: "AX 성숙도를 스스로 재는 법",
            href: EBOOKS.maturity.href,
            epub: EBOOKS.maturity.epub,
            note: "로그인 없이 15분이면 우리 조직이 몇 단계인지 재볼 수 있습니다.",
            extras: [
              { label: "자체 점검 30문항", href: EBOOKS.maturity.check },
              { label: "발표 슬라이드", href: EBOOKS.maturity.slides },
            ],
          },
        ],
      },
      {
        heading: "기술 실습",
        books: [
          {
            title: "온톨로지 실전 입문",
            subtitle: "Neo4j와 AI로 지식그래프 시스템 만들기",
            href: EBOOKS.ontology.href,
            epub: EBOOKS.ontology.epub,
          },
          {
            title: "따라 하면 완성되는 내 첫 웹사이트",
            subtitle: "비개발자를 위한 Claude AI 실습 가이드",
            href: EBOOKS.website.href,
            epub: EBOOKS.website.epub,
          },
          {
            title: "일잘러의 Claude 활용법",
            subtitle: "AI로 일하는 방식이 달라진다",
            href: EBOOKS.claude.href,
            epub: EBOOKS.claude.epub,
          },
        ],
      },
    ],
    press: [
      {
        outlet: "CIO Korea",
        date: "2025년 7월 31일",
        title: "코딩만 잘하면 끝? 업계 베테랑 6인이 말하는 ‘오래 남는 개발자’의 조건",
        href: "https://www.cio.com/article/4031881/%EC%BD%94%EB%94%A9%EB%A7%8C-%EC%9E%98%ED%95%98%EB%A9%B4-%EB%81%9D-%EC%97%85%EA%B3%84-%EB%B2%A0%ED%85%8C%EB%9E%91-6%EC%9D%B8%EC%9D%B4-%EB%A7%90%ED%95%98%EB%8A%94-%EC%98%A4%EB%9E%98-%EB%82%A8.html",
      },
      {
        outlet: "SK텔레콤 뉴스룸",
        date: "2025년 7월 16일",
        title: "제8회 데보션 테크데이 현장 스케치 — AI 인프라와 데이터센터",
        href: "https://news.sktelecom.com/213870",
      },
      {
        outlet: "SK텔레콤 뉴스룸",
        date: "2024년 8월 13일",
        title: "데보션 개발자 102명의 성장 스토리: AI 스터디",
        href: "https://news.sktelecom.com/206285",
      },
      {
        outlet: "AI타임스",
        date: "2024년 8월 9일",
        title: "SKT, ‘데보션 테크 데이’ 개최…개발자 100명의 AI 성장",
        href: "https://www.aitimes.kr/news/articleView.html?idxno=31923",
      },
      {
        outlet: "SK텔레콤 뉴스룸",
        date: "2024년 6월 14일",
        title: "데보션 3주년, 개발자 소통과 기술 공유의 장",
        href: "https://news.sktelecom.com/204774",
      },
      {
        outlet: "전자신문",
        date: "2024년 4월 1일",
        title: "SK텔레콤, ‘데보션 오픈랩’ 신설…“AI 개발 문화 구축”",
        href: "https://www.etnews.com/20240401000016",
      },
      {
        outlet: "뉴스1",
        date: "2024년 4월 1일",
        title: "SKT, ‘데보션 오픈랩’ 신설…AI 집단지성 장 만든다",
        href: "https://www.news1.kr/it-science/cc-newmedia/5369240",
      },
      {
        outlet: "문화일보",
        date: "2023년 12월 3일",
        title: "“개발자 학벌 제한 있나요” “워라밸 보장되나요” SKT 데브챗",
        href: "https://www.munhwa.com/article/11399225",
      },
      {
        outlet: "요즘IT",
        date: "2023년 11월 23일",
        title: "IT기업 내 중요성 커지는 ‘데브렐’ 한자리에 모이는 날",
        href: "https://yozm.wishket.com/magazine/detail/2332/",
      },
      {
        outlet: "뉴스핌",
        date: "2022년 4월 27일",
        title: "SK 제1회 ‘데보션 테크데이’ 개최…기술공유",
        href: "https://www.newspim.com/news/view/20220427000136",
      },
      {
        outlet: "SK Careers Journal",
        date: "2022년 3월 28일",
        title: "DEVOCEAN(데보션), 취준생의 네비게이션이 되다",
        href: "https://www.skcareersjournal.com/2512",
      },
      {
        outlet: "SK텔레콤 뉴스룸",
        date: "2021년 6월 14일",
        title: "SK, 개발자 소통 커뮤니티 ‘DEVOCEAN’ 론칭",
        href: "https://news.sktelecom.com/132273",
      },
    ],
    platforms: [
      {
        name: "DEVOCEAN 블로그",
        detail: "SK 개발자 커뮤니티 플랫폼에서 기술 글쓰기 및 DevRel 관련 기사 작성",
        href: "https://devocean.sk.com/",
      },
      {
        name: "LinkedIn",
        detail: "최근 글과 생각을 올리는 곳입니다.",
        href: "https://www.linkedin.com/in/ksangki",
      },
    ],
  },
  contact: {
    heading: "연락",
    kicker: "LinkedIn · GitHub · PDF",
    lede: "편지처럼 적어 주세요. 강연, 협업, 미디어 문의 모두 읽습니다.",
    note: "공개 메일은 두지 않았습니다. 이 양식이나 LinkedIn으로 먼저 말을 걸어 주세요. 자세한 이력은 프로필 문서를 내려받을 수 있습니다.",
    workLabel: "근무",
    profileLabel: "프로필",
    pdfLabel: "PDF 다운로드",
    pdfName: "김상기_Sangki_Kim_프로페셔널_프로필_종합_리서치.pdf",
    toLabel: "받는 이",
    fromLabel: "보내는 이",
    replyLabel: "회신",
    subjectLabel: "용건",
    bodyLabel: "본문",
    namePlaceholder: "이름",
    messagePlaceholder: "일정, 맥락, 함께 하고 싶은 일을 몇 줄로.",
    send: "편지 보내기",
    sending: "보내는 중…",
    sentKicker: "도착",
    sentTitle: "받았습니다. 책상 위에 올려 두었습니다.",
    sentBody: "며칠 안에 LinkedIn 또는 남겨 주신 메일로 답하겠습니다.",
    writeAnother: "한 통 더 쓰기",
    inquiryAria: "문의 종류",
    inquiryKinds: ["협업", "강연", "미디어", "기타"],
    errors: {
      name: "이름을 적어 주세요.",
      email: "이메일 형식을 확인해 주세요.",
      message: "조금만 더 구체적으로 적어 주세요.",
      send: "보내지 못했습니다. 잠시 후 다시 시도하거나 LinkedIn으로 연락해 주세요.",
    },
  },
  footer: {
    typeCredit: "본문은 Noto Serif KR · Noto Sans KR.",
    pdf: "프로필 PDF",
  },
};

const en: Copy = {
  meta: {
    title: "Sangki Kim — Developer Relations",
    description:
      "Sangki Kim, Developer Relations Manager at SK Telecom. Author of Beyond Code — on developers who last longer than any company.",
  },
  ui: {
    skip: "Skip to about",
    menuOpen: "Open menu",
    menuClose: "Close menu",
    navAria: "Primary",
    footerAria: "Footer",
    langAria: "Language",
  },
  site: {
    name: "Sangki Kim",
    otherName: "김상기",
    role: "SK Telecom Developer Relations Manager",
    location: "Seoul",
    availability: "Talks · collaboration · press",
    years: "2006—2026",
    team: "Corporate Culture AX Team",
  },
  links: [
    { label: "LinkedIn", href: SHARED_LINKS[0].href },
    { label: "GitHub", href: SHARED_LINKS[1].href },
    { label: "DEVOCEAN", href: SHARED_LINKS[2].href },
    { label: "Book", href: SHARED_LINKS[3].href },
  ],
  nav: [
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#work", label: "Work" },
    { href: "#skills", label: "Skills" },
    { href: "#writing", label: "Writing" },
    { href: "#contact", label: "Contact" },
  ],
  hero: {
    kicker: "01 — Intro",
    body: "A technical leader with about twenty years in software development, process improvement, and quality assurance. Through DEVOCEAN he has built a community of more than 20,000 developers and continues to grow the ecosystem.",
    cta: "Read more",
    linkedin: "LinkedIn profile",
    stats: [
      { value: "~20 yrs", label: "Engineering · QA · process" },
      { value: "20,000+", label: "DEVOCEAN community" },
      { value: "500+", label: "LinkedIn followers" },
    ],
  },
  about: {
    heading: "About",
    kicker: "Profile",
    portrait: "/images/portrait.jpg",
    portraitAlt: "A work desk with tracing-paper diagrams and drafting tools.",
    caption: "Studio, Seoul",
    lede: "Beyond code — developers who last longer than any company.",
    pull: "I grow developers who outlast the company they work for.",
    paragraphs: [
      "A technical leader with about twenty years in software development, process improvement, and quality assurance. Through DEVOCEAN he has built a community of more than 20,000 developers and continues to grow the ecosystem.",
      "After studying software engineering, he took on roles aimed at raising the quality of products and processes. Coming to see culture, personal branding, and soft skills as long-term advantages, he turned his attention to helping developers stay competitive over a whole career.",
      "He now leads Developer Relations on SK Telecom’s Corporate Culture AX team, working with developer communities to activate the ecosystem and bring AI and other new technologies into practice.",
      "As the author of Beyond Code: The Developer Who Lasts Longer Than the Company, he writes not only about technical craft but about durable growth and career development.",
    ],
  },
  experience: {
    heading: "Experience",
    kicker: "Currently",
    educationKicker: "Education",
    jobs: [
      {
        org: "SK Telecom",
        role: "Developer Relations, Corporate Culture AX Team",
        period: "Currently",
        bullets: [
          "Developer-ecosystem growth and technical community operations",
          "Research and delivery of AI-ecosystem initiatives",
          "Developer capability programs and education",
          "Operating and scaling the DEVOCEAN platform (20,000+ developers)",
        ],
      },
      {
        org: "Software engineering",
        role: "Development, QA, and process improvement",
        period: "~20 years",
        bullets: [
          "Software development and architecture",
          "Process improvement and quality assurance (QA)",
          "Team leadership and technical mentoring",
          "Agile methods and engineering-culture change",
        ],
      },
    ],
    education: {
      school: "Korea University",
      field: "Software Engineering",
      note: "Studied software engineering from foundations through advanced topics, building a systematic view of product development and process improvement.",
    },
  },
  work: {
    heading: "Work",
    kicker: "DEVOCEAN · 2021—",
    intro:
      "DEVOCEAN combines “Developer’s Ocean” and “Devotion.” It is SK’s platform for growing a developer community and ecosystem. Since 2021 it has worked with more than 20,000 SK ICT developers.",
    filterLegend: "Filter work by category",
    all: "All",
    categories: ["Community", "Program", "Talk"],
    programsHeading: "Flagship programs",
    impactHeading: "Impact",
    talksHeading: "Community & talks",
    projects: [
      {
        id: "devocean",
        number: "01",
        title: "DEVOCEAN",
        category: "Community",
        year: "2021—",
        client: "SK ICT developer community",
        summary: "Developer’s Ocean and Devotion — a platform for SK’s engineering ecosystem.",
        description:
          "DEVOCEAN combines “Developer’s Ocean” and “Devotion.” It is SK’s platform for growing a developer community and ecosystem. Since 2021 it has worked with more than 20,000 SK ICT developers.",
        image: "/images/projects/devocean.jpg",
        alt: "A letter and a chart on a desk, with the sea beyond the window.",
        href: "https://devocean.sk.com/",
      },
      {
        id: "expert",
        number: "02",
        title: "DEVOCEAN Expert Program",
        category: "Program",
        year: "2022—2025",
        client: "SK expert network",
        summary: "A devotion program with more than 150 SK experts.",
        description:
          "A place for in-house experts to share knowledge and raise the next generation. More than 150 SK experts take part.",
        image: "/images/projects/devotion.jpg",
        alt: "Name cards, tea, and a program book on an oak round table.",
      },
      {
        id: "tech-day",
        number: "03",
        title: "DEVOCEAN Tech Day",
        category: "Program",
        year: "2022—2025",
        client: "SK ICT",
        summary: "Seven editions held; an eighth is planned.",
        description:
          "A technical festival that brings SK ICT developers together. Seven editions since 2022; an eighth is planned.",
        image: "/images/projects/capability.jpg",
        alt: "Curriculum booklets and pencils stacked on a linen table.",
      },
      {
        id: "seminar",
        number: "04",
        title: "DEVOCEAN Tech Seminar",
        category: "Program",
        year: "2022—",
        client: "SK ICT",
        summary: "37 editions; more than 300 people have taken part.",
        description:
          "A seminar series on practice in the field. 37 editions, with more than 300 participants. DEVOCEAN Young runs alongside it for new and junior developers.",
        image: "/images/projects/talk.jpg",
        alt: "An empty podium, a microphone, and folded notes in a sunlit hall.",
      },
      {
        id: "openlab",
        number: "05",
        title: "DEVOCEAN OpenLab",
        category: "Program",
        year: "2024",
        client: "NVIDIA · Modu Labs",
        summary: "An AI-centered program. April 2024; more than 100 participants.",
        description:
          "An AI-centered program held in April 2024. In collaboration with NVIDIA, Modu Labs, and others, it examined how to grow the AI ecosystem. More than 100 people took part.",
        image: "/images/projects/ai.jpg",
        alt: "Network diagrams on tracing paper with brass drafting tools.",
      },
      {
        id: "talks",
        number: "06",
        title: "Community talks",
        category: "Talk",
        year: "2023",
        client: "SKT SUPEX · Korea DevRel Night",
        summary: "Six years of DevRel and running a technical community.",
        description:
          "On 1 December 2023 at SKT SUPEX, he spoke on “Six Years of DevRel and Running a Technical Community.” About 200 people attended. At Korea DevRel Night he joined LG U+, AWSKRUG, and GDG to discuss technical leadership and community growth.",
        image: "/images/projects/beyond-code.jpg",
        alt: "A clothbound book and a fountain pen on cream paper.",
      },
    ],
    programs: [
      { name: "DEVOCEAN Expert Program", detail: "150+ SK experts" },
      { name: "DEVOCEAN Tech Day", detail: "7 editions; 8th planned (2022–2025)" },
      { name: "DEVOCEAN Tech Seminar", detail: "37 editions; 300+ participants" },
      { name: "DEVOCEAN Young", detail: "Program for new and junior developers" },
      { name: "DEVOCEAN OpenLab", detail: "AI-centered program (April 2024, 100+)" },
    ],
    impact: [
      { value: "20,000+", label: "SK ICT developer community" },
      { value: "37+", label: "Technical seminars" },
      { value: "150+", label: "Expert network" },
      { value: "100+", label: "AI project participants" },
    ],
    talks: [
      {
        title: "Six Years of DevRel and Running a Technical Community",
        event: "SKT SUPEX",
        date: "1 December 2023",
        note: "About 200 attendees",
      },
      {
        title: "Technical leadership and community growth",
        event: "Korea DevRel Night",
        date: "Hosted by the DevRel community",
        note: "With LG U+, AWSKRUG, and GDG",
      },
    ],
  },
  skills: {
    heading: "Skills",
    kicker: "Craft and people",
    groups: [
      {
        heading: "Technical",
        items: [
          { name: "Software engineering", detail: "Architecture, methods, code quality" },
          { name: "Process improvement", detail: "CI/CD, automation, culture change" },
          { name: "Quality assurance", detail: "Test strategy, quality metrics, defect management" },
          { name: "AI & emerging tech", detail: "AI ecosystems, technology-trend analysis" },
        ],
      },
      {
        heading: "Soft skills",
        items: [
          { name: "Developer Relations", detail: "Community, technical events" },
          { name: "Leadership & mentoring", detail: "Team leadership, mentoring, capability building" },
          { name: "Technical communication", detail: "Writing, speaking, publishing" },
          { name: "Personal branding", detail: "Career development, professional identity" },
        ],
      },
    ],
  },
  writing: {
    heading: "Writing & press",
    kicker: "Hanbit Media · e-book · 2025–2026",
    bookCta: "View the book",
    pressHeading: "Press",
    platformsHeading: "Where I write",
    ebooksHeading: "Books",
    ebooksKicker: "e-book · 2026",
    ebooksLede:
      "Notes written from inside the shift, while AI was changing how we work. Each can be read on the web or downloaded as EPUB.",
    readLabel: "Read",
    epubLabel: "EPUB",
    book: {
      title: "Beyond Code: The Developer Who Lasts Longer Than the Company",
      press: "Hanbit Media",
      date: "Published 30 June 2025",
      href: "https://www.yes24.com/product/goods/148184184",
      image: "/images/projects/beyond-code.jpg",
      alt: "A clothbound book and a fountain pen on cream paper.",
      body: "The book shows how soft skills, engineering culture, and personal branding help a developer stay competitive over a whole career. It looks past technical expertise to the value of going “beyond code,” with practical advice for becoming someone who outlasts any one company.",
    },
    ebookSeries: [
      {
        heading: "Beyond Code series",
        books: [
          {
            title: "Beyond the Code Era",
            subtitle: "How to last in a world AI has rewritten",
            href: EBOOKS.era.href,
            epub: EBOOKS.era.epub,
          },
          {
            title: "Beyond the Code Jobs",
            subtitle: "People who work on GPUs",
            href: EBOOKS.jobs.href,
            epub: EBOOKS.jobs.epub,
          },
          {
            title: "Beyond the Code Organization",
            subtitle: "How to rebuild work and teams in the AX era",
            href: EBOOKS.org.href,
            epub: EBOOKS.org.epub,
          },
          {
            title: "Beyond the Code Series",
            subtitle: "Three books, one grain",
            href: EBOOKS.summary.href,
            epub: EBOOKS.summary.epub,
          },
        ],
      },
      {
        heading: "AX in practice",
        books: [
          {
            title: "Building AX",
            subtitle: "Six months of rewriting how we work, in code",
            href: EBOOKS.ax.href,
            epub: EBOOKS.ax.epub,
          },
          {
            title: "I Know This Game",
            subtitle: "How to measure your own AX maturity",
            href: EBOOKS.maturity.href,
            epub: EBOOKS.maturity.epub,
            note: "Fifteen minutes, no login — see what stage your organization is at.",
            extras: [
              { label: "30-question check", href: EBOOKS.maturity.check },
              { label: "Slides", href: EBOOKS.maturity.slides },
            ],
          },
        ],
      },
      {
        heading: "Hands-on",
        books: [
          {
            title: "Ontology in Practice",
            subtitle: "Building a knowledge-graph system with Neo4j and AI",
            href: EBOOKS.ontology.href,
            epub: EBOOKS.ontology.epub,
          },
          {
            title: "Your First Website, Step by Step",
            subtitle: "A Claude AI workshop for non-developers",
            href: EBOOKS.website.href,
            epub: EBOOKS.website.epub,
          },
          {
            title: "Claude for People Who Get Things Done",
            subtitle: "How AI changes the way you work",
            href: EBOOKS.claude.href,
            epub: EBOOKS.claude.epub,
          },
        ],
      },
    ],
    press: [
      {
        outlet: "CIO Korea",
        date: "31 July 2025",
        title: "Coding isn’t enough: six veterans on lasting as a developer",
        href: "https://www.cio.com/article/4031881/%EC%BD%94%EB%94%A9%EB%A7%8C-%EC%9E%98%ED%95%98%EB%A9%B4-%EB%81%9D-%EC%97%85%EA%B3%84-%EB%B2%A0%ED%85%8C%EB%9E%91-6%EC%9D%B8%EC%9D%B4-%EB%A7%90%ED%95%98%EB%8A%94-%EC%98%A4%EB%9E%98-%EB%82%A8.html",
      },
      {
        outlet: "SK Telecom Newsroom",
        date: "16 July 2025",
        title: "On the ground at the 8th DEVOCEAN Tech Day — AI infrastructure and data centers",
        href: "https://news.sktelecom.com/213870",
      },
      {
        outlet: "SK Telecom Newsroom",
        date: "13 August 2024",
        title: "Growth stories from 102 DEVOCEAN developers: an AI study",
        href: "https://news.sktelecom.com/206285",
      },
      {
        outlet: "AI Times",
        date: "9 August 2024",
        title: "SKT hosts DEVOCEAN Tech Day, sharing 100 developers’ AI growth",
        href: "https://www.aitimes.kr/news/articleView.html?idxno=31923",
      },
      {
        outlet: "SK Telecom Newsroom",
        date: "14 June 2024",
        title: "DEVOCEAN at three years: a place to share and grow",
        href: "https://news.sktelecom.com/204774",
      },
      {
        outlet: "The Electronic Times",
        date: "1 April 2024",
        title: "SK Telecom launches DEVOCEAN OpenLab to build an AI development culture",
        href: "https://www.etnews.com/20240401000016",
      },
      {
        outlet: "News1",
        date: "1 April 2024",
        title: "SKT launches DEVOCEAN OpenLab as a place for collective AI intelligence",
        href: "https://www.news1.kr/it-science/cc-newmedia/5369240",
      },
      {
        outlet: "Munhwa Ilbo",
        date: "3 December 2023",
        title: "SKT DevChat: questions on credentials, balance, and working with developers",
        href: "https://www.munhwa.com/article/11399225",
      },
      {
        outlet: "yozm IT",
        date: "23 November 2023",
        title: "The day in-house DevRel comes together",
        href: "https://yozm.wishket.com/magazine/detail/2332/",
      },
      {
        outlet: "Newspim",
        date: "27 April 2022",
        title: "SK holds the first DEVOCEAN Tech Day",
        href: "https://www.newspim.com/news/view/20220427000136",
      },
      {
        outlet: "SK Careers Journal",
        date: "28 March 2022",
        title: "DEVOCEAN as navigation for job seekers",
        href: "https://www.skcareersjournal.com/2512",
      },
      {
        outlet: "SK Telecom Newsroom",
        date: "14 June 2021",
        title: "SK launches the DEVOCEAN developer community",
        href: "https://news.sktelecom.com/132273",
      },
    ],
    platforms: [
      {
        name: "DEVOCEAN Blog",
        detail: "Technical writing and DevRel essays on SK’s developer-community platform",
        href: "https://devocean.sk.com/",
      },
      {
        name: "LinkedIn",
        detail: "Where recent writing and notes go up first.",
        href: "https://www.linkedin.com/in/ksangki",
      },
    ],
  },
  contact: {
    heading: "Contact",
    kicker: "LinkedIn · GitHub · PDF",
    lede: "Write as you would a letter. Talks, collaboration, and press all get a reply.",
    note: "There is no public inbox. Start here or on LinkedIn. A longer profile is available as a PDF.",
    workLabel: "Role",
    profileLabel: "Profile",
    pdfLabel: "Download PDF",
    pdfName: "김상기_Sangki_Kim_프로페셔널_프로필_종합_리서치.pdf",
    toLabel: "To",
    fromLabel: "From",
    replyLabel: "Reply-to",
    subjectLabel: "Subject",
    bodyLabel: "Letter",
    namePlaceholder: "Your name",
    messagePlaceholder: "Dates, context, and what you’d like to do together.",
    send: "Send the letter",
    sending: "Sending…",
    sentKicker: "Arrived",
    sentTitle: "Received. It’s on the desk.",
    sentBody: "I’ll reply within a few days on LinkedIn or the email you left.",
    writeAnother: "Write another",
    inquiryAria: "Inquiry type",
    inquiryKinds: ["Collaboration", "Talk", "Press", "Other"],
    errors: {
      name: "Please add your name.",
      email: "Please check the email address.",
      message: "A little more detail, please.",
      send: "Could not send. Try again in a moment, or reach out on LinkedIn.",
    },
  },
  footer: {
    typeCredit: "Set in Instrument Serif and Figtree.",
    pdf: "Profile PDF",
  },
};

export const COPY: Record<Locale, Copy> = { ko, en };
