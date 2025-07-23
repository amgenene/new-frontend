import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Target, DollarSign, Heart, Trophy, Users, Zap, Mail, Twitter, Instagram, Linkedin } from "lucide-react"
import Image from "next/image"

export default function BetOnYouLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
              <Target className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">BetOnYou</span>
          </div>
          <Badge variant="secondary" className="bg-orange-100 text-orange-800 hover:bg-orange-200">
            Coming Soon
          </Badge>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Put your money where your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">goals are</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Join the waitlist for the app that rewards your discipline—or donates your money if you don't.
          </p>

          <div className="max-w-md mx-auto mb-12">
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 h-12 text-lg border-2 border-gray-200 focus:border-orange-500"
              />
              <Button
                size="lg"
                className="h-12 px-8 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold"
              >
                Join Waitlist
              </Button>
            </div>
            <p className="text-sm text-gray-500 mt-2">Be the first to know when we launch. No spam, ever.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-orange-500">1,247</div>
              <div className="text-gray-600">People waiting</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-red-500">$50K+</div>
              <div className="text-gray-600">Goals committed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-500">89%</div>
              <div className="text-gray-600">Success rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="container mx-auto px-4 py-16 bg-white/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Three simple steps to turn your goals into achievements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center border-2 border-orange-100 hover:border-orange-200 transition-colors">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">Set Your Goal</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Define your goal with a clear deadline. Whether it's fitness, learning, or habits—make it specific and
                  measurable.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-2 border-orange-100 hover:border-orange-200 transition-colors">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">Stake Your Money</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Put your money where your mouth is. Choose an amount that motivates you—it's your skin in the game.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-2 border-orange-100 hover:border-orange-200 transition-colors">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">Succeed or Donate</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Hit your goal and keep your money plus earn achievements. Miss it? Your stake goes to your chosen
                  charity.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why BetOnYou Works</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Powerful features designed to keep you accountable and motivated
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-2 border-gray-100 hover:border-orange-200 hover:shadow-lg transition-all">
              <CardHeader>
                <Trophy className="w-8 h-8 text-orange-500 mb-2" />
                <CardTitle className="text-lg">Goal Tracking</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Personalized dashboards with progress tracking, milestones, and smart reminders to keep you on track.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-100 hover:border-orange-200 hover:shadow-lg transition-all">
              <CardHeader>
                <Heart className="w-8 h-8 text-red-500 mb-2" />
                <CardTitle className="text-lg">Charity Integration</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Choose from verified charities. Your failed stakes become meaningful donations to causes you care
                  about.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-100 hover:border-orange-200 hover:shadow-lg transition-all">
              <CardHeader>
                <Zap className="w-8 h-8 text-yellow-500 mb-2" />
                <CardTitle className="text-lg">Achievements</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Unlock badges, build streaks, and level up. Gamified progress that makes achieving goals addictive.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-100 hover:border-orange-200 hover:shadow-lg transition-all">
              <CardHeader>
                <Users className="w-8 h-8 text-blue-500 mb-2" />
                <CardTitle className="text-lg">Community</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Join accountability groups, share progress, and get support from others on similar journeys.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="container mx-auto px-4 py-16 bg-white/50 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Early Users Say</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-2 border-orange-100">
              <CardContent className="pt-6">
                <div className="flex items-start space-x-4">
                  <Image
                    src="/placeholder.svg?height=60&width=60"
                    alt="Sarah Chen"
                    width={60}
                    height={60}
                    className="rounded-full"
                  />
                  <div>
                    <p className="text-gray-700 mb-4">
                      "Finally lost 20 pounds because I knew my money was on the line. The charity aspect made it feel
                      meaningful even when I struggled."
                    </p>
                    <div>
                      <div className="font-semibold text-gray-900">Sarah Chen</div>
                      <div className="text-sm text-gray-500">Beta Tester</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-orange-100">
              <CardContent className="pt-6">
                <div className="flex items-start space-x-4">
                  <Image
                    src="/placeholder.svg?height=60&width=60"
                    alt="Marcus Rodriguez"
                    width={60}
                    height={60}
                    className="rounded-full"
                  />
                  <div>
                    <p className="text-gray-700 mb-4">
                      "Completed my first marathon thanks to BetOnYou. Having real money at stake changed everything
                      about my commitment level."
                    </p>
                    <div>
                      <div className="font-semibold text-gray-900">Marcus Rodriguez</div>
                      <div className="text-sm text-gray-500">Beta Tester</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border border-gray-200 rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold">How does the money staking work?</AccordionTrigger>
              <AccordionContent className="text-gray-600">
                When you set a goal, you choose an amount to stake. This money is held securely until your deadline. If
                you achieve your goal, you get your money back plus earn achievements. If you don't meet your goal, the
                money is automatically donated to your pre-selected charity.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border border-gray-200 rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold">
                What happens to my money if I fail?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Your staked money goes directly to a verified charity of your choice. You select your preferred charity
                when setting up your goal, so even if you don't succeed, your money supports a cause you care about.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border border-gray-200 rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold">
                How do you verify goal completion?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                We use a combination of self-reporting, photo evidence, integration with fitness apps and wearables, and
                community verification depending on your goal type. Our system is designed to be flexible while
                maintaining accountability.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border border-gray-200 rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold">Is my money safe?</AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Absolutely. We use bank-level security and partner with established payment processors. Your staked
                money is held in secure, insured accounts and is only released according to the goal outcomes you agreed
                to.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border border-gray-200 rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold">When will BetOnYou be available?</AccordionTrigger>
              <AccordionContent className="text-gray-600">
                We're currently in beta testing with a select group of users. Join our waitlist to be among the first to
                access the full app when we launch publicly in early 2024.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="container mx-auto px-4 py-16 bg-gradient-to-r from-orange-500 to-red-500">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to bet on yourself?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of others who are turning their goals into achievements.
          </p>

          <div className="max-w-md mx-auto">
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 h-12 text-lg bg-white/10 border-white/20 text-white placeholder:text-white/70 focus:bg-white/20"
              />
              <Button size="lg" className="h-12 px-8 bg-white text-orange-500 hover:bg-gray-100 font-semibold">
                Join Waitlist
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                  <Target className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">BetOnYou</span>
              </div>
              <p className="text-gray-400 max-w-md">
                The accountability app that puts your money where your goals are. Turn discipline into achievement.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Connect</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 BetOnYou. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
