import { Card, CardContent } from "@/components/ui/card"

const projects = [
  {
    title: "Нежный нюд",
    category: "Гель-лак",
    image: "https://cdn.poehali.dev/projects/e6b12aa3-acf4-41be-8604-6519a53fd059/files/50f3c27d-aaa7-4825-842a-17905ba207b1.jpg",
    description:
      "Классическое нюдовое покрытие для ухоженного и естественного образа. Идеально подходит на каждый день и под любой наряд.",
    tags: ["Гель-лак", "Нюд", "Классика"],
  },
  {
    title: "Изящный френч",
    category: "Дизайн",
    image: "https://cdn.poehali.dev/projects/e6b12aa3-acf4-41be-8604-6519a53fd059/files/421e16fa-f44f-4c4e-a550-38e8eab1361a.jpg",
    description:
      "Утончённый французский маникюр с глянцевыми белыми кончиками. Вечная классика, которая всегда смотрится элегантно.",
    tags: ["Френч", "Глянец", "Элегантность"],
  },
  {
    title: "Цветочный арт",
    category: "Художественная роспись",
    image: "https://cdn.poehali.dev/projects/e6b12aa3-acf4-41be-8604-6519a53fd059/files/3238a709-c0ae-495d-96a7-edf1d82071c1.jpg",
    description:
      "Нежные цветочные узоры с декором из страз. Яркое и праздничное решение для особенных случаев и торжеств.",
    tags: ["Роспись", "Стразы", "Дизайн"],
  },
  {
    title: "Мраморный минимализм",
    category: "Трендовый дизайн",
    image: "https://cdn.poehali.dev/projects/e6b12aa3-acf4-41be-8604-6519a53fd059/files/7ffee468-f314-4614-a76a-a9c26c68c171.jpg",
    description:
      "Модный нюд с тонкой мраморной текстурой. Стильное и сдержанное решение для тех, кто ценит современную эстетику.",
    tags: ["Мрамор", "Минимализм", "Тренд"],
  },
]

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-balance">Наши работы</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Загляните в нашу галерею — от нежной классики до яркого дизайна. Вдохновляйтесь и выбирайте идею для своего следующего маникюра.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-none shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <CardContent className="p-6">
                <p className="text-sm text-primary font-semibold mb-2">{project.category}</p>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}