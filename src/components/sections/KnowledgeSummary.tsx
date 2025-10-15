import { FileText, Download, Share2, Sparkles } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

const summaries = [
  {
    id: 1,
    title: "Tổng hợp: Kinh tế học vi mô - Chương 1-5",
    material: "Kinh tế học vi mô",
    keyPoints: 15,
    generatedAt: "Hôm nay",
    content: `
      <h4>Các điểm chính:</h4>
      <ul>
        <li>Cung và cầu là hai yếu tố cơ bản quyết định giá cả thị trường</li>
        <li>Độ co giãn của cầu đo lường mức độ phản ứng của lượng cầu khi giá thay đổi</li>
        <li>Thặng dư người tiêu dùng phản ánh lợi ích mà người mua nhận được</li>
        <li>Chi phí cơ hội là giá trị của lựa chọn tốt nhất tiếp theo bị bỏ qua</li>
      </ul>
    `,
  },
  {
    id: 2,
    title: "Tổng hợp: Quản trị học - Phần 1",
    material: "Quản trị học",
    keyPoints: 12,
    generatedAt: "Hôm qua",
    content: `
      <h4>Các điểm chính:</h4>
      <ul>
        <li>Quản trị là quá trình hoạch định, tổ chức, lãnh đạo và kiểm soát</li>
        <li>Các cấp quản trị: chiến lược, chiến thuật, và tác nghiệp</li>
        <li>Vai trò của nhà quản trị bao gồm vai trò thông tin, quyết định và giao tiếp</li>
      </ul>
    `,
  },
  {
    id: 3,
    title: "Tổng hợp: Tài chính doanh nghiệp - Chương 6-8",
    material: "Tài chính doanh nghiệp",
    keyPoints: 18,
    generatedAt: "2 ngày trước",
    content: `
      <h4>Các điểm chính:</h4>
      <ul>
        <li>Tỷ số tài chính giúp đánh giá hiệu quả hoạt động doanh nghiệp</li>
        <li>ROE, ROA, và ROI là các chỉ số quan trọng đánh giá khả năng sinh lời</li>
        <li>Phân tích dòng tiền giúp đánh giá tính thanh khoản</li>
      </ul>
    `,
  },
];

export function KnowledgeSummary() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1>Tổng hợp kiến thức</h1>
          <p className="text-muted-foreground">Tóm tắt thông minh từ AI giúp bạn ôn tập hiệu quả</p>
        </div>
        <Button>
          <Sparkles className="h-4 w-4 mr-2" />
          Tạo tóm tắt mới
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Summaries List */}
        <div className="lg:col-span-1 space-y-3">
          {summaries.map((summary) => (
            <Card 
              key={summary.id} 
              className="cursor-pointer hover:shadow-md transition-shadow"
            >
              <CardHeader className="pb-3">
                <div className="flex items-start gap-3">
                  <div className="h-10 w-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <FileText className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <CardTitle className="text-base line-clamp-2">{summary.title}</CardTitle>
                    <CardDescription className="mt-1">{summary.material}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">{summary.keyPoints} điểm chính</span>
                  <span className="text-muted-foreground">{summary.generatedAt}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Summary Detail */}
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
                    <Badge>{summaries[0].keyPoints} điểm chính</Badge>
                  </div>
                  <CardTitle>{summaries[0].title}</CardTitle>
                  <CardDescription className="mt-2">{summaries[0].material}</CardDescription>
                </div>
                <div className="flex gap-2">
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
              <Tabs defaultValue="summary">
                <TabsList className="mb-4">
                  <TabsTrigger value="summary">Tóm tắt</TabsTrigger>
                  <TabsTrigger value="detailed">Chi tiết</TabsTrigger>
                </TabsList>
                
                <TabsContent value="summary" className="space-y-4">
                  <div className="prose prose-sm max-w-none">
                    <h4>Các điểm chính:</h4>
                    <ul className="space-y-2">
                      <li>Cung và cầu là hai yếu tố cơ bản quyết định giá cả thị trường. Khi cung tăng và cầu giảm, giá sẽ giảm và ngược lại.</li>
                      <li>Độ co giãn của cầu đo lường mức độ phản ứng của lượng cầu khi giá thay đổi. Hàng hóa thiết yếu thường có độ co giãn thấp.</li>
                      <li>Thặng dư người tiêu dùng phản ánh lợi ích mà người mua nhận được khi mua hàng với giá thấp hơn mức họ sẵn sàng trả.</li>
                      <li>Chi phí cơ hội là giá trị của lựa chọn tốt nhất tiếp theo bị bỏ qua khi đưa ra quyết định kinh tế.</li>
                      <li>Cân bằng thị trường đạt được khi lượng cung bằng lượng cầu tại một mức giá nhất định.</li>
                    </ul>

                    <h4 className="mt-6">Công thức quan trọng:</h4>
                    <ul className="space-y-2">
                      <li>Độ co giãn của cầu = (% thay đổi lượng cầu) / (% thay đổi giá)</li>
                      <li>Thặng dư người tiêu dùng = Giá sẵn sàng trả - Giá thực tế</li>
                    </ul>

                    <h4 className="mt-6">Ví dụ thực tế:</h4>
                    <p>Khi giá xăng tăng, nhu cầu về xe điện tăng lên - đây là ví dụ về hàng hóa thay thế. Ngược lại, khi giá xe ô tô giảm, nhu cầu về xăng tăng - đây là ví dụ về hàng hóa bổ sung.</p>
                  </div>
                </TabsContent>

                <TabsContent value="detailed" className="space-y-4">
                  <div className="prose prose-sm max-w-none">
                    <h4>Chương 1: Giới thiệu Kinh tế học</h4>
                    <p>Kinh tế học là khoa học nghiên cứu cách thức con người và xã hội đưa ra quyết định phân bổ các nguồn lực khan hiếm giữa các nhu cầu cạnh tranh...</p>
                    
                    <h4 className="mt-6">Chương 2: Cung và Cầu</h4>
                    <p>Cung và cầu là nền tảng của kinh tế thị trường. Đường cầu thể hiện mối quan hệ giữa giá và lượng mà người tiêu dùng muốn mua...</p>

                    <h4 className="mt-6">Chương 3: Độ co giãn</h4>
                    <p>Độ co giãn đo lường mức độ nhạy cảm của một biến số khi biến số khác thay đổi. Có ba loại chính: co giãn của cầu, co giãn của cung, và co giãn chéo...</p>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
