import Link from "next/link"
import Image from "next/image"
import { MapPin, Plus, Search, ArrowRightLeft } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-950">
      <header className="sticky top-0 z-50 w-full border-b border-gray-800 bg-gray-900/80 backdrop-blur-sm">
        <div className="container flex h-16 items-center justify-between">
          <Link href="#" className="flex items-center space-x-2">
            <h1 className="text-2xl font-bold text-[#4d9fff]">CampusTrade</h1>
          </Link>
          <div className="hidden md:flex items-center space-x-4 flex-1 px-8">
            <div className="relative flex-1 max-w-sm">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search items..."
                className="pl-8 bg-gray-800 border-gray-700 text-gray-100 placeholder:text-gray-500"
              />
            </div>
            <Select>
              <SelectTrigger className="w-[160px] bg-gray-800 border-gray-700 text-gray-100">
                <SelectValue placeholder="All Categories" />
              </SelectTrigger>
              <SelectContent className="bg-gray-800 border-gray-700">
                <SelectItem value="textbooks" className="text-gray-100 hover:text-black hover:bg-gray-200">
                  Textbooks
                </SelectItem>
                <SelectItem value="electronics" className="text-gray-100 hover:text-black hover:bg-gray-200">
                  Electronics
                </SelectItem>
                <SelectItem value="furniture" className="text-gray-100 hover:text-black hover:bg-gray-200">
                  Furniture
                </SelectItem>
                <SelectItem value="clothing" className="text-gray-100 hover:text-black hover:bg-gray-200">
                  Clothing
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
          <nav className="flex items-center space-x-4">
            <Button variant="ghost" className="text-gray-100 hover:text-white hover:bg-gray-800">
              Sign In
            </Button>
            <Button className="bg-[#4d9fff] hover:bg-[#3d8fee] text-white">
              <Plus className="mr-2 h-4 w-4" /> List Item
            </Button>
          </nav>
        </div>
      </header>

      <main className="container py-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[
            {
              title: "Chemistry Textbook",
              location: "North Campus",
              trading: "Physics or Calculus textbook",
              image: "/placeholder.svg",
            },
            {
              title: "University Hoodie",
              location: "South Campus",
              trading: "Other university merch",
              image: "/placeholder.svg",
            },
            {
              title: "Scientific Calculator",
              location: "West Campus",
              trading: "Graphing calculator",
              image: "/placeholder.svg",
            },
            {
              title: "Study Desk",
              location: "East Campus",
              trading: "Small bookshelf or lamp",
              image: "/placeholder.svg",
            },
          ].map((item, index) => (
            <Link
              key={index}
              href="#"
              className="group relative aspect-[4/5] overflow-hidden rounded-xl bg-gray-800 shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              <Image
                src={item.image || "/placeholder.svg"}
                alt="Item preview"
                width={300}
                height={400}
                className="object-cover w-full h-[60%] transition-transform group-hover:scale-105"
              />
              <div className="p-4 text-gray-100">
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <div className="mt-2 flex items-center text-sm text-gray-400">
                  <MapPin className="mr-1 h-4 w-4" />
                  {item.location}
                </div>
                <div className="mt-3 flex items-center text-sm text-gray-400">
                  <ArrowRightLeft className="mr-1 h-4 w-4 text-[#4d9fff]" />
                  <span className="text-sm">Looking to trade for:</span>
                </div>
                <p className="mt-1 text-[#4d9fff]">{item.trading}</p>
              </div>
            </Link>
          ))}
        </div>
      </main>

      <Button
        size="lg"
        className="fixed bottom-6 right-6 rounded-full shadow-lg md:hidden bg-[#4d9fff] hover:bg-[#3d8fee]"
      >
        <Plus className="h-6 w-6" />
      </Button>
    </div>
  )
}

