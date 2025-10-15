import { TrendingUp, Clock, Headphones, Brain, BookOpen, Calendar } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Progress } from "../ui/progress";
import { Badge } from "../ui/badge";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "../ui/chart";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const weeklyData = [
  { day: "T2", hours: 2.5 },
  { day: "T3", hours: 3.2 },
  { day: "T4", hours: 1.8 },
  { day: "T5", hours: 4.1 },
  { day: "T6", hours: 3.5 },
  { day: "T7", hours: 2.9 },
  { day: "CN", hours: 5.2 },
];

const progressData = [
  { week: "Tuần 1", progress: 15 },
  { week: "Tuần 2", progress: 28 },
  { week: "Tuần 3", progress: 42 },
  { week: "Tuần 4", progress: 58 },
];

const subjects = [
  { name: "Kinh tế học vi mô", progress: 65, hours: 12.5, color: "hsl(var(--chart-1))" },
  { name: "Quản trị học", progress: 30, hours: 8.2, color: "hsl(var(--chart-2))" },
  { name: "Tài chính doanh nghiệp", progress: 90, hours: 15.8, color: "hsl(var(--chart-3))" },
  { name: "Marketing căn bản", progress: 15, hours: 4.3, color: "hsl(var(--chart-4))" },
];

const stats = [
  {
    label: "Tổng thời gian học",
    value: "42.5 giờ",
    icon: Clock,
    trend: "+12% so với tuần trước",
    color: "text-blue-600",
  },
  {
    label: "Audio đã nghe",
    value: "156",
    icon: Headphones,
    trend: "+8 trong tuần này",
    color: "text-green-600",
  },
  {
    label: "Flashcards đã học",
    value: "324",
    icon: Brain,
    trend: "+45 trong tuần này",
    color: "text-purple-600",
  },
  {
    label: "Tài liệu đang học",
    value: "8",
    icon: BookOpen,
    trend: "2 tài liệu mới",
    color: "text-orange-600",
  },
];

export function LearningProgress() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1>Tiến độ học tập</h1>
          <p className="text-muted-foreground">Theo dõi và phân tích quá trình học tập của bạn</p>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="gap-1">
            <Calendar className="h-3 w-3" />
            7 ngày qua
          </Badge>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.label}>
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className={`h-10 w-10 rounded-lg bg-muted flex items-center justify-center ${stat.color}`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <TrendingUp className="h-4 w-4 text-green-600" />
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                  <h3>{stat.value}</h3>
                  <p className="text-xs text-muted-foreground">{stat.trend}</p>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Weekly Activity */}
        <Card>
          <CardHeader>
            <CardTitle>Hoạt động trong tuần</CardTitle>
            <CardDescription>Thời gian học theo ngày</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={{
                hours: {
                  label: "Giờ học",
                  color: "hsl(var(--chart-1))",
                },
              }}
              className="h-64"
            >
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={weeklyData}>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                  <XAxis 
                    dataKey="day" 
                    className="text-xs"
                    tick={{ fill: 'hsl(var(--muted-foreground))' }}
                  />
                  <YAxis 
                    className="text-xs"
                    tick={{ fill: 'hsl(var(--muted-foreground))' }}
                  />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Bar dataKey="hours" fill="hsl(var(--chart-1))" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>

        {/* Progress Over Time */}
        <Card>
          <CardHeader>
            <CardTitle>Tiến độ tổng quan</CardTitle>
            <CardDescription>Phần trăm hoàn thành theo tuần</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={{
                progress: {
                  label: "Tiến độ",
                  color: "hsl(var(--chart-2))",
                },
              }}
              className="h-64"
            >
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={progressData}>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                  <XAxis 
                    dataKey="week" 
                    className="text-xs"
                    tick={{ fill: 'hsl(var(--muted-foreground))' }}
                  />
                  <YAxis 
                    className="text-xs"
                    tick={{ fill: 'hsl(var(--muted-foreground))' }}
                  />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Line 
                    type="monotone" 
                    dataKey="progress" 
                    stroke="hsl(var(--chart-2))" 
                    strokeWidth={2}
                    dot={{ fill: 'hsl(var(--chart-2))', r: 4 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>

      {/* Subject Progress */}
      <Card>
        <CardHeader>
          <CardTitle>Tiến độ theo môn học</CardTitle>
          <CardDescription>Chi tiết từng môn học đang theo dõi</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {subjects.map((subject) => (
              <div key={subject.name} className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div 
                      className="h-3 w-3 rounded-full"
                      style={{ backgroundColor: subject.color }}
                    />
                    <span>{subject.name}</span>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span>{subject.hours}h</span>
                    <span className="w-12 text-right">{subject.progress}%</span>
                  </div>
                </div>
                <Progress value={subject.progress} />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Learning Streak */}
      <Card>
        <CardHeader>
          <CardTitle>Chuỗi học liên tiếp</CardTitle>
          <CardDescription>Duy trì thói quen học tập mỗi ngày</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between mb-6">
            <div>
              <div className="text-4xl mb-2">🔥</div>
              <h2>12 ngày</h2>
              <p className="text-sm text-muted-foreground">Kỷ lục hiện tại</p>
            </div>
            <div className="text-right">
              <div className="text-4xl mb-2">🏆</div>
              <h2>28 ngày</h2>
              <p className="text-sm text-muted-foreground">Kỷ lục tốt nhất</p>
            </div>
          </div>
          <div className="grid grid-cols-7 gap-2">
            {Array.from({ length: 28 }, (_, i) => (
              <div
                key={i}
                className={`h-10 rounded ${
                  i < 12
                    ? 'bg-green-500'
                    : i < 20
                    ? 'bg-muted'
                    : 'bg-muted/50'
                }`}
                title={`Ngày ${i + 1}`}
              />
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
