import MDXComponents from '@/components/contents'
import Layout from '@/components/template/Layout'

import { getBlog, getBlogBySlug } from '@/helpers'
import {  useMetaData } from '@/hooks'
import { dateFormat, dateStringToISO } from '@/libs/dateFormat'
import { twclsx } from '@/libs/twclsx'

import { GetStaticPaths, GetStaticPathsResult, GetStaticProps, NextPage } from 'next'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import { Blog } from 'next-starter-blog'
import 'prism-themes/themes/prism-night-owl.css'
import { ParsedUrlQuery } from 'querystring'

interface URLSlug extends ParsedUrlQuery {
  slug: string
}

interface BlogPostProps {
  mdxSource: MDXRemoteSerializeResult
  data: Blog
}

const BlogPost: NextPage<BlogPostProps> = ({ data, mdxSource }) => {
  const metaData = useMetaData(data)
  //const isMediumScreen = useMediaQuery('(min-width: 768px)')

  return (
    <Layout {...metaData} as='main' title={data.title} description={data.summary}>
      <article>
        <figure className='w-full pt-0'>
          
        </figure>
        <section className='border-b border-main-2 dark:border-main-3 py-10'>
          <h1 className='mb-8 md:text-5xl'>{data.title}</h1>
          <div className='flex items-center gap-4'>
           
            <p className='text-sm md:text-base'>
              Written by {data.author_name} /{' '}
              <time dateTime={dateStringToISO(data.published)}>{dateFormat(data.published)}</time>
            </p>
          </div>
        </section>

        <section
          className={twclsx(
            'prose md:prose-lg dark:prose-invert py-20',
            'prose-a:no-underline prose-a:font-semibold prose-a:text-primary-4'
          )}
        >
          <MDXRemote {...mdxSource} components={MDXComponents} />
        </section>
      </article>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const blogs = await getBlog()

  const paths = blogs.map((blog) => ({ params: { slug: blog.slug } })) as GetStaticPathsResult['paths']

  return {
    fallback: false,
    paths
  }
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const mdxPrism = require('mdx-prism')

  const { slug } = ctx.params as URLSlug
  const blog = await getBlogBySlug(slug)

  const mdxSource = await serialize(blog.content, { mdxOptions: { rehypePlugins: [mdxPrism] } })

  return {
    props: {
      mdxSource,
      data: { ...blog.data, slug }
    }
  }
}

export default BlogPost