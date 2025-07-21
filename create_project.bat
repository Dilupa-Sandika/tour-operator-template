@echo off
echo Creating project structure for Tour Operator Template...

:: Root directory files
type nul > .env.example
type nul > next.config.js
type nul > package.json
type nul > README.md
type nul > tailwind.config.ts
type nul > tsconfig.json

:: Public directory
mkdir public
mkdir public\icons
mkdir public\screenshots
type nul > public\manifest.json

:: Sanity Studio directory
mkdir sanity-studio

:: Main Source directory
mkdir src
mkdir src\app
mkdir src\app\[locale]
type nul > src\app\[locale]\layout.tsx
type nul > src\app\[locale]\page.tsx
mkdir src\app\api
type nul > src\app\globals.css

:: Components directory
mkdir src\components
mkdir src\components\ai
type nul > src\components\ai\AIPlanner.tsx
mkdir src\components\home
type nul > src\components\home\HeroSection.tsx
type nul > src\components\home\FeaturedTours.tsx
type nul > src\components\home\WhyChooseUs.tsx
type nul > src\components\home\Testimonials.tsx
mkdir src\components\interactive
type nul > src\components\interactive\WeatherWidget.tsx
type nul > src\components\interactive\SocialProofWidget.tsx
type nul > src\components\interactive\WhatsAppChat.tsx
mkdir src\components\layout
type nul > src\components\layout\Header.tsx
type nul > src\components\layout\Footer.tsx
type nul > src\components\layout\MobileMenu.tsx
type nul > src\components\layout\LanguageSwitcher.tsx
mkdir src\components\legal
type nul > src\components\legal\CookieConsent.tsx
mkdir src\components\ui

:: Data directory
mkdir src\data
mkdir src\data\translations
type nul > src\data\translations\en.json
type nul > src\data\translations\de.json
type nul > src\data\translations\es.json

:: Lib directory
mkdir src\lib
mkdir src\lib\ai
type nul > src\lib\ai\openai.ts
mkdir src\lib\sanity
type nul > src\lib\sanity\client.ts
type nul > src\lib\sanity\queries.ts
mkdir src\lib\sanity\schemas
type nul > src\lib\sanity\schemas\tour.ts
type nul > src\lib\sanity\schemas\blogPost.ts
type nul > src\lib\sanity\schemas\testimonial.ts
type nul > src\lib\sanity\schemas\siteSettings.ts
mkdir src\lib\utils
type nul > src\lib\utils\cn.ts

:: Types directory
mkdir src\types
type nul > src\types\index.ts

echo Project structure created successfully!
pause