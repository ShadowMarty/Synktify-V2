import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const testimonials = [
  {
    name: "Alice Johnson",
    role: "Social Media Manager",
    content: "This platform has revolutionized how I manage multiple social media accounts. It's a game-changer!",
    avatar: "/avatars/alice.jpg",
  },
  {
    name: "Bob Smith",
    role: "Digital Marketer",
    content: "The unified inbox and AI assistant have saved me hours of work every week. Highly recommended!",
    avatar: "/avatars/bob.jpg",
  },
  {
    name: "Carol Williams",
    role: "Content Creator",
    content: "I love how easy it is to customize the interface. It feels like the app was made just for me!",
    avatar: "/avatars/carol.jpg",
  },
]

export function Testimonials() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-12">What Our Users Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <div className="flex items-center space-x-4">
                <Avatar>
                  <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                  <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle>{testimonial.name}</CardTitle>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">{testimonial.content}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

