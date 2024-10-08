import Image from 'next/image'
import bannerImg from "@/public/assets/banner.jpg"
import { Button } from './ui/button'

export default function Banner() {
    return (
        <section className="bg-gray-100 ">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8 px-4 sm:px-6 lg:px-8 py-5">
                <div className='w-full'>
                    <Image
                        src={bannerImg}
                        alt="Picture of the author"
                        placeholder='blur'
                        className='w-full h-auto object-cover rounded-md '
                    />
                </div>
                <div className="flex flex-col space-y-4">
                    <h4 className='text-sm font medium text-gray-500'>Technology</h4>
                    <h2 className='text-3xl font-bold text-gray-900'>OpenAi Is Growing fast and Burning through Piles of Money</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. quidem sed ducimus earum ea  dolorum delectus voluptate dolorem<br /> natus minus dolor pariatur. Veritatis esse obcaecati molestiae fugiat enim? Vero, architecto ad. Autem ea nisi Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quo reiciendis <br /><br />laborum aliquam voluptate delectus nemo, unde, ipsa voluptates fugiat provident, et iste repellendus eveniet. atque vitae officia! Fugit velit nihil ut ipsam.</p>
                    <Button variant="default">Read More</Button>
                </div>
            </div>
        </section>
    )
}