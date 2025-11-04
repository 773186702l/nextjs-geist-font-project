# دليل التخصيص

هذا الدليل يساعدك على تخصيص الموقع ليناسب احتياجاتك الشخصية.

## 1. تغيير المعلومات الشخصية

### تحديث العنوان والوصف

افتح `src/app/layout.tsx` وعدل:

\`\`\`typescript
export const metadata: Metadata = {
  title: 'اسمك - مطور برمجيات',
  description: 'وصف مختصر عنك',
};
\`\`\`

### تحديث النص الترحيبي

افتح `src/components/Hero.tsx` وعدل:

\`\`\`typescript
<h1>مرحباً، أنا [اسمك]</h1>
<p>وصف مختصر عن تخصصك</p>
\`\`\`

### تحديث الإحصائيات

في نفس الملف `Hero.tsx`، عدل الأرقام:

\`\`\`typescript
<div className="text-4xl font-bold">15+</div>
<div className="text-sm">مشروع منجز</div>
\`\`\`

## 2. إضافة وتعديل المشاريع

### إضافة مشروع جديد

افتح `src/data/projects.ts`:

\`\`\`typescript
{
  id: 7, // رقم تسلسلي جديد
  title: 'نظام إدارة المستشفيات',
  description: 'نظام متكامل لإدارة المستشفيات والعيادات',
  category: 'أنظمة', // أو 'برامج'
  technologies: ['React', 'Node.js', 'PostgreSQL'],
  githubUrl: 'https://github.com/username/project',
  liveUrl: 'https://demo.example.com', // اختياري
}
\`\`\`

### حذف مشروع

احذف المشروع من المصفوفة في `projects.ts`

### تعديل التصنيفات

يمكنك إضافة تصنيفات جديدة بتعديل نوع `category` في `projects.ts`:

\`\`\`typescript
category: 'برامج' | 'أنظمة' | 'تطبيقات موبايل' | 'مواقع ويب';
\`\`\`

## 3. تعديل المهارات

### إضافة مهارة جديدة

افتح `src/data/skills.ts`:

\`\`\`typescript
{ name: 'Flutter', category: 'frontend', level: 75 }
\`\`\`

### إضافة فئة جديدة

1. أضف الفئة في نوع `Skill`:
\`\`\`typescript
category: 'frontend' | 'backend' | 'database' | 'tools' | 'mobile';
\`\`\`

2. أضف الترجمة في `skillCategories`:
\`\`\`typescript
export const skillCategories = {
  // ...
  mobile: 'تطوير تطبيقات الموبايل',
};
\`\`\`

## 4. تحديث معلومات التواصل

افتح `src/components/Contact.tsx` وعدل:

\`\`\`typescript
<a href="mailto:your@email.com">your@email.com</a>
<a href="https://linkedin.com/in/yourprofile">linkedin.com/in/yourprofile</a>
<a href="https://github.com/yourusername">github.com/yourusername</a>
\`\`\`

### تفعيل إرسال النماذج الحقيقي

استخدم خدمة مثل [Formspree](https://formspree.io/):

\`\`\`typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  
  const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
  });
  
  if (response.ok) {
    alert('تم إرسال الرسالة بنجاح!');
  }
};
\`\`\`

## 5. تخصيص الألوان

### تغيير الألوان الرئيسية

افتح `src/app/globals.css` وعدل المتغيرات:

\`\`\`css
:root {
  --primary: oklch(0.205 0 0); /* اللون الأساسي */
  --secondary: oklch(0.97 0 0); /* اللون الثانوي */
  /* ... */
}
\`\`\`

### استخدام ألوان مخصصة

يمكنك استخدام [oklch.com](https://oklch.com/) لاختيار الألوان.

## 6. إضافة أقسام جديدة

### مثال: إضافة قسم الشهادات

1. أنشئ ملف `src/components/Certificates.tsx`:

\`\`\`typescript
export default function Certificates() {
  return (
    <section id="certificates" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center">الشهادات</h2>
        {/* محتوى القسم */}
      </div>
    </section>
  );
}
\`\`\`

2. أضفه في `src/app/page.tsx`:

\`\`\`typescript
import Certificates from '@/components/Certificates';

export default function Home() {
  return (
    <main>
      {/* ... */}
      <Certificates />
      {/* ... */}
    </main>
  );
}
\`\`\`

## 7. تخصيص شريط التنقل

افتح `src/components/Navbar.tsx`:

### إضافة رابط جديد

\`\`\`typescript
<button onClick={() => scrollToSection('certificates')}>
  الشهادات
</button>
\`\`\`

### تغيير اسم الموقع

\`\`\`typescript
<div className="text-xl font-bold">اسمك</div>
\`\`\`

## 8. إضافة صور للمشاريع

1. ضع الصور في مجلد `public/projects/`
2. في `projects.ts`:

\`\`\`typescript
{
  // ...
  image: '/projects/project-name.png',
}
\`\`\`

3. في `ProjectCard.tsx`، أضف:

\`\`\`typescript
{project.image && (
  <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
)}
\`\`\`

## 9. تفعيل Google Analytics

1. أنشئ حساب على [Google Analytics](https://analytics.google.com/)
2. احصل على معرف التتبع (G-XXXXXXXXXX)
3. أضف في `src/app/layout.tsx`:

\`\`\`typescript
<Script src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX" />
<Script id="google-analytics">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
  `}
</Script>
\`\`\`

## 10. إضافة مدونة

يمكنك استخدام [MDX](https://nextjs.org/docs/app/building-your-application/configuring/mdx) لإضافة مدونة:

\`\`\`bash
npm install @next/mdx @mdx-js/loader @mdx-js/react
\`\`\`

## نصائح إضافية

- **الصور**: استخدم [Unsplash](https://unsplash.com/) للصور المجانية
- **الأيقونات**: يمكنك استخدام Emoji أو [Heroicons](https://heroicons.com/)
- **الخطوط**: أضف خطوط Google Fonts في `layout.tsx`
- **SEO**: أضف ملف `robots.txt` و `sitemap.xml`

## الدعم

إذا احتجت مساعدة إضافية، راجع:
- [توثيق Next.js](https://nextjs.org/docs)
- [توثيق Tailwind CSS](https://tailwindcss.com/docs)
- [توثيق shadcn/ui](https://ui.shadcn.com/)
