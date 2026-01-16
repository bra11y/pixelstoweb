import React from 'react';
import { Card } from '../ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { AlertCircle, CheckCircle, Info } from 'lucide-react';

interface ScanResultsProps {
  results: {
    contrast_issues: any[];
    semantic_html_issues: any[];
    alt_text_issues: any[];
  };
}

const ScanResults = ({ results }: ScanResultsProps) => {
  const IssueCard = ({ issue, index }: { issue: any; index: number }) => (
    <Card className="p-5 bg-white border-l-4 border-l-red-500 hover:shadow-lg transition-shadow duration-200">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
          <AlertCircle className="w-5 h-5 text-red-600" />
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-mono bg-slate-100 px-2 py-1 rounded">
              {issue.element}
            </span>
            <span className="text-xs text-slate-500">Issue #{index + 1}</span>
          </div>
          <h4 className="font-semibold text-slate-800 mb-2">{issue.issue}</h4>
          <div className="flex items-start gap-2 text-sm text-slate-600 bg-blue-50 p-3 rounded-lg">
            <Info className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
            <p>{issue.recommendation}</p>
          </div>
        </div>
      </div>
    </Card>
  );

  const EmptyState = ({ message }: { message: string }) => (
    <Card className="p-8 bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200">
      <div className="flex flex-col items-center justify-center text-center">
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
          <CheckCircle className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="text-xl font-semibold text-green-800 mb-2">Great Job!</h3>
        <p className="text-green-700">{message}</p>
      </div>
    </Card>
  );

  return (
    <div className="mt-8">
      <h2 className="text-3xl font-bold text-slate-800 mb-6">Detailed Results</h2>
      
      <Tabs defaultValue="contrast" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-8 bg-white shadow-md p-1 rounded-xl">
          <TabsTrigger 
            value="contrast" 
            className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-indigo-500 data-[state=active]:to-purple-500 data-[state=active]:text-white rounded-lg transition-all duration-200"
          >
            Contrast ({results.contrast_issues.length})
          </TabsTrigger>
          <TabsTrigger 
            value="semantic"
            className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-pink-500 data-[state=active]:text-white rounded-lg transition-all duration-200"
          >
            Semantic HTML ({results.semantic_html_issues.length})
          </TabsTrigger>
          <TabsTrigger 
            value="alt-text"
            className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-pink-500 data-[state=active]:to-red-500 data-[state=active]:text-white rounded-lg transition-all duration-200"
          >
            Alt Text ({results.alt_text_issues.length})
          </TabsTrigger>
        </TabsList>

        <TabsContent value="contrast" className="space-y-4">
          {results.contrast_issues.length === 0 ? (
            <EmptyState message="No contrast issues found! Your color combinations meet accessibility standards." />
          ) : (
            results.contrast_issues.map((issue, index) => (
              <IssueCard key={index} issue={issue} index={index} />
            ))
          )}
        </TabsContent>

        <TabsContent value="semantic" className="space-y-4">
          {results.semantic_html_issues.length === 0 ? (
            <EmptyState message="No semantic HTML issues found! Your HTML structure is well-organized." />
          ) : (
            results.semantic_html_issues.map((issue, index) => (
              <IssueCard key={index} issue={issue} index={index} />
            ))
          )}
        </TabsContent>

        <TabsContent value="alt-text" className="space-y-4">
          {results.alt_text_issues.length === 0 ? (
            <EmptyState message="No alt text issues found! All your images have proper alternative text." />
          ) : (
            results.alt_text_issues.map((issue, index) => (
              <IssueCard key={index} issue={issue} index={index} />
            ))
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ScanResults;
