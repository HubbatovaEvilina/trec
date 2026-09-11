# daily — Life Tracker OS

Полная React + TypeScript + Vite PWA-сборка персонального трекера.

## Запуск

```bash
npm install
npm run dev
```

Для production:

```bash
npm run build
npm run preview
```

## Что реализовано

- React 18 + TypeScript + Vite
- Tailwind CSS + iOS-style custom CSS
- IndexedDB через Dexie, offline-first
- Habit CRUD с сохранением истории
- daily / X раз в неделю / конкретные дни
- streak для дневных и плавающих недельных привычек
- книги, статусы, страницы и reading sessions
- встроенный reading timer
- расходы, категории, месячный/недельный бюджет
- графики Recharts
- журнал тренировок
- цели
- аналитика
- dark True Black / light
- iOS Blue / Mint / Purple / Sunset
- safe-area bottom tab bar
- Web App manifest
- Service Worker cache-first
- haptic feedback через navigator.vibrate
- редактирование записей задним числом

## Важно для iOS

Safari может ограничивать `navigator.vibrate`; в таком случае интерфейс работает без виброотклика. Для наиболее стабильной PWA-установки приложение нужно отдавать по HTTPS.

## Архитектура

`src/types.ts` — модели данных  
`src/db.ts` — IndexedDB/Dexie  
`src/services.ts` — streak и habit logic  
`src/components.tsx` — экраны и CRUD UI  
`src/App.tsx` — shell, navigation, settings  
`public/sw.js` — Service Worker  
`public/manifest.webmanifest` — PWA manifest
