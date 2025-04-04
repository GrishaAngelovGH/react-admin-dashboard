import polyglotI18nProvider from "ra-i18n-polyglot"
import en from "ra-language-english"
import bg from "ra-language-bulgarian"
import { TranslationMessages } from "react-admin"

// extend the TranslationMessages type to include 
// the resources property for custom translations
interface CustomTranslationMessages extends TranslationMessages {
  ra: TranslationMessages["ra"] & {
    resources?: {
      [key: string]: {
        name: string
      }
    }
  }
}

const customEn: CustomTranslationMessages = {
  ...en,
  ra: {
    ...en.ra,
    resources: {
      posts: {
        name: "Posts",
      },
      users: {
        name: "Users"
      },
      comments: {
        name: "Comments"
      },
      images: {
        name: "Images"
      },
      activityLogs: {
        name: "Activity Logs"
      }
    }
  },
  custom: {
    homePage: {
      title: "Welcome to the React Admin Dashboard",
      description: "Manage your posts and users effortlessly with the tools provided. Navigate through the menu to get started."
    },
    imageCategories: {
      animals: "Animals",
      avatars: "Avatars",
      business: "Business",
      cars: "Cars",
      city: "City",
      flowers: "Flowers",
      food: "Food",
      nature: "Nature",
      sports: "Sports"
    }
  }
}

const customBg: CustomTranslationMessages = {
  ...bg,
  ra: {
    ...bg.ra,
    resources: {
      posts: {
        name: "Постове"
      },
      users: {
        name: "Потребители"
      },
      comments: {
        name: "Коментари"
      },
      images: {
        name: "Изображения"
      },
      activityLogs: {
        name: "Регистър на активности"
      }
    }
  },
  custom: {
    homePage: {
      title: "Добре дошли в системата React Admin Dashboard",
      description: "Управлявайте вашите публикации и потребители лесно с предоставените инструменти. Изберете желаната опция от менюто, за да започнете работа със системата."
    },
    imageCategories: {
      animals: "Животни",
      avatars: "Аватари",
      business: "Бизнес",
      cars: "Коли",
      city: "Градове",
      flowers: "Цветя",
      food: "Храна",
      nature: "Природа",
      sports: "Спорт"
    }
  }
}

// Define valid locales as a union type
type Locale = "en" | "bg"

// Explicitly type translations
const translations: { [key in "en" | "bg"]: TranslationMessages } = {
  en: customEn as TranslationMessages,
  bg: customBg as TranslationMessages
}

// Update i18nProvider with proper return type
export const i18nProvider = polyglotI18nProvider(
  (locale: string): TranslationMessages => {
    if (locale in translations) {
      return translations[locale as Locale]
    }
    // Optional: Fallback to default locale if an unsupported locale is provided
    console.warn(`Unsupported locale: ${locale}. Falling back to "en".`)
    return translations["en"]
  },
  "en", // Default locale
  [
    { locale: "en", name: "English" },
    { locale: "bg", name: "Български" }
  ]
)
