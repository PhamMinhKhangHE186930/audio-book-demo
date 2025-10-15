import { BookOpen, Clock, FileText, MoreVertical, Play } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Progress } from "../ui/progress";

const materials = [
  {
    id: 1,
    title: "Kinh tế học vi mô",
    subject: "Kinh tế",
    chapters: 12,
    progress: 65,
    lastAccessed: "2 giờ trước",
    duration: "8h 45m",
  },
  {
    id: 2,
    title: "Quản trị học",
    subject: "Quản trị",
    chapters: 15,
    progress: 30,
    lastAccessed: "1 ngày trước",
    duration: "10h 20m",
  },
  {
    id: 3,
    title: "Tài chính doanh nghiệp",
    subject: "Tài chính",
    chapters: 10,
    progress: 90,
    lastAccessed: "3 giờ trước",
    duration: "6h 15m",
  },
  {
    id: 4,
    title: "Marketing căn bản",
    subject: "Marketing",
    chapters: 8,
    progress: 15,
    lastAccessed: "2 ngày trước",
    duration: "5h 30m",
  },
];

const recentUploads = [
  {
    id: 1,
    title: "Kế toán quản trị.pdf",
    uploadedAt: "10 phút trước",
    status: "Đang xử lý",
    progress: 45,
  },
  {
    id: 2,
    title: "Thống kê kinh doanh.docx",
    uploadedAt: "1 giờ trước",
    status: "Hoàn thành",
    progress: 100,
  },
];

export function LearningMaterials() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1>Tài liệu học tập</h1>
          <p className="text-muted-foreground">Quản lý và nghe các giáo trình của bạn</p>
        </div>
        <Button>
          <FileText className="h-4 w-4 mr-2" />
          Tải lên tài liệu
        </Button>
      </div>

      {/* Recently Uploaded */}
      {recentUploads.length > 0 && (
        <div className="space-y-3">
          <h3>Đang xử lý</h3>
          {recentUploads.map((upload) => (
            <Card key={upload.id}>
              <CardContent className="p-4">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3 flex-1">
                    <div className="h-10 w-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <FileText className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="truncate">{upload.title}</p>
                      <p className="text-sm text-muted-foreground">{upload.uploadedAt}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-32">
                      <Progress value={upload.progress} />
                    </div>
                    <Badge variant={upload.status === "Hoàn thành" ? "default" : "secondary"}>
                      {upload.status}
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/* Materials Grid */}
      <div>
        <h3 className="mb-4">Thư viện của tôi</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {materials.map((material) => (
            <Card key={material.id} className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="h-10 w-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <BookOpen className="h-5 w-5 text-primary" />
                  </div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>Xem chi tiết</DropdownMenuItem>
                      <DropdownMenuItem>Tải xuống</DropdownMenuItem>
                      <DropdownMenuItem>Chia sẻ</DropdownMenuItem>
                      <DropdownMenuItem className="text-destructive">Xóa</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
                <CardTitle className="line-clamp-2 mt-3">{material.title}</CardTitle>
                <CardDescription>{material.subject}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>{material.chapters} chương</span>
                  <span>{material.duration}</span>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center justify-between text-sm">
                    <span>Tiến độ</span>
                    <span>{material.progress}%</span>
                  </div>
                  <Progress value={material.progress} />
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="h-3 w-3" />
                  <span>{material.lastAccessed}</span>
                </div>
                <Button className="w-full" size="sm">
                  <Play className="h-4 w-4 mr-2" />
                  Tiếp tục học
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
