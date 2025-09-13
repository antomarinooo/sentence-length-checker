import { createContext, useContext, useState } from 'react';

type Language = 'en' | 'es';

interface Translations {
  title: string;
  subtitle: string;
  instructions: {
    title: string;
    steps: string[];
  };
  settings: string;
  maxWords: string;
  yourText: string;
  placeholder: string;
  analysisResults: string;
  totalSentences: string;
  longSentences: string;
  highlighted: string;
  sentencesMoreThan: string;
  wordsHover: string;
  emptyState: string;
  words: string;
  footer: {
    about: string;
    description: string;
    contact: string;
    github: string;
    madeWith: string;
  };
}

const translations: Record<Language, Translations> = {
  en: {
    title: "Sentence Length Analyzer",
    subtitle: "Paste your text to highlight sentences longer than your specified word count",
    instructions: {
      title: "How to use:",
      steps: [
        "Paste or type your text in the input area below",
        "Adjust the maximum words per sentence (default: 30)",
        "Long sentences will be highlighted in yellow",
        "Hover over highlighted sentences to see exact word count"
      ]
    },
    settings: "Settings",
    maxWords: "Max words per sentence:",
    yourText: "Your Text",
    placeholder: "Paste your text here...",
    analysisResults: "Analysis Results",
    totalSentences: "Total sentences:",
    longSentences: "Long sentences:",
    highlighted: "Highlighted",
    sentencesMoreThan: "sentences have more than",
    wordsHover: "words. Hover over them to see exact word count.",
    emptyState: "Paste your text above to analyze sentence length",
    words: "words",
    footer: {
      about: "About This Tool",
      description: "A simple, privacy-focused tool to identify overly long sentences in your text. All processing happens in your browser - no data is sent to servers.",
      contact: "Contact",
      github: "View on GitHub",
      madeWith: "Made with React & Tailwind CSS"
    }
  },
  es: {
    title: "Analizador de Longitud de Oraciones",
    subtitle: "Pega tu texto para resaltar oraciones más largas que el número de palabras especificado",
    instructions: {
      title: "Cómo usar:",
      steps: [
        "Pega o escribe tu texto en el área de entrada",
        "Ajusta el máximo de palabras por oración (predeterminado: 30)",
        "Las oraciones largas se resaltarán en amarillo",
        "Pasa el cursor sobre las oraciones resaltadas para ver el conteo exacto"
      ]
    },
    settings: "Configuración",
    maxWords: "Máx. palabras por oración:",
    yourText: "Tu Texto",
    placeholder: "Pega tu texto aquí...",
    analysisResults: "Resultados del Análisis",
    totalSentences: "Total de oraciones:",
    longSentences: "Oraciones largas:",
    highlighted: "Resaltadas",
    sentencesMoreThan: "oraciones tienen más de",
    wordsHover: "palabras. Pasa el cursor sobre ellas para ver el conteo exacto.",
    emptyState: "Pega tu texto arriba para analizar la longitud de oraciones",
    words: "palabras",
    footer: {
      about: "Sobre Esta Herramienta",
      description: "Una herramienta simple y privada para identificar oraciones excesivamente largas en tu texto. Todo el procesamiento ocurre en tu navegador - no se envían datos a servidores.",
      contact: "Contacto",
      github: "Ver en GitHub",
      madeWith: "Hecho con React & Tailwind CSS"
    }
  }
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        t: translations[language]
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}