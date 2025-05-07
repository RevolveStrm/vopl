import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Book, Users, Flame, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#242423] text-white">
      {/* Navbar */}
      <header className="border-b border-[#581717]/50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Flame className="h-6 w-6 text-[#9b2929]" />
            <span className="font-bold text-xl">
              <span className="text-[#9b2929]">V</span>OPL
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="#about"
              className="hover:text-[#9b2929] transition-colors"
            >
              About
            </Link>
            <Link
              href="#authors"
              className="hover:text-[#9b2929] transition-colors"
            >
              Authors
            </Link>
            <Link
              href="#features"
              className="hover:text-[#9b2929] transition-colors"
            >
              Features
            </Link>
          </nav>
          <div className="flex items-center gap-2">
            {/* <Button
              variant="outline"
              className="border-[#581717] hover:bg-[#581717] hover:text-white"
            >
              <Globe className="h-4 w-4 mr-2" />
              <span>UA</span>
              <ChevronDown className="h-4 w-4 ml-1" />
            </Button> */}
            <Button
              className="bg-[#9b2929] hover:bg-[#581717] text-white"
              disabled
            >
              Play Now
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#242423] via-[#581717]/70 to-[#242423] z-10"></div>
          <Image
            src="/assets/images/bg.png?height=1080&width=1920"
            alt="Notre Dame Cathedral"
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>
        <div className="container mx-auto px-4 relative z-10 py-5">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-10 text-white">
              <span className="text-[#9b2929]">Voice</span> of the Parisian
              Legend
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Shape the destiny of Notre Dame's characters in this interactive
              story experience
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* <Button className="bg-[#9b2929] hover:bg-[#581717] text-white text-lg py-6 px-8">
                Start Your Journey
              </Button>
              <Button
                variant="outline"
                className="border-[#581717] hover:bg-[#581717] hover:text-white text-lg py-6 px-8"
              >
                Watch Trailer
              </Button> */}
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#242423] to-transparent"></div>
      </section>

      {/* About Game Section */}
      <section id="about" className="py-20 bg-[#242423]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="text-[#9b2929]">Rewrite</span> the Story of
                Notre Dame
              </h2>
              <p className="text-gray-300 mb-6">
                "Voice of the Parisian Legend" is an interactive story based on
                Victor Hugo's "The Hunchback of Notre Dame" where your choices
                shape the narrative. Experience the world of medieval Paris
                through the eyes of its iconic characters.
              </p>
              <p className="text-gray-300 mb-6">
                Those unfamiliar with the novel can gradually discover its
                world, while those who have read it can make their own changes
                and see alternative developments.
              </p>
              <div className="flex flex-wrap gap-4 mt-8">
                <div className="flex items-center gap-2 bg-[#581717]/30 px-4 py-2 rounded-md">
                  <Book className="h-5 w-5 text-[#9b2929]" />
                  <span>Multiple Endings</span>
                </div>
                <div className="flex items-center gap-2 bg-[#581717]/30 px-4 py-2 rounded-md">
                  <Globe className="h-5 w-5 text-[#9b2929]" />
                  <span>3 Languages</span>
                </div>
                <div className="flex items-center gap-2 bg-[#581717]/30 px-4 py-2 rounded-md">
                  <Flame className="h-5 w-5 text-[#9b2929]" />
                  <span>Atmospheric Audio</span>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 relative">
              <div className="aspect-[4/3] relative rounded-lg overflow-hidden border-4 border-[#581717]">
                <Image
                  src="/assets/images/gmpfr.jpg?height=800&width=1067"
                  alt="Game Screenshot"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-2/3 aspect-[4/3] rounded-lg overflow-hidden border-4 border-[#581717]">
                <Image
                  src="/assets/images/gmpft.jpg?height=600&width=800"
                  alt="Game Screenshot"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Authors Section */}
      <section id="authors" className="py-20 bg-[#581717]/20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            <span className="text-[#9b2929]">Meet</span> the Authors
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-[#242423] border border-[#581717] rounded-lg overflow-hidden">
              <div>
                <div className="flex items-center text-[#9b2929] p-4">
                  <Users className="h-5 w-5 mr-2" />
                  <span className="text-sm">Visual Design & Audio</span>
                </div>
                <div className="aspect-[3/2] relative">
                  <Image
                    src="/assets/images/an.jpeg?height=600&width=900"
                    alt="Polianska Anastasiia"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">
                    Polianska Anastasiia
                  </h3>
                  <p className="text-gray-300 mb-4">
                    Responsible for the visual component: developed character
                    images, scene backgrounds, and handled the selection and
                    integration of musical accompaniment.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-[#242423] border border-[#581717] rounded-lg overflow-hidden">
              <div>
                <div className="flex items-center text-[#9b2929] p-4">
                  <Book className="h-5 w-5 mr-2" />
                  <span className="text-sm">Story & Translations</span>
                </div>
                <div className="aspect-[3/2] relative border border-[#581717] rounded-lg">
                  <Image
                    src="/assets/images/oln.jpg?height=600&width=900"
                    alt="Sville Olena"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Sville Olena</h3>
                  <p className="text-gray-300 mb-4">
                    Worked on the text content: created the plot, wrote choice
                    options, translated dialogues into different languages, and
                    developed branching logic.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-[#242423]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            <span className="text-[#9b2929]">Game</span> Features
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-b from-[#581717] to-[#242423] p-6 rounded-lg">
              <div className="w-12 h-12 bg-[#9b2929] rounded-full flex items-center justify-center mb-4">
                <Book className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">10 Episodes</h3>
              <p className="text-gray-300">
                The project consists of 10 episodes that logically and
                dramatically unfold events. Each episode is a complete
                mini-story with its own dramaturgy and moments of choice.
              </p>
            </div>
            <div className="bg-gradient-to-b from-[#581717] to-[#242423] p-6 rounded-lg">
              <div className="w-12 h-12 bg-[#9b2929] rounded-full flex items-center justify-center mb-4">
                <Flame className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">3 Endings</h3>
              <p className="text-gray-300">
                Each playthrough ends with one of three endings: a tragic
                ending, a happy ending, or the canonical ending from Victor
                Hugo's original novel.
              </p>
            </div>
            <div className="bg-gradient-to-b from-[#581717] to-[#242423] p-6 rounded-lg">
              <div className="w-12 h-12 bg-[#9b2929] rounded-full flex items-center justify-center mb-4">
                <Globe className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Multilingual</h3>
              <p className="text-gray-300">
                The interactive story is available in three languages:
                Ukrainian, English, and French, making it accessible to a wider
                audience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Characters Section */}
      <section className="py-20 bg-[#581717]/20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            <span className="text-[#9b2929]">Key</span> Characters
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="aspect-square relative rounded-full overflow-hidden border-4 border-[#581717] mb-4 mx-auto max-w-[200px]">
                <Image
                  src="/assets/images/esmir_happy.png?height=400&width=400"
                  alt="Esmeralda"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-1">Esmeralda</h3>
              <p className="text-[#9b2929]">The Gypsy Dancer</p>
            </div>
            <div className="text-center">
              <div className="aspect-square relative rounded-full overflow-hidden border-4 border-[#581717] mb-4 mx-auto max-w-[200px]">
                <Image
                  src="/assets/images/qsm.png?height=400&width=400"
                  alt="Quasimodo"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-1">Quasimodo</h3>
              <p className="text-[#9b2929]">The Bell Ringer</p>
            </div>
            <div className="text-center">
              <div className="aspect-square relative rounded-full overflow-hidden border-4 border-[#581717] mb-4 mx-auto max-w-[200px]">
                <Image
                  src="/assets/images/frollo.png?height=400&width=400"
                  alt="Frollo"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-1">Frollo</h3>
              <p className="text-[#9b2929]">The Archdeacon</p>
            </div>
            <div className="text-center">
              <div className="aspect-square relative rounded-full overflow-hidden border-4 border-[#581717] mb-4 mx-auto max-w-[200px]">
                <Image
                  src="/assets/images/feb.png?height=400&width=400"
                  alt="Phoebus"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-1">Phoebus</h3>
              <p className="text-[#9b2929]">The Captain</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-[#242423] relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#242423] via-[#581717]/50 to-[#242423] z-10"></div>
          <Image
            src="/assets/images/bg.png?height=1080&width=1920"
            alt="Notre Dame Cathedral"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Begin Your <span className="text-[#9b2929]">Parisian Legend</span>
            </h2>
            <p className="text-xl mb-8 text-gray-300">
              Your choices will shape the fate of Notre Dame's most iconic
              characters. Will you follow the original story or forge a new
              path?
            </p>
            <Button
              className="bg-[#9b2929] hover:bg-[#581717] text-white text-lg py-6 px-8"
              disabled
            >
              Download Now
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#242423] border-t border-[#581717]/50 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <Flame className="h-6 w-6 text-[#9b2929]" />
              <span className="font-bold text-xl">
                <span className="text-[#9b2929]">V</span>OPL
              </span>
            </div>
            <div className="text-center md:text-right text-sm text-gray-400">
              <p>© 2025 Polianska Anastasiia & Sville Olena</p>
              <p>Created with Ren'Py & Python</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
