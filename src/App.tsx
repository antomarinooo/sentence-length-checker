import { LanguageProvider } from './components/LanguageProvider';
import { Header } from './components/Header';
import { TutorialCard } from './components/TutorialCard';
import { TextAnalyzer } from './components/TextAnalyzer';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
        <div className="py-8 sm:py-12">
          <Header />
        </div>
        <section className="pb-8 sm:pb-12">
          <div className="max-w-4xl mx-auto px-6 sm:px-8">
            <TutorialCard />
          </div>
        </section>
        <main className="pb-8 sm:pb-12">
          <TextAnalyzer />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}