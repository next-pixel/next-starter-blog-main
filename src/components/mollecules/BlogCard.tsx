import UnstyledLink from '@/components/atoms/UnstyledLink'

import { twclsx } from '@/libs/twclsx'

import { Blog } from 'next-starter-blog'

interface BlogCardProps extends Blog {
  slug: string
  layout: 'row' | 'column'
}

const BlogCard: React.FunctionComponent<BlogCardProps> = ({ slug, title, summary, layout = 'row' }) => {
  return (
    <UnstyledLink
      className={twclsx(
        'flex flex-col p-4 w-full h-full  rounded-lg shadow-md',
        'border rounded-lg transition',
        
        'hover:border-main-4 dark:hover:border-main-2'
      )}
      href={`/blog/${slug}`}
      sr={title}
    >
      <h3>{title}</h3>
      {layout === 'column' && <p className='mt-[0.675em]'>{summary}</p>}
           {/* <article className="container bg-white shadow-2xl rounded-2xl p-5">
                <h3 className="font-bold text-indigo-500">{title}</h3>
                <p className="font-light text-gray-500">{summary}</p>
                <h6 className="text-sm text-gray-300 mb-5">Written by {author_name}</h6>
            </article> */}
           
       
    </UnstyledLink>
  )
}

export default BlogCard
