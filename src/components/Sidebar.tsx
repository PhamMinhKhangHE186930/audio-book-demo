import { BookOpen, Headphones, FileText, Brain, Network, TrendingUp, Upload, X } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "./ui/utils";
import type { Section } from "./Dashboard";

interface SidebarProps {
  activeSection: Section;
  setActiveSection: (section: Section) => void;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const menuItems = [
  { id: "materials" as Section, label: "Tài liệu học tập", icon: BookOpen },
  { id: "audio" as Section, label: "Thư viện Audio", icon: Headphones },
  { id: "summary" as Section, label: "Tổng hợp kiến thức", icon: FileText },
  { id: "flashcards" as Section, label: "Flashcards", icon: Brain },
  { id: "mindmaps" as Section, label: "Sơ đồ tư duy", icon: Network },
  { id: "progress" as Section, label: "Tiến độ học tập", icon: TrendingUp },
];

export function Sidebar({ activeSection, setActiveSection, isOpen, setIsOpen }: SidebarProps) {
  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside 
        className={cn(
          "fixed lg:static inset-y-0 left-0 z-50 w-64 bg-card border-r border-border flex flex-col transition-transform duration-300",
          isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        )}
      >
        <div className="p-6 border-b border-border flex items-center justify-between">
          <div className="flex items-center gap-2">
            {/* <div className="h-8 w-8 bg-primary rounded-lg flex items-center justify-center"> */}
              {/* <BookOpen className="h-5 w-5 text-primary-foreground" /> */}
              <img src="/logo.jpg" alt="Logo" style={{height: '40px', width: '40px', borderRadius: "5px"}} className="text-primary-foreground" />
            {/* </div> */}
            <span className="font-semibold">AudioBook</span>
          </div>
          <Button 
            variant="ghost" 
            size="icon" 
            className="lg:hidden"
            onClick={() => setIsOpen(false)}
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          <Button
            variant="default"
            className="w-full justify-start gap-2"
          >
            <Upload className="h-4 w-4" />
            Tải tài liệu mới
          </Button>

          <div className="pt-4 space-y-1">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <Button
                  key={item.id}
                  variant={activeSection === item.id ? "secondary" : "ghost"}
                  className="w-full justify-start gap-3"
                  onClick={() => {
                    setActiveSection(item.id);
                    if (window.innerWidth < 1024) {
                      setIsOpen(false);
                    }
                  }}
                >
                  <Icon className="h-4 w-4" />
                  {item.label}
                </Button>
              );
            })}
          </div>
        </nav>

        <div className="p-4 border-t border-border">
          <div className="bg-muted p-4 rounded-lg">
            <h4 className="mb-2">Nâng cấp Premium</h4>
            <p className="text-sm text-muted-foreground mb-3">
              Mở khóa tất cả tính năng AI và mindmap không giới hạn
            </p>
            <Button className="w-full" size="sm">
              Nâng cấp ngay
            </Button>
          </div>
        </div>
      </aside>
    </>
  );
}
