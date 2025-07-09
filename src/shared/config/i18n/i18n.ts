import { createI18n } from 'vue-i18n';
import en from '@/widgets/Footer/i18n/en';
import ru from '@/widgets/Footer/i18n/ru';

const messages = {
  en,
  ru
};

const i18n = createI18n({
  locale: 'ru',
  fallbackLocale: 'en',
  messages,
  legacy: false,
})

export type TMessages = keyof typeof messages;
export default i18n;
