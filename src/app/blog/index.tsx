import OutlinedButton from '@/components/common/buttons/outlined'
import { BLOG_ARTICLES } from '@/constants'
import { format } from 'date-fns'
import Image from 'next/image'

export default function Blog() {
  return (
    <section className=" px-6 md:px-10 flex flex-col items-center  xl:px-[12.95rem] w-full lg:mt-6 space-y-10 md:space-y-20">
      <div className="space-y-3  items-center lg:w-4/5 text-white  ">
        <p className="lg:text-xl font-open-sans text-center text-[#777777]">
          Our Blog
        </p>
        <h2 className="text-[1.5rem] md:text-[2.5rem] 2xl:text-[3rem] text-primary text-center">
          Value proposition accelerator product management venture
        </h2>
      </div>
      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-[18.75rem_18.75rem_18.75rem] gap-x-8 xl:gap-x-12  gap-y-16 md:my-[4.5rem]">
        {BLOG_ARTICLES.map((item, index) => (
          <div className="space-y-6 font-open-sans" key={index}>
            <Image
              src={item.background_cover}
              width={300}
              height={209}
              alt=""
              className="mx-auto mdMax:w-full"
            />
            <div>
              <p className="space-x-3">
                <span className="font-bold text-primary">{item.category}</span>
                <span className="text-grey text-sm">
                  {format(new Date(item.created_at), 'MMMM dd, yyyy')}
                </span>
              </p>
              <p className="md:text-lg mt-3 mb-5 md:h-20 ">{item.article}</p>
              <div className="flex gap-x-3 items-center">
                <Image
                  src={item.author.imageUrl}
                  width={32}
                  height={32}
                  alt="author image"
                />
                <p className="text-sm">{item.author.fullname}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <OutlinedButton
        title="Load more"
        className="px-10 md:px-14 py-4 rounded-[3.5rem]"
      />
    </section>
  )
}
