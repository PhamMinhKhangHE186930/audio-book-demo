import { useState } from "react";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import { LearningMaterials } from "./sections/LearningMaterials";
import { AudioLibrary } from "./sections/AudioLibrary";
import { KnowledgeSummary } from "./sections/KnowledgeSummary";
import { Flashcards } from "./sections/Flashcards";
import { Mindmaps } from "./sections/Mindmaps";
import { LearningProgress } from "./sections/LearningProgress";

export type Section = "materials" | "audio" | "summary" | "flashcards" | "mindmaps" | "progress";

export function Dashboard() {
  const [activeSection, setActiveSection] = useState<Section>("materials");
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const renderSection = () => {
    switch (activeSection) {
      case "materials":
        return <LearningMaterials />;
      case "audio":
        return <AudioLibrary />;
      case "summary":
        return <KnowledgeSummary />;
      case "flashcards":
        return <Flashcards />;
      case "mindmaps":
        return <Mindmaps />;
      case "progress":
        return <LearningProgress />;
      default:
        return <LearningMaterials />;
    }
  };

  return (
    <div className="flex h-full bg-background">
      <Sidebar 
        activeSection={activeSection} 
        setActiveSection={setActiveSection}
        isOpen={sidebarOpen}
        setIsOpen={setSidebarOpen}
      />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
        <main className="flex-1 overflow-y-auto p-6">
          {renderSection()}
        </main>
      </div>
    </div>
  );
}
