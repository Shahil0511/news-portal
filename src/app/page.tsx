import Banner from "@/components/Banner";
import NewsCards from "@/components/NewsCards";
import NewsLetter from "@/components/NewsLetter";
import { NewsItem } from "@/types/news";

export default async function Home() {
  const response = await fetch(`https://news-api-next-js-kappa.vercel.app/api/news`)
  const news = await response.json();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Banner />
      <div className="my-12">
        <h2 className="text-2xl font-bold mb-8">Latest News</h2>
        <div className="grid grid-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 justify-between">
          {
            news.slice(0, 3).map((item: NewsItem) => (
              <NewsCards key={item._id} item={item} />

            ))
          }

        </div>
      </div>
      <NewsLetter />
    </div>
  )
}