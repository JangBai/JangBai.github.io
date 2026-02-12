# JangBai Portfolio

🔗 Live: https://jangbai.github.io/

React + Vite 기반으로 제작한 웹 포트폴리오입니다.  
정적 배포 환경(GitHub Pages)을 기준으로 설계되었으며,  
실제 프로덕션과 유사한 빌드/배포 구조를 적용했습니다.

## 프로젝트 목표

이 프로젝트는 단순한 자기소개 페이지가 아니라,

- 유지보수를 고려한 폴더 구조 설계
- 코드 스타일 통일 (ESLint + Prettier)
- 프로덕션 배포 워크플로우 구성
- GitHub Pages 기반 정적 배포 환경 이해

를 목표로 제작되었습니다.

## Tech Stack

| Category   | Stack                |
| ---------- | -------------------- |
| Framework  | React                |
| Bundler    | Vite                 |
| Language   | TypeScript           |
| Lint       | ESLint (Flat Config) |
| Formatter  | Prettier             |
| Deployment | GitHub Pages         |

---

## Architecture Overview

- Vite 기반 정적 빌드 환경
- 컴포넌트 단위 분리
- 빌드 결과물(`dist`)과 소스 코드 분리
- `gh-pages` 브랜치를 통한 배포 자동화
