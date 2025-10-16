import { use, useEffect, useState } from "react";
import { Headphones, Play, Pause, SkipForward, SkipBack, Volume2, Download, Heart } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { Slider } from "../ui/slider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Badge } from "../ui/badge";
import { ScrollArea } from "../ui/scroll-area";

const audioFiles = {
  recent: [
    { id: 1, title: "Chương 5: Cung và cầu thị trường", material: "Kinh tế học vi mô", duration: "45:23", date: "Hôm nay" },
    { id: 2, title: "Chương 3: Các trường phái quản trị", material: "Quản trị học", duration: "38:15", date: "Hôm qua" },
    { id: 3, title: "Chương 8: Phân tích tài chính", material: "Tài chính doanh nghiệp", duration: "52:40", date: "2 ngày trước" },
  ],
  favorites: [
    { id: 4, title: "Chương 2: Hành vi người tiêu dùng", material: "Kinh tế học vi mô", duration: "41:18", favorite: true },
    { id: 5, title: "Chương 1: Giới thiệu Marketing", material: "Marketing căn bản", duration: "35:27", favorite: true },
  ],
};

const currentPlaying = {
  title: "Chương 5: Cung và cầu thị trường",
  material: "Kinh tế học vi mô",
  duration: "45:23",
  current: "15:32",
  progress: 34,
};

export function AudioLibrary() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState([75]);
  const [progress, setProgress] = useState(currentPlaying.progress);
  const [current, setCurrent] = useState(currentPlaying.current);

  const onChangeProgress = (value: number) => {
    setProgress(value);
    // Tính toán lại thời gian hiện tại dựa trên progress
    const [totalMins, totalSecs] = currentPlaying.duration.split(":").map((t) => parseInt(t));
    const totalDurationSec = totalMins * 60 + totalSecs;
    const currentSec = Math.floor((value / 100) * totalDurationSec);
    const currentMins = Math.floor(currentSec / 60);
    const currentRemainingSecs = currentSec % 60;
    setCurrent(`${currentMins}:${currentRemainingSecs < 10 ? "0" + currentRemainingSecs : currentRemainingSecs}`);
  }

  const onPlayAudio = () => {
    let interval: NodeJS.Timeout | null = null;

    if (isPlaying) {
      interval = setInterval(() => {
        // cập nhật current theo cách an toàn
        setCurrent((prev) => {
          let [minutes, seconds] = prev.split(":").map((t) => parseInt(t));
          seconds += 1;
          if (seconds >= 60) {
            minutes += 1;
            seconds = 0;
          }

          const [totalMins, totalSecs] = currentPlaying.duration.split(":").map((t) => parseInt(t));
          const totalDurationSec = totalMins * 60 + totalSecs;
          const totalSeconds = minutes * 60 + seconds;

          // nếu vượt quá thời lượng → dừng
          if (totalSeconds >= totalDurationSec) {
            setIsPlaying(false);
            setProgress(100);
            if (interval) clearInterval(interval);
            return currentPlaying.duration;
          }

          // cập nhật progress
          setProgress(Math.floor((totalSeconds / totalDurationSec) * 100));

          return `${minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
        });
      }, 1000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }

  useEffect(() => {
    onPlayAudio();
  }, [isPlaying])

  return (
    <div className="space-y-6">
      <div>
        <h1>Thư viện Audio</h1>
        <p className="text-muted-foreground">Nghe giáo trình mọi lúc, mọi nơi</p>
      </div>

      {/* Now Playing */}
      <Card className="bg-gradient-to-br from-primary/10 to-primary/5">
        <CardContent className="p-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-16 w-16 bg-primary rounded-lg flex items-center justify-center">
              <Headphones className="h-8 w-8 text-primary-foreground" />
            </div>
            <div className="flex-1">
              <h3>{currentPlaying.title}</h3>
              <p className="text-muted-foreground">{currentPlaying.material}</p>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon">
                <Heart className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Download className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <div className="space-y-2 mb-4">
            <Slider value={[progress]} onValueChange={onChangeProgress} max={100} step={1} />
            <div className="flex items-center justify-between text-sm text-muted-foreground">
              <span>{current}</span>
              <span>{currentPlaying.duration}</span>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 flex-1">
              <Volume2 className="h-4 w-4 text-muted-foreground" />
              <Slider
                value={volume}
                onValueChange={setVolume}
                max={100}
                step={1}
                className="w-24"
              />
            </div>

            <div className="flex items-center gap-2">
              <Button variant="outline" size="icon">
                <SkipBack className="h-4 w-4" />
              </Button>
              <Button
                size="icon"
                className="h-12 w-12"
                onClick={() => {
                  setIsPlaying(!isPlaying)
                  onPlayAudio();
                }}
              >
                {isPlaying ? (
                  <Pause className="h-5 w-5" />
                ) : (
                  <Play className="h-5 w-5 ml-0.5" />
                )}
              </Button>
              <Button variant="outline" size="icon">
                <SkipForward className="h-4 w-4" />
              </Button>
            </div>

            <div className="flex-1 flex justify-end gap-2">
              <Badge variant="secondary">1.0x</Badge>
              <Badge variant="secondary">Giọng Nam Bắc</Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Audio List */}
      <Card>
        <CardContent className="p-6">
          <Tabs defaultValue="recent">
            <TabsList className="mb-4">
              <TabsTrigger value="recent">Nghe gần đây</TabsTrigger>
              <TabsTrigger value="favorites">Yêu thích</TabsTrigger>
            </TabsList>

            <TabsContent value="recent">
              <ScrollArea className="h-96">
                <div className="space-y-2">
                  {audioFiles.recent.map((audio) => (
                    <div
                      key={audio.id}
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent transition-colors cursor-pointer"
                    >
                      <Button variant="ghost" size="icon" className="h-10 w-10">
                        <Play className="h-4 w-4" />
                      </Button>
                      <div className="flex-1 min-w-0">
                        <p className="truncate">{audio.title}</p>
                        <p className="text-sm text-muted-foreground">{audio.material}</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-sm text-muted-foreground">{audio.duration}</span>
                        <span className="text-sm text-muted-foreground">{audio.date}</span>
                        <Button variant="ghost" size="icon">
                          <Heart className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </TabsContent>

            <TabsContent value="favorites">
              <ScrollArea className="h-96">
                <div className="space-y-2">
                  {audioFiles.favorites.map((audio) => (
                    <div
                      key={audio.id}
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent transition-colors cursor-pointer"
                    >
                      <Button variant="ghost" size="icon" className="h-10 w-10">
                        <Play className="h-4 w-4" />
                      </Button>
                      <div className="flex-1 min-w-0">
                        <p className="truncate">{audio.title}</p>
                        <p className="text-sm text-muted-foreground">{audio.material}</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-sm text-muted-foreground">{audio.duration}</span>
                        <Button variant="ghost" size="icon">
                          <Heart className="h-4 w-4 fill-destructive text-destructive" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}
