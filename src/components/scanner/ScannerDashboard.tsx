import React from 'react';
import { Card } from '../ui/card';
import { CheckCircle2, AlertCircle, XCircle, TrendingUp } from 'lucide-react';

interface ScannerDashboardProps {
  results: {
    overall_score: number;
    contrast_score: number;
    semantic_score: number;
    alt_text_score: number;
    total_issues: number;
    contrast_issues: any[];
    semantic_html_issues: any[];
    alt_text_issues: any[];
  };
}

const ScannerDashboard = ({ results }: ScannerDashboardProps) => {
  const getScoreColor = (score: number) => {
    if (score >= 80) return 'from-green-500 to-emerald-500';
    if (score >= 60) return 'from-yellow-500 to-orange-500';
    return 'from-red-500 to-pink-500';
  };

  const getScoreIcon = (score: number) => {
    if (score >= 80) return <CheckCircle2 className="w-8 h-8" />;
    if (score >= 60) return <AlertCircle className="w-8 h-8" />;
    return <XCircle className="w-8 h-8" />;
  };

  const getScoreLabel = (score: number) => {
    if (score >= 80) return 'Excellent';
    if (score >= 60) return 'Needs Improvement';
    return 'Critical Issues';
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 xl:grid-cols-6 gap-6">
      {/* Overall Score - Large Card */}
      <Card className="md:col-span-2 lg:col-span-3 xl:col-span-3 p-8 bg-gradient-to-br from-cyan-500/90 via-blue-600/90 to-purple-600/90 text-white border border-white/20 shadow-2xl relative overflow-hidden group hover:scale-[1.02] transition-all duration-500 backdrop-blur-xl">
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/10 to-transparent rounded-full blur-2xl"></div>
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold">Overall Score</h3>
            <div className="p-3 bg-white/20 rounded-2xl backdrop-blur-sm">
              <TrendingUp className="w-7 h-7" />
            </div>
          </div>
          <div className="flex items-end gap-4 mb-6">
            <div className="text-8xl font-bold leading-none">{results.overall_score}</div>
            <div className="text-4xl font-light opacity-75 mb-3">/100</div>
          </div>
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-white/20 rounded-xl">
              {getScoreIcon(results.overall_score)}
            </div>
            <span className="text-xl font-medium">{getScoreLabel(results.overall_score)}</span>
          </div>
          <div className="pt-6 border-t border-white/20">
            <p className="text-lg opacity-90">
              {results.total_issues} {results.total_issues === 1 ? 'issue' : 'issues'} found across all categories
            </p>
          </div>
        </div>
      </Card>

      {/* Contrast Score */}
      <Card className="p-6 bg-white/5 backdrop-blur-xl border border-white/10 hover:border-green-400/50 transition-all duration-500 hover:shadow-green-500/25 group lg:col-span-1 xl:col-span-1">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-semibold text-white/80">Color Contrast</h3>
          <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${getScoreColor(results.contrast_score)} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
            {getScoreIcon(results.contrast_score)}
          </div>
        </div>
        <div className="text-4xl font-bold text-white mb-3">{results.contrast_score}</div>
        <div className="w-full bg-white/10 rounded-full h-3 mb-4 overflow-hidden">
          <div
            className={`h-3 rounded-full bg-gradient-to-r ${getScoreColor(results.contrast_score)} transition-all duration-1000 shadow-lg`}
            style={{ width: `${results.contrast_score}%` }}
          />
        </div>
        <p className="text-sm text-white/60">
          {results.contrast_issues.length} {results.contrast_issues.length === 1 ? 'issue' : 'issues'}
        </p>
      </Card>

      {/* Semantic HTML Score */}
      <Card className="p-6 bg-white/5 backdrop-blur-xl border border-white/10 hover:border-purple-400/50 transition-all duration-500 hover:shadow-purple-500/25 group lg:col-span-1 xl:col-span-1">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-semibold text-white/80">Semantic HTML</h3>
          <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${getScoreColor(results.semantic_score)} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
            {getScoreIcon(results.semantic_score)}
          </div>
        </div>
        <div className="text-4xl font-bold text-white mb-3">{results.semantic_score}</div>
        <div className="w-full bg-white/10 rounded-full h-3 mb-4 overflow-hidden">
          <div
            className={`h-3 rounded-full bg-gradient-to-r ${getScoreColor(results.semantic_score)} transition-all duration-1000 shadow-lg`}
            style={{ width: `${results.semantic_score}%` }}
          />
        </div>
        <p className="text-sm text-white/60">
          {results.semantic_html_issues.length} {results.semantic_html_issues.length === 1 ? 'issue' : 'issues'}
        </p>
      </Card>

      {/* Alt Text Score */}
      <Card className="p-6 bg-white/5 backdrop-blur-xl border border-white/10 hover:border-pink-400/50 transition-all duration-500 hover:shadow-pink-500/25 group md:col-span-2 lg:col-span-1 xl:col-span-1">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-semibold text-white/80">Alt Text</h3>
          <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${getScoreColor(results.alt_text_score)} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
            {getScoreIcon(results.alt_text_score)}
          </div>
        </div>
        <div className="text-4xl font-bold text-white mb-3">{results.alt_text_score}</div>
        <div className="w-full bg-white/10 rounded-full h-3 mb-4 overflow-hidden">
          <div
            className={`h-3 rounded-full bg-gradient-to-r ${getScoreColor(results.alt_text_score)} transition-all duration-1000 shadow-lg`}
            style={{ width: `${results.alt_text_score}%` }}
          />
        </div>
        <p className="text-sm text-white/60">
          {results.alt_text_issues.length} {results.alt_text_issues.length === 1 ? 'issue' : 'issues'}
        </p>
      </Card>

      {/* Quick Stats - Spans remaining space */}
      <Card className="p-6 bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-xl border border-white/10 text-white shadow-2xl md:col-span-2 lg:col-span-5 xl:col-span-6 relative overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-white/10 rounded-xl">
              <TrendingUp className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold">Detailed Breakdown</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10 hover:border-green-400/30 transition-all duration-300 group/stat">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center mx-auto mb-4 group-hover/stat:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-2xl">C</span>
              </div>
              <div className="text-4xl font-bold mb-2">{results.contrast_issues.length}</div>
              <div className="text-sm opacity-75 uppercase tracking-wider">Contrast Issues</div>
            </div>
            <div className="text-center p-6 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10 hover:border-blue-400/30 transition-all duration-300 group/stat">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center mx-auto mb-4 group-hover/stat:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-2xl">S</span>
              </div>
              <div className="text-4xl font-bold mb-2">{results.semantic_html_issues.length}</div>
              <div className="text-sm opacity-75 uppercase tracking-wider">Semantic Issues</div>
            </div>
            <div className="text-center p-6 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10 hover:border-purple-400/30 transition-all duration-300 group/stat">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center mx-auto mb-4 group-hover/stat:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-2xl">A</span>
              </div>
              <div className="text-4xl font-bold mb-2">{results.alt_text_issues.length}</div>
              <div className="text-sm opacity-75 uppercase tracking-wider">Alt Text Issues</div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ScannerDashboard;
