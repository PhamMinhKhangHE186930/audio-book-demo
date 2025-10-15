import { useState } from "react";
import { Brain, RotateCcw, ChevronLeft, ChevronRight, Check, X, Sparkles } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Progress } from "../ui/progress";

const flashcardSets = [
  {
    id: 1,
    title: "Kinh tế học vi mô - Chương 1-5",
    material: "Kinh tế học vi mô",
    totalCards: 45,
    masteredCards: 30,
    reviewingCards: 10,
    learningCards: 5,
  },
  {
    id: 2,
    title: "Quản trị học - Các khái niệm cơ bản",
    material: "Quản trị học",
    totalCards: 32,
    masteredCards: 20,
    reviewingCards: 8,
    learningCards: 4,
  },
  {
    id: 3,
    title: "Tài chính doanh nghiệp - Công thức quan trọng",
    material: "Tài chính doanh nghiệp",
    totalCards: 28,
    masteredCards: 18,
    reviewingCards: 6,
    learningCards: 4,
  },
];

const sampleCards = [
  {
    id: 1,
    question: "Độ co giãn của cầu là gì?",
    answer: "Độ co giãn của cầu là chỉ số đo lường mức độ phản ứng của lượng cầu khi giá cả thay đổi. Công thức: Ed = (% thay đổi lượng cầu) / (% thay đổi giá)",
  },
  {
    id: 2,
    question: "Thặng dư người tiêu dùng được tính như thế nào?",
    answer: "Thặng dư người tiêu dùng = Giá sẵn sàng trả - Giá thực tế. Đây là khoản lợi ích ròng mà người tiêu dùng nhận được khi mua hàng với giá thấp hơn mức họ sẵn sàng chi trả.",
  },
  {
    id: 3,
    question: "Định luật cung là gì?",
    answer: "Định luật cung phát biểu: Khi các yếu tố khác không đổi, nếu giá tăng thì lượng cung tăng và ngược lại. Điều này tạo ra mối quan hệ thuận chiều giữa giá và lượng cung.",
  },
];

export function Flashcards() {
  const [selectedSet, setSelectedSet] = useState(flashcardSets[0]);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [studyMode, setStudyMode] = useState(false);

  const currentCard = sampleCards[currentCardIndex];
  const progress = ((currentCardIndex + 1) / sampleCards.length) * 100;

  const handleNext = () => {
    if (currentCardIndex < sampleCards.length - 1) {
      setCurrentCardIndex(currentCardIndex + 1);
      setIsFlipped(false);
    }
  };

  const handlePrevious = () => {
    if (currentCardIndex > 0) {
      setCurrentCardIndex(currentCardIndex - 1);
      setIsFlipped(false);
    }
  };

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  if (!studyMode) {
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1>Flashcards</h1>
            <p className="text-muted-foreground">Luyện tập và ghi nhớ kiến thức hiệu quả</p>
          </div>
          <Button>
            <Sparkles className="h-4 w-4 mr-2" />
            Tạo flashcards mới
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {flashcardSets.map((set) => (
            <Card key={set.id} className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-start gap-3">
                  <div className="h-10 w-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <Brain className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <CardTitle className="text-base line-clamp-2">{set.title}</CardTitle>
                    <p className="text-sm text-muted-foreground mt-1">{set.material}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span>Tiến độ học</span>
                    <span>{Math.round((set.masteredCards / set.totalCards) * 100)}%</span>
                  </div>
                  <Progress value={(set.masteredCards / set.totalCards) * 100} />
                </div>

                <div className="grid grid-cols-3 gap-2 text-center text-sm">
                  <div>
                    <div className="text-green-600">{set.masteredCards}</div>
                    <div className="text-muted-foreground">Đã thuộc</div>
                  </div>
                  <div>
                    <div className="text-yellow-600">{set.reviewingCards}</div>
                    <div className="text-muted-foreground">Đang ôn</div>
                  </div>
                  <div>
                    <div className="text-blue-600">{set.learningCards}</div>
                    <div className="text-muted-foreground">Đang học</div>
                  </div>
                </div>

                <Button 
                  className="w-full" 
                  onClick={() => {
                    setSelectedSet(set);
                    setStudyMode(true);
                    setCurrentCardIndex(0);
                    setIsFlipped(false);
                  }}
                >
                  Bắt đầu học
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Button variant="outline" onClick={() => setStudyMode(false)}>
            <ChevronLeft className="h-4 w-4 mr-2" />
            Quay lại
          </Button>
          <div>
            <h2>{selectedSet.title}</h2>
            <p className="text-sm text-muted-foreground">{selectedSet.material}</p>
          </div>
        </div>
        <Badge variant="secondary">
          {currentCardIndex + 1} / {sampleCards.length}
        </Badge>
      </div>

      <div className="space-y-2">
        <Progress value={progress} />
        <p className="text-sm text-muted-foreground text-center">
          Tiến độ: {Math.round(progress)}%
        </p>
      </div>

      <div 
        className="relative h-96 cursor-pointer perspective-1000"
        onClick={handleFlip}
      >
        <div 
          className={`w-full h-full transition-transform duration-500 transform-style-3d ${
            isFlipped ? 'rotate-y-180' : ''
          }`}
          style={{
            transformStyle: 'preserve-3d',
            transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0)',
          }}
        >
          {/* Front of card */}
          <Card 
            className="absolute inset-0 backface-hidden"
            style={{ backfaceVisibility: 'hidden' }}
          >
            <CardContent className="h-full flex flex-col items-center justify-center p-8">
              <Badge variant="secondary" className="mb-4">Câu hỏi</Badge>
              <p className="text-center text-xl">{currentCard.question}</p>
              <p className="text-sm text-muted-foreground mt-6">Nhấn để xem câu trả lời</p>
            </CardContent>
          </Card>

          {/* Back of card */}
          <Card 
            className="absolute inset-0 bg-primary/5"
            style={{ 
              backfaceVisibility: 'hidden',
              transform: 'rotateY(180deg)',
            }}
          >
            <CardContent className="h-full flex flex-col items-center justify-center p-8">
              <Badge variant="secondary" className="mb-4">Câu trả lời</Badge>
              <p className="text-center">{currentCard.answer}</p>
              <p className="text-sm text-muted-foreground mt-6">Nhấn để xem câu hỏi</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {isFlipped && (
        <div className="flex items-center justify-center gap-4">
          <Button variant="outline" size="lg" className="gap-2">
            <X className="h-5 w-5" />
            Chưa thuộc
          </Button>
          <Button size="lg" className="gap-2">
            <Check className="h-5 w-5" />
            Đã thuộc
          </Button>
        </div>
      )}

      <div className="flex items-center justify-between">
        <Button
          variant="outline"
          onClick={handlePrevious}
          disabled={currentCardIndex === 0}
        >
          <ChevronLeft className="h-4 w-4 mr-2" />
          Thẻ trước
        </Button>

        <Button variant="outline" onClick={() => {
          setCurrentCardIndex(0);
          setIsFlipped(false);
        }}>
          <RotateCcw className="h-4 w-4 mr-2" />
          Học lại từ đầu
        </Button>

        <Button
          variant="outline"
          onClick={handleNext}
          disabled={currentCardIndex === sampleCards.length - 1}
        >
          Thẻ tiếp theo
          <ChevronRight className="h-4 w-4 ml-2" />
        </Button>
      </div>
    </div>
  );
}
