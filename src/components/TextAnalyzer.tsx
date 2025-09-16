import { useState } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';
import { Textarea } from './ui/textarea';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { useLanguage } from './LanguageProvider';

interface Sentence {
  text: string;
  wordCount: number;
  isLong: boolean;
  index: number;
}

export function TextAnalyzer() {
  const { t, language } = useLanguage();
  const [text, setText] = useState('');
  const [maxWords, setMaxWords] = useState(30);
  const [hoveredSentence, setHoveredSentence] = useState<number | null>(null);

  const sampleTexts = {
    en: "This is a short sentence. However, this is an example of a much longer sentence that exceeds the typical word count threshold and demonstrates how the text analyzer highlights sentences that are considered too lengthy for optimal readability and comprehension. Another brief one. Here we have yet another extremely long and verbose sentence that goes on and on with multiple clauses and phrases, making it difficult for readers to follow the main point and potentially causing them to lose interest or become confused about the intended message. Final short sentence.",
    es: "Esta es una oración corta. Sin embargo, este es un ejemplo de una oración mucho más larga que excede el umbral típico de conteo de palabras y demuestra cómo el analizador de texto resalta oraciones que se consideran demasiado largas para una legibilidad y comprensión óptimas. Otra breve. Aquí tenemos otra oración extremadamente larga y verbosa que continúa y continúa con múltiples cláusulas y frases, lo que hace difícil para los lectores seguir el punto principal y potencialmente causando que pierdan interés o se confundan sobre el mensaje pretendido. Oración final corta."
  };

  const addSampleText = () => {
    setText(sampleTexts[language]);
  };

  const parseSentences = (inputText: string): Sentence[] => {
    if (!inputText.trim()) return [];

    // Split text into potential sentences
    const rawSentences = inputText
      .split(/[.!?]+/)
      .map(s => s.trim())
      .filter(s => s.length > 0);

    return rawSentences.map((sentence, index) => {
      // Skip very short lines that are likely titles or headers
      const isLikelyTitle = sentence.length < 50 && !sentence.includes(',');
      
      // Count words (split by whitespace and filter out empty strings)
      const words = sentence.split(/\s+/).filter(word => word.length > 0);
      const wordCount = words.length;
      
      // Don't highlight titles or very short sentences
      const isLong = !isLikelyTitle && wordCount > maxWords;

      return {
        text: sentence,
        wordCount,
        isLong,
        index
      };
    });
  };

  const sentences = parseSentences(text);

  const renderAnalyzedText = () => {
    if (!text.trim()) {
      return (
        <div className="text-muted-foreground italic p-6 sm:p-8 text-center text-sm sm:text-base">
          {t.emptyState}
        </div>
      );
    }

    return (
      <div className="space-y-2 leading-relaxed">
        {sentences.map((sentence, index) => (
          <span key={index} className="relative">
            <span
              className={`${
                sentence.isLong
                  ? 'bg-[#FFDFFE] dark:bg-yellow-800/30 rounded px-1 py-0.5 cursor-help touch-manipulation'
                  : ''
              } transition-colors`}
              onMouseEnter={() => sentence.isLong && setHoveredSentence(index)}
              onMouseLeave={() => setHoveredSentence(null)}
              onTouchStart={() => sentence.isLong && setHoveredSentence(index)}
              onTouchEnd={() => setHoveredSentence(null)}
            >
              {sentence.text}
            </span>
            {sentence.isLong && hoveredSentence === index && (
              <div className="absolute z-10 bg-gray-900 text-white px-2 py-1 rounded shadow-lg -top-8 left-0 whitespace-nowrap text-xs sm:text-sm">
                {sentence.wordCount} {t.words}
              </div>
            )}
            {index < sentences.length - 1 && <span>. </span>}
          </span>
        ))}
      </div>
    );
  };

  const longSentenceCount = sentences.filter(s => s.isLong).length;

  return (
    <div className="max-w-4xl mx-auto px-6 sm:px-8 py-0 space-y-3">

      <Card>
        <CardHeader className="pb-4">
          <CardTitle className="text-base sm:text-lg">{t.settings}</CardTitle>
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 pt-1">
            <Label htmlFor="maxWords" className="text-sm font-medium">
              {t.maxWords}
            </Label>
            <div className="relative w-full sm:w-32">
              <Input
                id="maxWords"
                type="number"
                value={maxWords}
                onChange={(e) => setMaxWords(Number(e.target.value) || 30)}
                className="w-full h-10 pr-14 sm:pr-14"
                min="1"
                max="100"
              />
              {/* Arrows inside input: stacked vertically on all breakpoints */}
              <div className="absolute inset-y-0 right-1 flex flex-col items-center justify-center gap-1">
                <Button
                  aria-label="Increase max words"
                  variant="ghost"
                  size="sm"
                  className="h-6 w-6 p-0 hover:bg-transparent"
                  onClick={() => setMaxWords(Math.min(100, maxWords + 1))}
                >
                  <ChevronUp className="h-4 w-4" />
                </Button>
                <Button
                  aria-label="Decrease max words"
                  variant="ghost"
                  size="sm"
                  className="h-6 w-6 p-0 hover:bg-transparent"
                  onClick={() => setMaxWords(Math.max(1, maxWords - 1))}
                >
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent className="pt-0">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <Label htmlFor="textInput" className="text-sm font-medium">{t.yourText}</Label>
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={addSampleText}
                  className="cursor-pointer"
                >
                  {t.addSample}
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setText('')}
                  className="cursor-pointer"
                >
                  {t.clearText}
                </Button>
              </div>
            </div>
            <Textarea
              id="textInput"
              placeholder={t.placeholder}
              value={text}
              onChange={(e) => setText(e.target.value)}
              onKeyDown={(e) => {
                // Ensure Ctrl+A works for select all
                if (e.ctrlKey && e.key === 'a') {
                  e.stopPropagation();
                  // Let the default behavior handle the select all
                }
              }}
              rows={6}
              className="resize-none text-sm sm:text-base min-h-[120px] sm:min-h-[160px] select-text"
              style={{ userSelect: 'text', WebkitUserSelect: 'text' }}
            />
          </div>
        </CardContent>
      </Card>

      {text && (
        <Card>
          <CardHeader className="pb-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <CardTitle className="text-base sm:text-lg">{t.analysisResults}</CardTitle>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 text-xs sm:text-sm text-muted-foreground">
                <span>{t.totalSentences} {sentences.length}</span>
                <span className="text-[rgba(208,0,0,1)] dark:text-yellow-400">
                  {t.longSentences} {longSentenceCount}
                </span>
              </div>
            </div>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="text-sm sm:text-base">
              {renderAnalyzedText()}
            </div>
          </CardContent>
        </Card>
      )}

      {longSentenceCount > 0 && (
        <div className="text-center text-xs sm:text-sm text-muted-foreground px-4">
          <span className="inline-block bg-[#FFDFFE] dark:bg-yellow-800/30 px-2 py-1 rounded mr-2 text-xs sm:text-sm text-[rgba(0,0,0,1)]">
            {t.highlighted}
          </span>
          {t.sentencesMoreThan} {maxWords} {t.wordsHover}
        </div>
      )}
    </div>
  );
}