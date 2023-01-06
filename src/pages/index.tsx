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
    template: 'A Personal krunal shah`s Blog',
    description: `Over 8 years of experience in web development such as developing dynamic applications with top technologies. Deep knowledge of .NET Core, Angular CLI, Node Js, React, Asp.NET MVC, Sql Server, Oracle, Azure, HTML5, Javascript and CSS3, etc. and a Microsoft Certified: Azure Developer Associate.`,
    openGraph: {
      type: 'website',
        url: 'https://krunal-shah.web.app/',
        title: ownerName,
        description: `Over 8 years of experience in web development such as developing dynamic applications with top technologies. Deep knowledge of .NET Core, Angular CLI, Node Js, React, Asp.NET MVC, Sql Server, Oracle, Azure, HTML5, Javascript and CSS3, etc. and a Microsoft Certified: Azure Developer Associate.`
    },
    additionalMetaTags:[{
      name: 'google-site-verification',
      content: '5e06x4xhLxiUVlXqg2b93KekaEyO1Fyo84aTZcBEwqo'
    }]
  }

  return (
    <Layout as='main' {...meta}>
      <HeroWithPhoto image='/static/avatar.jpg' imageAlt={ownerName} {...meta}>
 


      </HeroWithPhoto>
<h1>Featured Post</h1>
      <BlogList blogs={blogs} title=''>
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
<br></br>
<section >
        <h4 className="mb-8 text-3xl font-bold text-center md:text-left">Experience</h4>
        <div className="grid grid-cols-1 md:grid-cols-6 my-10">
            <div className="flex flex-col col-span-2 mb-4 md:mb-0">
                <h5 className="text-xl md:text-2xl font-bold">Full Stack Developer</h5>
                <h6 className="text-lg font-bold">Facebook</h6>
                <p>Jan 2015 - present</p>
            </div>
            <div className="flex flex-col col-span-4">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid eveniet deleniti tempore veritatis
                    adipisci accusantium voluptatibus vel aperiam ex alias officiis deserunt, ad, iste id cum minus sit
                    laudantium ullam! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi non incidunt
                    voluptates molestiae delectus nulla quisquam aperiam voluptas tempora distinctio! Ipsa cupiditate
                    harum voluptates praesentium. Suscipit itaque officiis odio ut!</p>
            </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-6 my-10">
            <div className="flex flex-col col-span-2 mb-4 md:mb-0">
                <h5 className="text-xl md:text-2xl  font-bold">Software Developer</h5>
                <h6 className="text-lg font-bold">Google</h6>
                <p>Feb 2010 - Jan 2015</p>
            </div>
            <div className="flex flex-col col-span-4">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid eveniet deleniti tempore veritatis
                    adipisci accusantium voluptatibus vel aperiam ex alias officiis deserunt, ad, iste id cum minus sit
                    laudantium ullam! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi non incidunt
                    voluptates molestiae delectus nulla quisquam aperiam voluptas tempora distinctio! Ipsa cupiditate
                    harum voluptates praesentium. Suscipit itaque officiis odio ut!</p>
            </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-6 my-10">
            <div className="flex flex-col col-span-2 mb-4 md:mb-0">
                <h5 className="text-xl md:text-2xl  font-bold">Web Developer</h5>
                <h6 className="text-lg font-bold">IBM</h6>
                <p>Apr 2008 - Feb 2010</p>
            </div>
            <div className="flex flex-col col-span-4">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid eveniet deleniti tempore veritatis
                    adipisci accusantium voluptatibus vel aperiam ex alias officiis deserunt, ad, iste id cum minus sit
                    laudantium ullam! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi non incidunt
                    voluptates molestiae delectus nulla quisquam aperiam voluptas tempora distinctio! Ipsa cupiditate
                    harum voluptates praesentium. Suscipit itaque officiis odio ut!</p>
            </div>
        </div>
    </section>
    <hr className="border-gray-400 mx-44" />
   
    <section >
        <h4 className="mb-8 text-3xl font-bold text-center md:text-left">Education</h4>
        <div className="grid grid-cols-1 md:grid-cols-6 my-10">
            <div className="flex flex-col col-span-2 mb-4 md:mb-0">
                <h5 className="text-xl md:text-2xl  font-bold">B.S. Computer Science</h5>
                <h6 className="text-lg font-bold">Harward University</h6>
                <p>Jan 2015 - present</p>
            </div>
            <div className="flex flex-col col-span-4 ">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid eveniet deleniti tempore veritatis
                    adipisci accusantium voluptatibus vel aperiam ex alias officiis deserunt, ad, iste id cum minus sit
                    laudantium ullam! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi non incidunt
                    voluptates molestiae delectus nulla quisquam aperiam voluptas tempora distinctio! Ipsa cupiditate
                    harum voluptates praesentium. Suscipit itaque officiis odio ut!</p>
            </div>
        </div>
    </section>
      <br></br>
      <h3>TECHNICAL SKILLS</h3><br></br>
<ul className='space-y-1 list-disc list-inside text-gray-500 dark:text-gray-400 text-justify'>
	<li>Excellent knowledge of C#, VB and creating dynamic Applications in .Net Core, ASP.Net MVC, .Net Framework 4.5 , web forms, ASP.Net MVC API , ASP.Net Core API</li>
	<li>Excellent knowledge of Structured query language (SQL). Working with SQL Server 2008 to 2016, sql maintenance</li>
	<li>plan, clustered and nonclustered indexes in sql, triggers, cursor, Normalization, sp,Functions, jobs</li>
	<li>Excellent knowledge of Oracle Database 10g and 11g. Oracle Procedure,Functions,trigger,indexes, dump file for backup, normalization</li>
	<li>Excellent knowledge on working with Azure services like App service and VM, Cosmos DB, blob storage, service bus, Azure AD, Azure Functions, Notification hub, etc.</li>
	<li>Knowledge of working with Angular JS and Angular CLI 9.</li>
	<li>Knowledge of creating and integration of Web Api and Web services and integration</li>
	<li>Knowledge of working with ADO.NET , Entity Framework 6.0 , Linq and Dapper ORM</li>
	<li>Knowledge of working with Source controls like Microsoft Visual SourceSafe (VSS), git, SVN, and Microsoft TFS with Branching, Merging, Automating Build, Test, And Deployment For .NET Projects and git repository management</li>
	<li>Knowledge of working with SAP Crystal Reports 14 with sub reports</li>
	<li>Knowledge of Payment Gateway Module Integration (PayPal, CCavenue, authorize .net, stripe, IVR Call Stream, Berkeley payment) and external login like Facebook, Google Plus etc. and other tools for eCommerce</li>
	<li>Knowledge of hosting website in Internet Information Server (IIS) web server, SSL Integration</li>
	<li>Knowledge of Website security integration like blind sql injection, Session Fixation, Unrestricted File Upload(Non Executable)</li>
	<li>Knowledge of working with custom controls and External controls like AJAX Controls, telerik control etc.</li>
	<li>Knowledge of SMS Integration and Bulk Email Send.</li>
	<li>Expert knowledge of HTML (4, 5), CSS (2,3) , bootstrap, material design etc.</li>
	<li>JavaScript, jQuery skills implement jQuery plugins (carousels, sliders, Datatable, JQgrid etc.)</li>
	<li>Strong error handling Skill using External tools NLOG, Rapid7 for Error Log Management and Analyses</li>
	<li>Skills in optimizing websites for mobile display responsive, Export to PDF, URL rewriting</li>
	<li>Knowledge of open source cms like Nopcommerce (.NET), Mr CMS (.NET), wordpress(PHP),joomla(PHP)</li>
	<li>Knowledge of social media marketing, SEO, Google Analytics, Google My Business, Google Map</li>
	<li>Knowledge of Lucene.net integration with faceted search and also basic knowledge of NO SQL (Mongo DB)</li>
	<li>Knowledge of Structured data format like Json and XML</li>
</ul>
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
