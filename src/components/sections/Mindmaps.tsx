import { Network, Download, Share2, ZoomIn, ZoomOut, Maximize2, Sparkles } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";

const mindmaps = [
  {
    id: 1,
    title: "Sơ đồ tư duy: Kinh tế học vi mô",
    material: "Kinh tế học vi mô",
    chapters: "Chương 1-5",
    nodes: 24,
    generatedAt: "Hôm nay",
  },
  {
    id: 2,
    title: "Sơ đồ tư duy: Quản trị học",
    material: "Quản trị học",
    chapters: "Chương 1-3",
    nodes: 18,
    generatedAt: "Hôm qua",
  },
  {
    id: 3,
    title: "Sơ đồ tư duy: Tài chính doanh nghiệp",
    material: "Tài chính doanh nghiệp",
    chapters: "Chương 6-8",
    nodes: 32,
    generatedAt: "2 ngày trước",
  },
];

export function Mindmaps() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1>Sơ đồ tư duy</h1>
          <p className="text-muted-foreground">Trực quan hóa kiến thức với mindmap tự động</p>
        </div>
        <Button>
          <Sparkles className="h-4 w-4 mr-2" />
          Tạo mindmap mới
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Mindmap List */}
        <div className="lg:col-span-1 space-y-3">
          {mindmaps.map((mindmap) => (
            <Card 
              key={mindmap.id} 
              className="cursor-pointer hover:shadow-md transition-shadow"
            >
              <CardHeader className="pb-3">
                <div className="flex items-start gap-3">
                  <div className="h-10 w-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <Network className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <CardTitle className="text-base line-clamp-2">{mindmap.title}</CardTitle>
                    <CardDescription className="mt-1">{mindmap.material}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">{mindmap.chapters}</span>
                  <Badge variant="secondary">{mindmap.nodes} nút</Badge>
                </div>
                <p className="text-sm text-muted-foreground">{mindmap.generatedAt}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mindmap Viewer */}
        <div className="lg:col-span-2">
          <Card className="h-full">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="secondary">
                      <Sparkles className="h-3 w-3 mr-1" />
                      Được tạo bởi AI
                    </Badge>
                    <Badge>{mindmaps[0].nodes} nút</Badge>
                  </div>
                  <CardTitle>{mindmaps[0].title}</CardTitle>
                  <CardDescription className="mt-2">
                    {mindmaps[0].material} • {mindmaps[0].chapters}
                  </CardDescription>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="icon">
                    <ZoomOut className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <ZoomIn className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Maximize2 className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Share2 className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              {/* Mindmap visualization - Using SVG for demonstration */}
              <div className="bg-muted/30 rounded-lg p-8 min-h-[500px] flex items-center justify-center">
                <svg viewBox="0 0 800 600" className="w-full h-full">
                  {/* Central node */}
                  <g>
                    <rect x="350" y="270" width="100" height="60" fill="hsl(var(--primary))" rx="8" />
                    <text x="400" y="305" textAnchor="middle" fill="hsl(var(--primary-foreground))" fontSize="14">
                      Kinh tế học
                    </text>
                  </g>

                  {/* Branch 1: Cung và Cầu */}
                  <g>
                    <line x1="400" y1="270" x2="250" y2="150" stroke="hsl(var(--primary))" strokeWidth="2" />
                    <rect x="200" y="120" width="100" height="60" fill="hsl(var(--chart-1))" rx="8" />
                    <text x="250" y="155" textAnchor="middle" fill="white" fontSize="12">
                      Cung và Cầu
                    </text>
                    
                    {/* Sub-nodes */}
                    <line x1="250" y1="120" x2="150" y2="50" stroke="hsl(var(--chart-1))" strokeWidth="1.5" />
                    <rect x="100" y="30" width="100" height="40" fill="hsl(var(--muted))" rx="6" />
                    <text x="150" y="55" textAnchor="middle" fontSize="11">
                      Định luật cung
                    </text>

                    <line x1="250" y1="120" x2="350" y2="50" stroke="hsl(var(--chart-1))" strokeWidth="1.5" />
                    <rect x="300" y="30" width="100" height="40" fill="hsl(var(--muted))" rx="6" />
                    <text x="350" y="55" textAnchor="middle" fontSize="11">
                      Định luật cầu
                    </text>
                  </g>

                  {/* Branch 2: Độ co giãn */}
                  <g>
                    <line x1="400" y1="270" x2="550" y2="150" stroke="hsl(var(--primary))" strokeWidth="2" />
                    <rect x="500" y="120" width="100" height="60" fill="hsl(var(--chart-2))" rx="8" />
                    <text x="550" y="155" textAnchor="middle" fill="white" fontSize="12">
                      Độ co giãn
                    </text>

                    {/* Sub-nodes */}
                    <line x1="550" y1="120" x2="450" y2="50" stroke="hsl(var(--chart-2))" strokeWidth="1.5" />
                    <rect x="400" y="30" width="100" height="40" fill="hsl(var(--muted))" rx="6" />
                    <text x="450" y="55" textAnchor="middle" fontSize="11">
                      Co giãn cầu
                    </text>

                    <line x1="550" y1="120" x2="650" y2="50" stroke="hsl(var(--chart-2))" strokeWidth="1.5" />
                    <rect x="600" y="30" width="100" height="40" fill="hsl(var(--muted))" rx="6" />
                    <text x="650" y="55" textAnchor="middle" fontSize="11">
                      Co giãn cung
                    </text>
                  </g>

                  {/* Branch 3: Thị trường */}
                  <g>
                    <line x1="400" y1="330" x2="250" y2="450" stroke="hsl(var(--primary))" strokeWidth="2" />
                    <rect x="200" y="420" width="100" height="60" fill="hsl(var(--chart-3))" rx="8" />
                    <text x="250" y="455" textAnchor="middle" fill="white" fontSize="12">
                      Thị trường
                    </text>

                    {/* Sub-nodes */}
                    <line x1="250" y1="480" x2="150" y2="550" stroke="hsl(var(--chart-3))" strokeWidth="1.5" />
                    <rect x="100" y="530" width="100" height="40" fill="hsl(var(--muted))" rx="6" />
                    <text x="150" y="555" textAnchor="middle" fontSize="11">
                      Cân bằng
                    </text>

                    <line x1="250" y1="480" x2="350" y2="550" stroke="hsl(var(--chart-3))" strokeWidth="1.5" />
                    <rect x="300" y="530" width="100" height="40" fill="hsl(var(--muted))" rx="6" />
                    <text x="350" y="555" textAnchor="middle" fontSize="11">
                      Thặng dư
                    </text>
                  </g>

                  {/* Branch 4: Chi phí */}
                  <g>
                    <line x1="400" y1="330" x2="550" y2="450" stroke="hsl(var(--primary))" strokeWidth="2" />
                    <rect x="500" y="420" width="100" height="60" fill="hsl(var(--chart-4))" rx="8" />
                    <text x="550" y="455" textAnchor="middle" fill="white" fontSize="12">
                      Chi phí
                    </text>

                    {/* Sub-nodes */}
                    <line x1="550" y1="480" x2="450" y2="550" stroke="hsl(var(--chart-4))" strokeWidth="1.5" />
                    <rect x="400" y="530" width="100" height="40" fill="hsl(var(--muted))" rx="6" />
                    <text x="450" y="555" textAnchor="middle" fontSize="11">
                      Chi phí cơ hội
                    </text>

                    <line x1="550" y1="480" x2="650" y2="550" stroke="hsl(var(--chart-4))" strokeWidth="1.5" />
                    <rect x="600" y="530" width="100" height="40" fill="hsl(var(--muted))" rx="6" />
                    <text x="650" y="555" textAnchor="middle" fontSize="11">
                      Chi phí sản xuất
                    </text>
                  </g>
                </svg>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
