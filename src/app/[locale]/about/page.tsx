import { useTranslations } from 'next-intl';

export default function AboutPage() {
  const t = useTranslations('AboutPage');

  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4 text-primary">
        {t('title')}
      </h1>
      <p className="text-lg text-neutral-700 leading-relaxed max-w-3xl">
        {t('description')}
      </p>
    </div>
  );
}