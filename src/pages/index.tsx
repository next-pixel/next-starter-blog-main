import UnstyledLink from '@/components/atoms/UnstyledLink'
import BlogList from '@/components/organism/BlogList'
import HeroWithPhoto from '@/components/template/HeroWithPhoto'
import Layout from '@/components/template/Layout'

import { getBlog, ownerName } from '@/helpers'
import { twclsx } from '@/libs/twclsx'

import { ArrowSmRightIcon } from '@heroicons/react/outline'
import type { GetStaticProps, NextPage } from 'next'
import { Blog } from 'next-starter-blog'

interface HomeProps {
  blogs: Array<Blog>
}

const Home: NextPage<HomeProps> = ({ blogs = [] }) => {
  const meta = {
    title: ownerName,
    template: 'Personal Blog',
    description: `Over 8 years of experience in web development such as developing dynamic applications with top technologies. Deep knowledge
    of .NET Core, Angular CLI, Node Js, React, Asp.NET MVC, Sql Server, Oracle, Azure, HTML5, Javascript and CSS3, etc. and a Microsoft Certified: Azure Developer Associate.`,
    openGraph: {
      images: [
        {
          url: '/static/avatar.jpg',
          alt: ownerName,
          width: 1200,
          height: 600
        }
      ]
    }
  }

  return (
    <Layout as='main' {...meta}>
      <HeroWithPhoto image='/static/avatar.jpg' imageAlt={ownerName} {...meta}>
        <p className={twclsx('max-w-prose mt-2')}>
        </p>
      </HeroWithPhoto>

      <BlogList blogs={blogs} title='Featured Post'>
        <UnstyledLink
          href='/blog'
          className={twclsx(
            'group',
            'items-center space-x-1 font-medium',
            'hover:text-primary-3 dark:hover:text-primary-2'
          )}
        >
          <span>See all post</span>
          <ArrowSmRightIcon
            className={twclsx(
              'inline-flex w-4 h-4 transition-all duration-200',
              '-translate-x-4 group-hover:translate-x-0',
              'opacity-0 group-hover:opacity-100'
            )}
          />
        </UnstyledLink>
      </BlogList>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const blogs = await getBlog()

  return {
    props: {
      blogs: blogs.map((b) => ({ ...b.data, slug: b.slug })).filter((b) => b.featured)
    }
  }
}

export default Home
