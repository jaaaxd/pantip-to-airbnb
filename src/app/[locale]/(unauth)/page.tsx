import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';

import { Navbar } from '@/components/Navbar';
import { Search } from '@/components/Search';
import { Topic } from '@/components/Topics';

export async function generateMetadata(props: { params: { locale: string } }) {
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: 'Index',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

export default function Index(props: { params: { locale: string } }) {
  unstable_setRequestLocale(props.params.locale);

  return (
    <div className="flex flex-col items-center px-14 pb-14">
      <Navbar />
      <Search />
      <Topic />
    </div>
  );
}
