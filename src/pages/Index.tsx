import { useState } from "react";
import Header from "@/components/Header";
import CategoryFilter from "@/components/CategoryFilter";
import DiscussionCard from "@/components/DiscussionCard";
import CreateDiscussionModal from "@/components/CreateDiscussionModal";
import { Discussion } from "@/types/discussion";

const Index = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("Все");

  const categories = [
    "Все",
    "Технологии",
    "Наука",
    "Образование",
    "Хобби",
    "Спорт",
    "Путешествия",
  ];

  const [discussions, setDiscussions] = useState<Discussion[]>([
    {
      id: "1",
      title:
        "Как искусственный интеллект изменит нашу жизнь в ближайшие 10 лет?",
      content:
        "Обсуждаем перспективы развития ИИ и его влияние на различные сферы жизни. Какие изменения вы ожидаете?",
      author: "Анна Волкова",
      category: "Технологии",
      createdAt: new Date("2024-01-15T10:30:00"),
      commentsCount: 23,
      likesCount: 45,
      isLiked: false,
    },
    {
      id: "2",
      title: "Лучшие места для зимнего отдыха в России",
      content:
        "Поделитесь своими впечатлениями о зимних курортах и горнолыжных склонах. Куда стоит поехать этой зимой?",
      author: "Максим Петров",
      category: "Путешествия",
      createdAt: new Date("2024-01-14T15:45:00"),
      commentsCount: 18,
      likesCount: 32,
      isLiked: true,
    },
    {
      id: "3",
      title: "Эффективные методы изучения иностранных языков",
      content:
        "Какие приложения, курсы и методики помогают быстро освоить новый язык? Делимся опытом и советами.",
      author: "Елена Смирнова",
      category: "Образование",
      createdAt: new Date("2024-01-13T09:20:00"),
      commentsCount: 31,
      likesCount: 67,
      isLiked: false,
    },
    {
      id: "4",
      title: "Домашнее выращивание микрозелени: с чего начать?",
      content:
        "Интересуюсь выращиванием микрозелени дома. Какие сорта лучше выбрать новичку и какое оборудование нужно?",
      author: "Дмитрий Козлов",
      category: "Хобби",
      createdAt: new Date("2024-01-12T14:10:00"),
      commentsCount: 12,
      likesCount: 28,
      isLiked: false,
    },
  ]);

  const filteredDiscussions =
    activeCategory === "Все"
      ? discussions
      : discussions.filter((d) => d.category === activeCategory);

  const handleCreateDiscussion = (data: {
    title: string;
    content: string;
    category: string;
    author: string;
  }) => {
    const newDiscussion: Discussion = {
      id: Date.now().toString(),
      ...data,
      createdAt: new Date(),
      commentsCount: 0,
      likesCount: 0,
      isLiked: false,
    };
    setDiscussions([newDiscussion, ...discussions]);
  };

  const handleLike = (id: string) => {
    setDiscussions(
      discussions.map((d) =>
        d.id === id
          ? {
              ...d,
              isLiked: !d.isLiked,
              likesCount: d.isLiked ? d.likesCount - 1 : d.likesCount + 1,
            }
          : d,
      ),
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onCreateClick={() => setIsModalOpen(true)} />

      <main className="max-w-4xl mx-auto px-6 py-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Активные обсуждения
          </h2>
          <p className="text-gray-600">
            Присоединяйтесь к беседам или создайте новую тему
          </p>
        </div>

        <CategoryFilter
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />

        <div className="space-y-4">
          {filteredDiscussions.map((discussion) => (
            <DiscussionCard
              key={discussion.id}
              discussion={discussion}
              onLike={handleLike}
            />
          ))}
        </div>

        {filteredDiscussions.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 mb-4">
              В этой категории пока нет тем для обсуждения
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="text-primary hover:text-primary/80 font-medium"
            >
              Создайте первую тему
            </button>
          </div>
        )}
      </main>

      <CreateDiscussionModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        categories={categories}
        onSubmit={handleCreateDiscussion}
      />
    </div>
  );
};

export default Index;
