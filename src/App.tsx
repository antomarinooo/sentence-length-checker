import { LanguageProvider } from './components/LanguageProvider';
import { Header } from './components/Header';
import { TextAnalyzer } from './components/TextAnalyzer';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
        <div className="py-4 sm:py-8">
          <Header />
        </div>
        <main className="pb-4 sm:pb-8">
          <TextAnalyzer />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}