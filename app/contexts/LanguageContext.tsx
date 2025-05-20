"use client";
import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';

export type Language = 'kz' | 'en' | 'ru';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string, fallback?: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const translations: Record<string, Record<Language, string>> = {
  // Navigation
  'nav.about': {
    en: 'About Me',
    kz: 'Мен туралы',
    ru: 'Обо мне'
  },
  'nav.illustration': {
    en: 'Illustration',
    kz: 'Иллюстрация',
    ru: 'Иллюстрация'
  },
  'nav.animation': {
    en: 'Animation',
    kz: 'Анимация',
    ru: 'Анимация'
  },
  'nav.storyboard': {
    en: 'Storyboard',
    kz: 'Сториборд',
    ru: 'Раскадровка'
  },
  
  // Homepage
  'home.cta.gallery': {
    en: 'View Gallery',
    kz: 'Галереяны көру',
    ru: 'Смотреть галерею'
  },
  'home.cta.about': {
    en: 'About Me',
    kz: 'Мен туралы',
    ru: 'Обо мне'
  },
  'home.explore.title': {
    en: 'Explore My Work',
    kz: 'Менің жұмыстарымды шолу',
    ru: 'Изучите мои работы'
  },
  'home.category.illustration': {
    en: 'Illustration',
    kz: 'Иллюстрация',
    ru: 'Иллюстрация'
  },
  'home.category.illustration.desc': {
    en: 'Explore my illustration work across various styles and techniques.',
    kz: 'Әр түрлі стильдер мен техникалардағы иллюстрация жұмыстарымды шолыңыз.',
    ru: 'Изучите мои иллюстрации в различных стилях и техниках.'
  },
  'home.category.animation': {
    en: 'Animation',
    kz: 'Анимация',
    ru: 'Анимация'
  },
  'home.category.animation.desc': {
    en: 'Discover animated stories and characters brought to life.',
    kz: 'Анимациялық оқиғалар мен кейіпкерлердің тіршілігін ашыңыз.',
    ru: 'Откройте для себя анимированные истории и персонажей, воплощенных в жизнь.'
  },
  'home.category.storyboard': {
    en: 'Storyboard',
    kz: 'Сториборд',
    ru: 'Раскадровка'
  },
  'home.category.storyboard.desc': {
    en: 'See how visual narratives are planned and developed.',
    kz: 'Визуалды баяндаулардың қалай жоспарланып, дамытылатынын көріңіз.',
    ru: 'Посмотрите, как планируются и разрабатываются визуальные повествования.'
  },
  'home.about.p1': {
    en: 'My name is Ayanat Zhiyengali, I am  aspiring to become an artist/animator with a particular interest in 2D.',
    kz: 'Менің атым – Жиенғали Аянат. Sham шығармашылық мектебінде оқып, 2D саласына қызығатын болашақ суретші/аниматормын.',
    ru: 'Меня зовут Жиенгали Аянат. Я – ученица творческой школы Sham, стремящаяся стать 2D аниматором.'
  },

  // Artwork details
  'artwork.additionalInfo': {
    en: 'Additional Information',
    kz: 'Қосымша ақпарат',
    ru: 'Дополнительная информация'
  },
  'artwork.date': {
    en: 'Date',
    kz: 'Күні',
    ru: 'Дата'
  },
  'artwork.media': {
    en: 'Media',
    kz: 'Медиа',
    ru: 'Медиа'
  },
  'artwork.category': {
    en: 'Category',
    kz: 'Санат',
    ru: 'Категория'
  },
  'artwork.viewAll': {
    en: 'View all',
    kz: 'Барлығын көру',
    ru: 'Смотреть все'
  },
  'artwork.backTo': {
    en: 'Back to',
    kz: 'Қайту',
    ru: 'Вернуться к'
  },
  'artwork.notFound': {
    en: 'Artwork not found',
    kz: 'Өнер туындысы табылмады',
    ru: 'Работа не найдена'
  },
  'artwork.notFoundDesc': {
    en: 'The artwork you\'re looking for does not exist or has been removed.',
    kz: 'Іздеген өнер туындысы жоқ немесе жойылған.',
    ru: 'Работа, которую вы ищете, не существует или была удалена.'
  },
  'artwork.goBack': {
    en: 'Go back to gallery',
    kz: 'Галереяға оралу',
    ru: 'Вернуться в галерею'
  },
  'artwork.loading': {
    en: 'Loading artworks...',
    kz: 'Өнер туындылары жүктелуде...',
    ru: 'Загрузка работ...'
  },
  'artwork.viewDetails': {
    en: 'View details',
    kz: 'Толық қарау',
    ru: 'Подробнее'
  },
  'artwork.watchVideo': {
    en: 'Watch Video',
    kz: 'Видеоны көру',
    ru: 'Смотреть видео'
  },
  'admin.form.category': {
    en: 'Category',
    kz: 'Санат',
    ru: 'Категория'
  },
  'admin.form.date': {
    en: 'Date',
    kz: 'Күні',
    ru: 'Дата'
  },
  'admin.form.media': {
    en: 'Media',
    kz: 'Медиа',
    ru: 'Медиа'
  },
  'admin.form.videoUrl': {
    en: 'Google Drive Video URL',
    kz: 'Google Drive видео URL',
    ru: 'URL видео на Google Drive'
  },
  'admin.form.description': {
    en: 'Description',
    kz: 'Сипаттама',
    ru: 'Описание'
  },
  'admin.form.additionalInfo': {
    en: 'Additional Information',
    kz: 'Қосымша ақпарат',
    ru: 'Дополнительная информация'
  },
  'admin.form.image': {
    en: 'Image',
    kz: 'Сурет',
    ru: 'Изображение'
  },
  'admin.form.changeImage': {
    en: 'Change Image',
    kz: 'Суретті өзгерту',
    ru: 'Изменить изображение'
  },
  'admin.form.cancel': {
    en: 'Cancel',
    kz: 'Болдырмау',
    ru: 'Отмена'
  },
  'admin.form.add': {
    en: 'Add Artwork',
    kz: 'Өнер туындысын қосу',
    ru: 'Добавить работу'
  },
  'admin.form.update': {
    en: 'Update Artwork',
    kz: 'Өнер туындысын жаңарту',
    ru: 'Обновить работу'
  },
  'admin.form.uploading': {
    en: 'Uploading...',
    kz: 'Жүктелуде...',
    ru: 'Загрузка...'
  },

  // About page
  'about.title': {
    en: 'About Me',
    kz: 'Мен туралы',
    ru: 'Обо мне'
  },
  
  // Gallery page
  'gallery.title': {
    en: 'Gallery',
    kz: 'Галерея',
    ru: 'Галерея'
  },
  'gallery.subtitle': {
    en: 'Browse through my complete collection of artwork across all categories.',
    kz: 'Барлық санаттағы өнер туындыларымның толық жинағын шолыңыз.',
    ru: 'Просмотрите мою полную коллекцию работ по всем категориям.'
  },
  'gallery.loading': {
    en: 'Loading artworks...',
    kz: 'Өнер туындылары жүктелуде...',
    ru: 'Загрузка работ...'
  },
  'gallery.error': {
    en: 'Please try again later.',
    kz: 'Кейінірек қайталап көріңіз.',
    ru: 'Пожалуйста, повторите попытку позже.'
  },
  'gallery.filter.all': {
    en: 'All',
    kz: 'Барлығы',
    ru: 'Все'
  },
  'gallery.view': {
    en: 'View:',
    kz: 'Көрініс:',
    ru: 'Вид:'
  },
  'gallery.noArtworks': {
    en: 'No artworks found',
    kz: 'Өнер туындылары табылмады',
    ru: 'Работы не найдены'
  },
  'gallery.noArtworksDesc': {
    en: 'There are currently no artworks in this category.',
    kz: 'Қазіргі уақытта бұл категорияда өнер туындылары жоқ.',
    ru: 'В настоящее время в этой категории нет работ.'
  },
  'gallery.fetchError': {
    en: 'Failed to fetch artworks',
    kz: 'Өнер туындыларын жүктеу сәтсіз аяқталды',
    ru: 'Не удалось загрузить работы'
  },
  'gallery.unknownError': {
    en: 'An unknown error occurred',
    kz: 'Белгісіз қате орын алды',
    ru: 'Произошла неизвестная ошибка'
  },
  'gallery.category.animation': {
    en: 'Animation',
    kz: 'Анимация',
    ru: 'Анимация'
  },
  'gallery.category.illustration': {
    en: 'Illustration',
    kz: 'Иллюстрация',
    ru: 'Иллюстрация'
  },
  'gallery.category.storyboard': {
    en: 'Storyboard',
    kz: 'Сториборд',
    ru: 'Раскадровка'
  }
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>('en');

  useEffect(() => {
    // Try to get language from localStorage
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && ['en', 'kz', 'ru'].includes(savedLanguage)) {
      setLanguageState(savedLanguage);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key: string, fallback?: string): string => {
    if (translations[key] && translations[key][language]) {
      return translations[key][language];
    }
    // If translation is missing, fall back to English version
    if (translations[key] && translations[key]['en']) {
      return translations[key]['en'];
    }
    return fallback || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
