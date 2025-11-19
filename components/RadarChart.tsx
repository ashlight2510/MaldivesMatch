'use client';

import {
  Radar,
  RadarChart as RechartsRadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from 'recharts';

interface RadarChartProps {
  scores: {
    luxury: number;
    underwater: number;
    lagoon: number;
    food: number;
    activity: number;
    budget: number;
  };
}

export default function RadarChart({ scores }: RadarChartProps) {
  const data = [
    {
      subject: '럭셔리',
      value: scores.luxury,
      fullMark: 100,
    },
    {
      subject: '수중환경',
      value: scores.underwater,
      fullMark: 100,
    },
    {
      subject: '라군',
      value: scores.lagoon,
      fullMark: 100,
    },
    {
      subject: '음식',
      value: scores.food,
      fullMark: 100,
    },
    {
      subject: '액티비티',
      value: scores.activity,
      fullMark: 100,
    },
    {
      subject: '가성비',
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
            name="나의 성향"
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

