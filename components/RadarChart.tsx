'use client';

import {
  Radar,
  RadarChart as RechartsRadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from 'recharts';
import { Language } from '@/lib/i18n';

interface RadarChartProps {
  scores: {
    luxury: number;
    underwater: number;
    lagoon: number;
    food: number;
    activity: number;
    budget: number;
  };
  lang?: Language;
}

export default function RadarChart({ scores, lang = 'en' }: RadarChartProps) {
  const labels = {
    luxury: lang === 'en' ? 'Luxury' : '럭셔리',
    underwater: lang === 'en' ? 'Underwater' : '수중환경',
    lagoon: lang === 'en' ? 'Lagoon' : '라군',
    food: lang === 'en' ? 'Food' : '음식',
    activity: lang === 'en' ? 'Activity' : '액티비티',
    budget: lang === 'en' ? 'Budget' : '가성비',
  };

  const data = [
    {
      subject: labels.luxury,
      value: scores.luxury,
      fullMark: 100,
    },
    {
      subject: labels.underwater,
      value: scores.underwater,
      fullMark: 100,
    },
    {
      subject: labels.lagoon,
      value: scores.lagoon,
      fullMark: 100,
    },
    {
      subject: labels.food,
      value: scores.food,
      fullMark: 100,
    },
    {
      subject: labels.activity,
      value: scores.activity,
      fullMark: 100,
    },
    {
      subject: labels.budget,
      value: scores.budget,
      fullMark: 100,
    },
  ];

  return (
    <div className="w-full h-[400px] md:h-[500px]">
      <ResponsiveContainer width="100%" height="100%">
        <RechartsRadarChart data={data}>
          <PolarGrid stroke="#cbd5e1" />
          <PolarAngleAxis
            dataKey="subject"
            tick={{ fill: '#475569', fontSize: 14, fontWeight: 600 }}
          />
          <PolarRadiusAxis
            angle={90}
            domain={[0, 100]}
            tick={{ fill: '#94a3b8', fontSize: 12 }}
          />
          <Radar
            name={lang === 'en' ? 'My Style' : '나의 성향'}
            dataKey="value"
            stroke="#0ea5e9"
            fill="#0ea5e9"
            fillOpacity={0.6}
            strokeWidth={2}
          />
        </RechartsRadarChart>
      </ResponsiveContainer>
    </div>
  );
}

