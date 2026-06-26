import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Sparkles, Palette, Gem, Heart, Brush, Hand } from "lucide-react"

const services = [
  {
    icon: Hand,
    title: "Классический маникюр",
    description:
      "Аккуратная обработка ногтей и кутикулы, придание формы и идеальное покрытие. Ваши ручки будут выглядеть ухоженно и естественно каждый день.",
  },
  {
    icon: Sparkles,
    title: "Покрытие гель-лаком",
    description:
      "Стойкое покрытие, которое держится до 3-4 недель без сколов. Более 200 оттенков на выбор — от нежных нюдов до ярких трендовых цветов.",
  },
  {
    icon: Palette,
    title: "Дизайн ногтей",
    description:
      "Художественная роспись, втирка, френч, омбре и модные принты. Воплотим любую вашу идею или подберём дизайн под образ и настроение.",
  },
  {
    icon: Gem,
    title: "Наращивание",
    description:
      "Моделирование ногтей любой длины и формы гелем или акрилом. Прочные, естественные и красивые ноготки, которые держатся неделями.",
  },
  {
    icon: Heart,
    title: "Уход и SPA",
    description:
      "Питательные ванночки, массаж рук и парафинотерапия. Забота не только о красоте, но и о здоровье ваших ногтей и кожи.",
  },
  {
    icon: Brush,
    title: "Коррекция и ремонт",
    description:
      "Быстро восстановим повреждённый ноготь или обновим покрытие. Аккуратно, бережно и без вреда для натуральной ногтевой пластины.",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 animate-pulse" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="inline-block mb-4 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mx-auto block w-fit">
          Наши услуги
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 text-balance">
          Что мы <span className="text-primary">умеем</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto text-pretty leading-relaxed text-lg">
          От ухоженного классического маникюра до самого смелого дизайна — мы создаём красоту, которой хочется любоваться.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:border-primary transition-all duration-300 hover:shadow-xl hover:-translate-y-2 bg-background/50 backdrop-blur-sm"
            >
              <CardHeader>
                <div className="mb-4 inline-flex p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <service.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}