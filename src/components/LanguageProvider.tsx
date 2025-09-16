import { createContext, useContext, useState } from 'react';

type Language = 'en' | 'es';

interface Translations {
  title: string;
  subtitle: string;
  description: string;
  instructions: {
    title: string;
    steps: string[];
  };
  tutorial: {
    title: string;
    description: string;
    tableHeaders: {
      textType: string;
      recommendedAverage: string;
    };
    recommendations: Array<{
      textType: string;
      wordCount: string;
    }>;
    note: string;
    sources: {
      label: string;
      items: string[];
    };
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
  clearText: string;
  addSample: string;
  footer: {
    about: string;
    description: string;
    contact: string;
    github: string;
    instagram: string;
    madeWith: string;
    privacyFocused: string;
    noDataCollection: string;
    clientSideProcessing: string;
    copyright: string;
  };
}

const translations: Record<Language, Translations> = {
  en: {
    title: "Sentence Length Analyzer",
    subtitle: "Paste your text to highlight sentences longer than your specified word count",
    description: "Quickly spot sentences that exceed a chosen word limit so you can simplify wording and improve readability.",
    instructions: {
      title: "How to use:",
      steps: [
        "Paste or type your text in the input area below",
        "Adjust the maximum words per sentence (default: 30)",
        "Long sentences will be highlighted",
        "Hover over highlighted sentences to see exact word count"
      ]
    },
    tutorial: {
      title: "Quick Guide: Words per Sentence",
      description: "There is no fixed rule, but keeping sentences short is recommended to improve clarity and readability.",
      tableHeaders: {
        textType: "Text Type",
        recommendedAverage: "Recommended Average"
      },
      recommendations: [
        { textType: "Academic / Essays", wordCount: "20–25 words" },
        { textType: "News / Journalism", wordCount: "15–20 words" },
        { textType: "Web / Blogs", wordCount: "10–18 words" },
        { textType: "Technical / Manuals", wordCount: "15–25 words" },
        { textType: "Literary / Creative", wordCount: "Variable, by style" }
      ],
      note: "Note: These are readability recommendations, not official rules.",
      sources: {
        label: "Sources:",
        items: [
          "Harvard Library – Writing Guide",
          "Maryland Developmental Disabilities Council – Plain Language Guide"
        ]
      }
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
  clearText: "Clear Text",
    addSample: "Add Sample",
    footer: {
      about: "About this project",
      description: "A simple, privacy-focused tool to identify overly long sentences in your text. All processing happens in your browser - no data is sent to servers.",
      contact: "Contact",
      github: "@antomarinooo on GitHub",
      instagram: "@fusefolio on Instagram",
      madeWith: "Made with",
      privacyFocused: "Privacy-focused",
      noDataCollection: "No data collection",
      clientSideProcessing: "Client-side processing",
      copyright: "© 2025 Antonia Cajigal. Sentence Length Analyzer. Open source project."
    }
  },
  es: {
    title: "Analizador de Longitud de Oraciones",
    subtitle: "Pega tu texto para resaltar oraciones más largas que el número de palabras especificado",
    description: "Detecta rápidamente oraciones que superan un límite de palabras para simplificar el texto y mejorar la legibilidad.",
    instructions: {
      title: "Cómo usar:",
      steps: [
        "Pega o escribe tu texto en el área de entrada",
        "Ajusta el máximo de palabras por oración (predeterminado: 30)",
        "Las oraciones largas se resaltarán",
        "Pasa el cursor sobre las oraciones resaltadas para ver el conteo exacto"
      ]
    },
    tutorial: {
      title: "Guía Rápida: Palabras por Oración",
      description: "No hay una regla fija, pero se recomienda mantener las oraciones cortas para mejorar la claridad y la lectura.",
      tableHeaders: {
        textType: "Tipo de Texto",
        recommendedAverage: "Promedio Recomendado"
      },
      recommendations: [
        { textType: "Académico / Ensayos", wordCount: "20–25 palabras" },
        { textType: "Noticias / Periodismo", wordCount: "15–20 palabras" },
        { textType: "Web / Blogs", wordCount: "10–18 palabras" },
        { textType: "Técnico / Manuales", wordCount: "15–25 palabras" },
        { textType: "Literario / Creativo", wordCount: "Variable, según estilo" }
      ],
      note: "Nota: Son recomendaciones de legibilidad, no normas oficiales.",
      sources: {
        label: "Fuentes:",
        items: [
          "Harvard Library – Writing Guide",
          "Maryland Developmental Disabilities Council – Plain Language Guide"
        ]
      }
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
  clearText: "Borrar texto",
    addSample: "Añadir Muestra",
    footer: {
      about: "Sobre este proyecto",
      description: "Una herramienta simple y privada para identificar oraciones excesivamente largas en tu texto. Todo el procesamiento ocurre en tu navegador - no se envían datos a servidores.",
      contact: "Contacto",
      github: "@antomarinooo en GitHub",
      instagram: "@fusefolio en Instagram",
      madeWith: "Hecho con",
      privacyFocused: "Todos los datos son privados",
      noDataCollection: "Sin recolección de datos",
      clientSideProcessing: "Procesamiento de datos localmente",
      copyright: "© 2025 Antonia Cajigal | Analizador de Longitud de Oraciones. Proyecto de código abierto."
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
  const [language, setLanguage] = useState<Language>('es');

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