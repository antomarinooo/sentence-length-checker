import { useState } from 'react';
import { Textarea } from './ui/textarea';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { useLanguage } from './LanguageProvider';

interface Sentence {
  text: string;
  wordCount: number;
  isLong: boolean;
  index: number;
}

export function TextAnalyzer() {
  const { t } = useLanguage();
  const [text, setText] = useState('');
  const [maxWords, setMaxWords] = useState(30);
  const [hoveredSentence, setHoveredSentence] = useState<number | null>(null);

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
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4 sm:py-6 space-y-4 sm:space-y-6">

      <Card>
        <CardHeader className="pb-3 sm:pb-6">
          <CardTitle className="text-base sm:text-lg">{t.settings}</CardTitle>
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 pt-2">
            <Label htmlFor="maxWords" className="text-sm font-medium">
              {t.maxWords}
            </Label>
            <Input
              id="maxWords"
              type="number"
              value={maxWords}
              onChange={(e) => setMaxWords(Number(e.target.value) || 30)}
              className="w-full sm:w-24 h-10"
              min="1"
              max="100"
            />
          </div>
        </CardHeader>
        <CardContent className="pt-0">
          <div className="space-y-3">
            <Label htmlFor="textInput" className="text-sm font-medium">{t.yourText}</Label>
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
          <CardHeader className="pb-3 sm:pb-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
              <CardTitle className="text-base sm:text-lg">{t.analysisResults}</CardTitle>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-xs sm:text-sm text-muted-foreground">
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
          <span className="inline-block bg-[#FFDFFE] dark:bg-yellow-800/30 px-2 py-1 rounded mr-2 text-xs sm:text-sm">
            {t.highlighted}
          </span>
          {t.sentencesMoreThan} {maxWords} {t.wordsHover}
        </div>
      )}
    </div>
  );
}