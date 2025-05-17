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
  'home.hero.subtitle': {
    en: 'Bringing stories to life through art and animation',
    kz: 'Өнер мен анимация арқылы оқиғаларға өмір беру',
    ru: 'Оживляем истории через искусство и анимацию'
  },
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
  'home.about.title': {
    en: 'About My Work',
    kz: 'Менің жұмысым туралы',
    ru: 'О моей работе'
  },
  'home.about.p1': {
    en: 'I am a passionate artist specializing in illustration, animation, and storyboarding. My work combines traditional techniques with modern digital tools to create unique and engaging visual stories.',
    kz: 'Мен иллюстрация, анимация және сториборд жасауға маманданған құштар суретшімін. Менің жұмысым дәстүрлі техникаларды заманауи сандық құралдармен біріктіріп, бірегей және тартымды визуалды әңгімелер жасайды.',
    ru: 'Я увлеченный художник, специализирующийся на иллюстрации, анимации и раскадровке. В моей работе сочетаются традиционные техники и современные цифровые инструменты для создания уникальных и увлекательных визуальных историй.'
  },
  'home.about.p2': {
    en: 'With a focus on storytelling and emotional expression, each piece is crafted to convey a narrative that resonates with the viewer. Explore my portfolio to see my latest works and creative journey.',
    kz: 'Әңгіме айту мен эмоционалды көрініске назар аудара отырып, әр туынды көрерменмен үйлесетін баяндауды жеткізу үшін жасалған. Соңғы жұмыстарым мен шығармашылық жолымды көру үшін менің портфолиомды шолыңыз.',
    ru: 'С акцентом на повествование и эмоциональное выражение, каждое произведение создано для передачи истории, которая находит отклик у зрителя. Изучите мое портфолио, чтобы увидеть мои последние работы и творческий путь.'
  },
  'home.about.learnMore': {
    en: 'Learn more about me',
    kz: 'Мен туралы көбірек білу',
    ru: 'Узнать больше обо мне'
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
  'about.subtitle': {
    en: 'Artist, illustrator and animator based in Almaty, Kazakhstan',
    kz: 'Қазақстан, Алматы қаласындағы суретші, иллюстратор және аниматор',
    ru: 'Художник, иллюстратор и аниматор, Алматы, Казахстан'
  },
  'about.intro.p1': {
    en: 'I am a passionate artist specializing in digital illustration, animation, and storyboarding with over 5 years of professional experience creating visual narratives for various clients and projects.',
    kz: 'Мен 5 жылдан астам тәжірибесі бар, әртүрлі клиенттер мен жобалар үшін визуалды баяндаулар жасайтын, цифрлық иллюстрация, анимация және сториборд жасауға маманданған құштар суретшімін.',
    ru: 'Я увлеченный художник, специализирующийся на цифровой иллюстрации, анимации и раскадровке, с более чем 5-летним профессиональным опытом создания визуальных повествований для различных клиентов и проектов.'
  },
  'about.intro.p2': {
    en: 'My work combines traditional artistic principles with modern digital techniques to create unique and engaging visual experiences. I am constantly exploring new styles and methods to push the boundaries of my craft.',
    kz: 'Менің жұмысым бірегей және тартымды визуалды тәжірибелер жасау үшін дәстүрлі көркемдік принциптерді заманауи сандық техникалармен біріктіреді. Мен өнерімнің шекараларын кеңейту үшін үнемі жаңа стильдер мен әдістерді зерттеп жатырмын.',
    ru: 'Моя работа сочетает традиционные художественные принципы с современными цифровыми методами для создания уникального и привлекательного визуального опыта. Я постоянно исследую новые стили и методы, чтобы расширять границы своего мастерства.'
  },
  'about.expertise.title': {
    en: 'Areas of Expertise',
    kz: 'Мамандану аймақтары',
    ru: 'Области специализации'
  },
  'about.expertise.illustration': {
    en: 'Digital Illustration',
    kz: 'Цифрлық иллюстрация',
    ru: 'Цифровая иллюстрация'
  },
  'about.expertise.illustration.desc': {
    en: 'Creating compelling visual imagery that tells a story or conveys an idea through digital mediums.',
    kz: 'Цифрлық құралдар арқылы оқиғаны баяндайтын немесе идеяны жеткізетін тартымды визуалды бейнелер жасау.',
    ru: 'Создание убедительных визуальных образов, которые рассказывают историю или передают идею через цифровые средства.'
  },
  'about.expertise.animation': {
    en: '2D Animation',
    kz: '2D анимация',
    ru: '2D анимация'
  },
  'about.expertise.animation.desc': {
    en: 'Bringing characters and scenes to life through motion, timing, and expressive movement.',
    kz: 'Қозғалыс, уақыт және мәнерлі қимылдар арқылы кейіпкерлер мен көріністерге өмір беру.',
    ru: 'Оживление персонажей и сцен через движение, тайминг и выразительные движения.'
  },
  'about.expertise.storyboard': {
    en: 'Storyboarding',
    kz: 'Сториборд',
    ru: 'Раскадровка'
  },
  'about.expertise.storyboard.desc': {
    en: 'Developing visual sequences to pre-visualize animations, films, and interactive media.',
    kz: 'Анимацияларды, фильмдерді және интерактивті медианы алдын-ала визуализациялау үшін визуалды тізбектер жасау.',
    ru: 'Разработка визуальных последовательностей для предварительной визуализации анимации, фильмов и интерактивных медиа.'
  },
  'about.expertise.character': {
    en: 'Character Design',
    kz: 'Кейіпкерлерді жасау',
    ru: 'Дизайн персонажей'
  },
  'about.expertise.character.desc': {
    en: 'Creating memorable and distinctive characters with personality and visual appeal.',
    kz: 'Жеке тұлғасы мен визуалды тартымдылығы бар есте қаларлық және ерекше кейіпкерлер жасау.',
    ru: 'Создание запоминающихся и характерных персонажей с индивидуальностью и визуальной привлекательностью.'
  },
  'about.expertise.visual': {
    en: 'Visual Development',
    kz: 'Визуалды даму',
    ru: 'Визуальная разработка'
  },
  'about.expertise.visual.desc': {
    en: 'Establishing the visual style, color palettes, and overall aesthetic direction for projects.',
    kz: 'Жобалар үшін визуалды стильді, түс палитрасын және жалпы эстетикалық бағытты орнату.',
    ru: 'Установление визуального стиля, цветовых палитр и общего эстетического направления для проектов.'
  },
  'about.connect.title': {
    en: 'Let\'s Connect',
    kz: 'Байланысайық',
    ru: 'Давайте свяжемся'
  },
  'about.connect.text': {
    en: 'I\'m always interested in new projects and collaborations. Feel free to reach out through any of the social media links below, or send me an email directly.',
    kz: 'Мен әрқашан жаңа жобалар мен ынтымақтастықтарға қызығушылық танытамын. Төмендегі әлеуметтік желілердің сілтемелері арқылы байланысуға немесе тікелей электрондық пошта жіберуге еркін сезініңіз.',
    ru: 'Я всегда интересуюсь новыми проектами и сотрудничеством. Не стесняйтесь связаться со мной через любую из приведенных ниже ссылок на социальные сети или отправить мне электронное письмо напрямую.'
  },
  'about.quote': {
    en: 'Art is not what you see, but what you make others see.',
    kz: 'Өнер - бұл сіз көретін нәрсе емес, басқаларға көрсететін нәрсе.',
    ru: 'Искусство - это не то, что вы видите, а то, что вы позволяете увидеть другим.'
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
    kz: 'Қазіргі уақытта бұл санатта өнер туындылары жоқ.',
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
