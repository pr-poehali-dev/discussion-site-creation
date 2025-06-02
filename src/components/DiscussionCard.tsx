import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Discussion } from "@/types/discussion";

interface DiscussionCardProps {
  discussion: Discussion;
  onLike: (id: string) => void;
}

const DiscussionCard = ({ discussion, onLike }: DiscussionCardProps) => {
  const formatDate = (date: Date) => {
    return date.toLocaleDateString("ru-RU", {
      day: "numeric",
      month: "short",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <Card className="p-6 hover:shadow-md transition-all duration-200 animate-fade-in cursor-pointer group">
      <div className="space-y-4">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <span className="inline-block px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                {discussion.category}
              </span>
              <span className="text-sm text-gray-500">•</span>
              <span className="text-sm text-gray-500">
                {formatDate(discussion.createdAt)}
              </span>
            </div>

            <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary transition-colors duration-200 mb-2">
              {discussion.title}
            </h3>

            <p className="text-gray-600 text-sm line-clamp-2 mb-3">
              {discussion.content}
            </p>

            <div className="flex items-center text-sm text-gray-500">
              <Icon name="User" size={14} className="mr-1" />
              <span>{discussion.author}</span>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between pt-3 border-t border-gray-100">
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={(e) => {
                e.stopPropagation();
                onLike(discussion.id);
              }}
              className={`px-3 py-1 h-auto ${
                discussion.isLiked
                  ? "text-red-600 hover:text-red-700"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              <Icon
                name={discussion.isLiked ? "Heart" : "Heart"}
                size={16}
                className={`mr-1 ${discussion.isLiked ? "fill-current" : ""}`}
              />
              <span className="text-sm">{discussion.likesCount}</span>
            </Button>

            <div className="flex items-center text-gray-500">
              <Icon name="MessageSquare" size={16} className="mr-1" />
              <span className="text-sm">
                {discussion.commentsCount} комментариев
              </span>
            </div>
          </div>

          <Button
            variant="ghost"
            size="sm"
            className="text-primary hover:text-primary/80"
          >
            <span className="text-sm font-medium">Читать далее</span>
            <Icon name="ArrowRight" size={14} className="ml-1" />
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default DiscussionCard;
