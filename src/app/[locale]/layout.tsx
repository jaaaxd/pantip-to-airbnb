import '@/styles/global.css';

import type { Metadata } from 'next';
import { NextIntlClientProvider, useMessages } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';

import { DemoBadge } from '@/components/DemoBadge';
import { AppConfig } from '@/utils/AppConfig';

export const metadata: Metadata = {
  title: 'Pantip',
  icons: [
    {
      rel: 'apple-touch-icon',
      url: '/ic-pri-cid.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      url: '/ic-pri-cid.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      url: '/ic-pri-cid.png',
    },
    {
      rel: 'icon',
      url: '/ic-pri-cid.png',
    },
  ],
};

export function generateStaticParams() {
  return AppConfig.locales.map(locale => ({ locale }));
}

export default function RootLayout(props: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  unstable_setRequestLocale(props.params.locale);

  // Using internationalization in Client Components
  const messages = useMessages();

  return (
    <html lang={props.params.locale}>
      <body>
        <NextIntlClientProvider
          locale={props.params.locale}
          messages={messages}
        >
          {props.children}

          <DemoBadge />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
