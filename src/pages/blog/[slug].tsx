import MDXComponents from '@/components/contents'
import Layout from '@/components/template/Layout'
import { HomeIcon,ChevronRightIcon } from '@heroicons/react/solid'
import { getBlog, getBlogBySlug } from '@/helpers'
import {  useMetaData } from '@/hooks'
import { dateFormat, dateStringToISO } from '@/libs/dateFormat'
import { twclsx } from '@/libs/twclsx'
import Link from 'next/link'
import { BreadcrumbJsonLd,ArticleJsonLd } from 'next-seo';
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
  //const ISODate = dateStringToISO(data.published)
  const siteURL = process.env.NEXT_PUBLIC_SITE_URL
  

  return (
    <Layout {...metaData} as='main' title={data.title} description={data.summary}>
      <article>
        <figure className='w-full pt-0'>
          
        </figure>
        <section className='py-10'>
          <h1 className='mb-8 md:text-5xl'>{data.title}</h1>
          <div className='flex items-center gap-4'>
           
            <p className='text-sm md:text-base'>
              Written by {data.author_name} /{' '}
              <time dateTime={dateStringToISO(data.published)}>{dateFormat(data.published)}</time>
              <br></br>
            {data.tags.map((tag) => (
             
             <span className='bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800' key={tag}>{tag}</span>
              
            ))}
            <br></br>
            
            <br></br><br></br>

            <nav className="flex" aria-label="Breadcrumb">
  <ol className="inline-flex items-center space-x-1 md:space-x-3">
    <li className="inline-flex items-center">
    <HomeIcon className='w-4 md:w-5 h-4 md:h-5 text-main-3'></HomeIcon> &nbsp;
      <Link href="/" >
        Home
      </Link>
    </li>
    <li>
      <div className="flex items-center">
        <ChevronRightIcon className='w-4 md:w-5 h-4 md:h-5 text-main-3'></ChevronRightIcon> &nbsp;
        <Link href="/blog" >Blog</Link>
      </div>
    </li>
    <li aria-current="page">
      <div className="flex items-center">
        <ChevronRightIcon className='w-4 md:w-5 h-4 md:h-5 text-main-3'></ChevronRightIcon> &nbsp;
        {data.title}
      </div>
    </li>
  </ol>
</nav>

            </p>
          </div>
        </section>

        <section
          className={twclsx(
            'prose md:prose-lg dark:prose-invert !max-w-full',
            'prose-a:no-underline prose-a:font-semibold prose-a:text-primary-4'
          )}
        >
          <MDXRemote {...mdxSource} components={MDXComponents} />
        </section>
        <BreadcrumbJsonLd
      itemListElements={[
        {
          type: "ListItem",
          position: 1,
          name: 'Home',
          item: siteURL,
        },
        {
          type: "ListItem",
          position: 2,
          name: 'Blog',
          item: siteURL + '/blog',
        },
        {
          type: "ListItem",
          position: 3,
          name: data.title,
          item: siteURL + '/blog/' + data.slug ,
        }
      ]}
    />

  <ArticleJsonLd
      url={siteURL + '/blog/' + data.slug}
      title={data.title}
      images={[
        siteURL + '/static/default-thumbnail.jpg'
      ]}
      datePublished={data.last_modified}
      dateModified={data.last_modified}
      authorName={[data.author_name]}
      publisherName={data.author_name}
      publisherLogo={siteURL + data.author_image}
      description={data.summary}
    />
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
