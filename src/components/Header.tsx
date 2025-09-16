import { Globe } from 'lucide-react';
// ...existing code...
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { useLanguage } from './LanguageProvider';

export function Header() {
  const { language, setLanguage, t } = useLanguage();

  return (
    <div className="space-y-6">
      {/* Title and Language Selector */}
      <div className="text-center space-y-3">
        <div className="max-w-4xl mx-auto px-6 sm:px-8">
          {/* Desktop layout */}
          <div className="hidden sm:flex items-start justify-between">
            <div className="text-left">
              <h1 className="text-2xl sm:text-3xl font-medium mb-2">{t.title}</h1>
              <p className="text-muted-foreground text-sm sm:text-base">{t.subtitle}</p>
            </div>
            <div className="flex items-center space-x-2">
              <Globe className="h-4 w-4 text-muted-foreground" />
              <Select value={language} onValueChange={(value: 'en' | 'es') => setLanguage(value)}>
                <SelectTrigger className="w-20 cursor-pointer">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="en" className="cursor-pointer">EN</SelectItem>
                  <SelectItem value="es" className="cursor-pointer">ES</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          {/* Mobile layout: heading left, language selector right on same row */}
          <div className="sm:hidden">
            <div className="flex items-center justify-between">
              <div className="text-left">
                <h1 className="text-2xl font-medium mb-0">{t.title}</h1>
                <p className="text-muted-foreground text-sm">{t.subtitle}</p>
              </div>
              <div className="flex items-center space-x-2">
                <Globe className="h-4 w-4 text-muted-foreground" />
                <Select value={language} onValueChange={(value: 'en' | 'es') => setLanguage(value)}>
                  <SelectTrigger className="w-20 cursor-pointer">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="en" className="cursor-pointer">EN</SelectItem>
                    <SelectItem value="es" className="cursor-pointer">ES</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Instructions */}
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        <div className="space-y-4">
          <h2 className="text-sm font-medium text-muted-foreground">{t.instructions.title}</h2>
          <div className="space-y-3">
            {t.instructions.steps.map((step, index) => (
              <div key={index} className="flex items-start gap-3">
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-muted text-foreground text-xs flex items-center justify-center mt-0.5 font-medium">
                  {index + 1}
                </span>
                <p className="text-sm text-foreground leading-relaxed">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}