# دليل النشر

هذا الدليل يشرح كيفية نشر موقعك على منصات مختلفة.

## 🚀 النشر على Vercel (موصى به)

Vercel هي المنصة المثالية لنشر تطبيقات Next.js.

### الخطوات:

1. **إنشاء حساب على Vercel**
   - اذهب إلى [vercel.com](https://vercel.com)
   - سجل دخول باستخدام GitHub

2. **رفع المشروع إلى GitHub**
   \`\`\`bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/username/portfolio.git
   git push -u origin main
   \`\`\`

3. **ربط المستودع مع Vercel**
   - اضغط "New Project"
   - اختر المستودع من GitHub
   - اضغط "Import"

4. **إعدادات النشر**
   - Framework Preset: Next.js
   - Build Command: `npm run build`
   - Output Directory: `.next`
   - Install Command: `npm install`

5. **النشر**
   - اضغط "Deploy"
   - انتظر حتى ينتهي النشر (2-3 دقائق)
   - احصل على رابط الموقع: `https://your-project.vercel.app`

### المميزات:
- ✅ نشر تلقائي عند كل push
- ✅ معاينة للفروع
- ✅ SSL مجاني
- ✅ CDN عالمي
- ✅ تحليلات مجانية

---

## 🌐 النشر على Netlify

### الخطوات:

1. **إنشاء حساب على Netlify**
   - اذهب إلى [netlify.com](https://netlify.com)
   - سجل دخول باستخدام GitHub

2. **رفع المشروع**
   - اضغط "Add new site"
   - اختر "Import an existing project"
   - اختر المستودع من GitHub

3. **إعدادات البناء**
   \`\`\`
   Build command: npm run build
   Publish directory: .next
   \`\`\`

4. **النشر**
   - اضغط "Deploy site"
   - احصل على رابط: `https://your-site.netlify.app`

---

## 📦 النشر على GitHub Pages

### الخطوات:

1. **تثبيت gh-pages**
   \`\`\`bash
   npm install --save-dev gh-pages
   \`\`\`

2. **تحديث package.json**
   \`\`\`json
   {
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d out"
     }
   }
   \`\`\`

3. **تحديث next.config.ts**
   \`\`\`typescript
   const nextConfig = {
     output: 'export',
     basePath: '/repository-name',
     images: {
       unoptimized: true,
     },
   };
   \`\`\`

4. **النشر**
   \`\`\`bash
   npm run deploy
   \`\`\`

5. **تفعيل GitHub Pages**
   - اذهب إلى Settings > Pages
   - اختر branch: gh-pages
   - احفظ

**الرابط:** `https://username.github.io/repository-name`

---

## ☁️ النشر على AWS Amplify

### الخطوات:

1. **إنشاء حساب AWS**
   - اذهب إلى [aws.amazon.com](https://aws.amazon.com)

2. **فتح AWS Amplify**
   - ابحث عن "Amplify" في AWS Console

3. **إنشاء تطبيق جديد**
   - اختر "Host web app"
   - اربط مع GitHub
   - اختر المستودع

4. **إعدادات البناء**
   \`\`\`yaml
   version: 1
   frontend:
     phases:
       preBuild:
         commands:
           - npm install
       build:
         commands:
           - npm run build
     artifacts:
       baseDirectory: .next
       files:
         - '**/*'
     cache:
       paths:
         - node_modules/**/*
   \`\`\`

5. **النشر**
   - احفظ وانشر
   - احصل على رابط AWS

---

## 🐳 النشر باستخدام Docker

### إنشاء Dockerfile

\`\`\`dockerfile
FROM node:18-alpine AS base

# Install dependencies
FROM base AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci

# Build
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# Production
FROM base AS runner
WORKDIR /app
ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs
EXPOSE 3000
ENV PORT 3000

CMD ["node", "server.js"]
\`\`\`

### بناء وتشغيل

\`\`\`bash
# بناء الصورة
docker build -t portfolio .

# تشغيل الحاوية
docker run -p 3000:3000 portfolio
\`\`\`

---

## 🔧 إعدادات إضافية

### متغيرات البيئة

إذا كنت تستخدم متغيرات بيئة، أضفها في:

**Vercel:**
- Settings > Environment Variables

**Netlify:**
- Site settings > Build & deploy > Environment

**مثال:**
\`\`\`
NEXT_PUBLIC_API_URL=https://api.example.com
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
\`\`\`

### النطاق المخصص

#### Vercel:
1. Settings > Domains
2. أضف نطاقك
3. حدث DNS records

#### Netlify:
1. Domain settings
2. Add custom domain
3. حدث DNS

---

## 📊 المراقبة والتحليلات

### Google Analytics

1. أنشئ حساب على [analytics.google.com](https://analytics.google.com)
2. احصل على Measurement ID
3. أضفه في `layout.tsx`:

\`\`\`typescript
import Script from 'next/script'

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  )
}
\`\`\`

### Vercel Analytics

\`\`\`bash
npm install @vercel/analytics
\`\`\`

\`\`\`typescript
import { Analytics } from '@vercel/analytics/react'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
\`\`\`

---

## ✅ قائمة التحقق قبل النشر

- [ ] تحديث جميع المعلومات الشخصية
- [ ] إضافة مشاريعك الحقيقية
- [ ] تحديث روابط التواصل الاجتماعي
- [ ] اختبار الموقع محلياً
- [ ] تشغيل `npm run build` بنجاح
- [ ] تشغيل `npm run lint` بدون أخطاء
- [ ] اختبار على أجهزة مختلفة
- [ ] إضافة favicon (اختياري)
- [ ] إعداد Google Analytics (اختياري)
- [ ] إعداد SEO meta tags (اختياري)

---

## 🆘 حل المشاكل

### خطأ في البناء
\`\`\`bash
npm run build
# راجع الأخطاء وصححها
\`\`\`

### الموقع لا يعمل بعد النشر
- تحقق من logs في لوحة التحكم
- تأكد من إعدادات البناء صحيحة
- تحقق من متغيرات البيئة

### الصور لا تظهر
- استخدم مسارات مطلقة: `/images/photo.jpg`
- أو استخدم مكون `next/image`

---

## 📚 موارد إضافية

- [توثيق Vercel](https://vercel.com/docs)
- [توثيق Netlify](https://docs.netlify.com)
- [توثيق Next.js Deployment](https://nextjs.org/docs/deployment)

---

**نصيحة:** ابدأ بـ Vercel لأنها الأسهل والأسرع لتطبيقات Next.js!

**حظاً موفقاً في النشر! 🚀**
