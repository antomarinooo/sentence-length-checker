import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { useLanguage } from './LanguageProvider';

export function TutorialCard() {
  const { t } = useLanguage();

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="text-lg font-medium">{t.tutorial.title}</CardTitle>
        <CardDescription className="text-sm">
          {t.tutorial.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Recommendations Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2 pr-4 font-medium text-foreground">
                  {t.tutorial.tableHeaders.textType}
                </th>
                <th className="text-left py-2 font-medium text-foreground">
                  {t.tutorial.tableHeaders.recommendedAverage}
                </th>
              </tr>
            </thead>
            <tbody>
              {t.tutorial.recommendations.map((rec, index) => (
                <tr key={index} className="border-b border-border/50 last:border-0">
                  <td className="py-2 pr-4 text-foreground">{rec.textType}</td>
                  <td className="py-2 text-muted-foreground">{rec.wordCount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Note */}
        <div className="pt-2">
          <p className="text-xs text-muted-foreground italic">
            {t.tutorial.note}
          </p>
        </div>

        {/* Sources */}
        <div className="pt-1">
          <p className="text-xs text-muted-foreground">
            <span className="font-medium">{t.tutorial.sources.label}</span>{' '}
            {t.tutorial.sources.items.join(', ')}.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}