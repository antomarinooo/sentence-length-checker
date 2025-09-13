import { Globe } from 'lucide-react';
import { Button } from './ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { useLanguage } from './LanguageProvider';
import { Card, CardContent } from './ui/card';

export function Header() {
  const { language, setLanguage, t } = useLanguage();

  return (
    <div className="space-y-6">
      {/* Title and Language Selector */}
      <div className="text-center space-y-4">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          {/* Desktop layout */}
          <div className="hidden sm:flex items-center justify-between">
            <div className="flex-1" />
            <div className="text-left">
              <h1 className="text-2xl sm:text-3xl font-medium mb-2">{t.title}</h1>
              <p className="text-muted-foreground text-sm sm:text-base">{t.subtitle}</p>
            </div>
            <div className="flex-1 flex justify-end">
              <div className="flex items-center space-x-2">
                <Globe className="h-4 w-4 text-muted-foreground" />
                <Select value={language} onValueChange={(value: 'en' | 'es') => setLanguage(value)}>
                  <SelectTrigger className="w-20">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="en">EN</SelectItem>
                    <SelectItem value="es">ES</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
          
          {/* Mobile layout */}
          <div className="sm:hidden space-y-4">
            <div className="flex justify-end">
              <div className="flex items-center space-x-2">
                <Globe className="h-4 w-4 text-muted-foreground" />
                <Select value={language} onValueChange={(value: 'en' | 'es') => setLanguage(value)}>
                  <SelectTrigger className="w-20">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="en">EN</SelectItem>
                    <SelectItem value="es">ES</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="text-center">
              <h1 className="text-2xl font-medium mb-2">{t.title}</h1>
              <p className="text-muted-foreground text-sm">{t.subtitle}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Instructions */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <Card>
          <CardContent className="pt-4 sm:pt-6">
            <div className="text-center space-y-3 sm:space-y-4">
              <h2 className="font-medium text-sm sm:text-base">{t.instructions.title}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 text-xs sm:text-sm text-muted-foreground">
                {t.instructions.steps.map((step, index) => (
                  <div key={index} className="flex items-start space-x-2 sm:space-x-3">
                    <span className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center mt-0.5">
                      {index + 1}
                    </span>
                    <span className="text-left leading-relaxed">{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}