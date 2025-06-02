import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface HeaderProps {
  onCreateClick: () => void;
}

const Header = ({ onCreateClick }: HeaderProps) => {
  return (
    <header className="border-b border-gray-200 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Icon name="MessageSquare" size={20} className="text-white" />
            </div>
            <h1 className="text-xl font-semibold text-gray-900">
              Форум обсуждений
            </h1>
          </div>

          <Button
            onClick={onCreateClick}
            className="bg-primary hover:bg-primary/90 text-white px-6"
          >
            <Icon name="Plus" size={16} className="mr-2" />
            Создать тему
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
