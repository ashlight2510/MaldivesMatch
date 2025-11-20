# 카카오톡 공유 썸네일 이미지 생성 가이드

## 현재 상태
- ✅ Open Graph 메타 태그 추가 완료
- ✅ SVG 썸네일 이미지 생성 완료 (`public/og-image.svg`)

## 카카오톡 썸네일이 안 나올 경우

카카오톡은 PNG/JPG 이미지를 더 잘 인식합니다. SVG가 작동하지 않으면 다음 방법을 사용하세요:

### 방법 1: 온라인 SVG → PNG 변환기 사용
1. https://svgtopng.com/ 또는 https://convertio.co/kr/svg-png/ 접속
2. `public/og-image.svg` 파일 업로드
3. 크기: 1200x630px로 설정
4. PNG로 변환 후 `public/og-image.png`로 저장
5. `app/layout.tsx`에서 이미지 경로를 `.svg` → `.png`로 변경

### 방법 2: 카카오톡 링크 미리보기 도구 사용
1. https://developers.kakao.com/tool/clear/og 접속
2. URL 입력: `https://maldives.emojicon.site/MaldivesMatch`
3. "캐시 삭제" 클릭
4. 다시 공유해보기

### 방법 3: 직접 PNG 이미지 만들기
- 크기: 1200x630px
- 내용: "🏝️ 몰디브 매치" 타이틀과 설명
- 배경: 몰디브 블루 그라데이션
- 저장 위치: `public/og-image.png`

## 메타 태그 확인
브라우저에서 페이지 소스 보기로 다음 태그들이 있는지 확인:
```html
<meta property="og:image" content="https://maldives.emojicon.site/MaldivesMatch/og-image.svg">
<meta property="og:title" content="몰디브 매치 - 나의 몰디브 성향 찾기">
<meta property="og:description" content="18개의 전문 질문으로...">
```

