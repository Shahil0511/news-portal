import { NewsItem } from "@/types/news"
import Link  from "next/link"
import Image from 'next/image';
import { Button } from "./ui/button";


interface NewsCardProps {
    item: NewsItem
}

export default function NewsCards({ item }: NewsCardProps) {

    return (
        <div className="border p-4 rounded-md shadow-sm">
            <Link href={`/news/${item._id}`} >
                <Image src={item?.imageUrl} alt={item?.title}
                    width={500}
                    height={500}
                    className="mb-5 md:h-56 rounded hover:scale-105 cursor-pointer transition-all duration-300"
                />
            </Link>
            <div>
                <h2 className="text-xl font-semibold my-3">{item?.title.substring(0, 70)}...</h2>
                <p className="mb-4">{item?.description.substring(0,180)}</p>
                <Link href={`/news/${item._id}`}>
                    <Button className="">ReadMore</Button>
                </Link>
            </div>
        </div>
    )
}