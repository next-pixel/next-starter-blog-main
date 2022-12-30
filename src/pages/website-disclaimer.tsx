import Layout from '@/components/template/Layout'
import { twclsx } from '@/libs/twclsx'
import type { NextPage } from 'next'

const WebsiteDisclaimerPage: NextPage = () => {
  const meta = {
    title: 'Website Disclaimer',
    template: 'This is a disclaimer for the website Critical Thinking.',
    description: 'Website Disclaimer - This is a disclaimer for the website Critical Thinking.'
  }
  return (
    <Layout {...meta} as='main'>
    
    <article>
        <figure className='w-full pt-0'>
          
        </figure>
        <section className='border-b border-main-2 dark:border-main-3 py-10'>
          <h1 className='mb-8 md:text-5xl'>{meta.title}</h1>
          
        </section>

        <section
          className={twclsx(
            'md:prose-lg dark:prose-invert py-20 text-justify',
            'prose-a:no-underline prose-a:font-semibold prose-a:text-primary-4'
          )}
        >
          <p>If you require any more information or have any questions about our site&rsquo;s disclaimer, please feel free to contact us by email at <a href="mailto:shahkrunalg@gmail.com">shahkrunalg@gmail.com</a>.</p>

<h2>Disclaimers for Krunal Shah</h2>

<p>All the information on this website &ndash;&nbsp;<a href="https://krunal-shah.web.app/">https://krunal-shah.web.app/</a> &ndash; is published in good faith and for general information purpose only. Krunal Shah does not make any warranties about the completeness, reliability and accuracy of this information. Any action you take upon the information you find on this website (Krunal Shah), is strictly at your own risk. Krunal Shah will not be liable for any losses and/or damages in connection with the use of our website.</p>

<p>From our website, you can visit other websites by following hyperlinks to such external sites. While we strive to provide only quality links to useful and ethical websites, we have no control over the content and nature of these sites. These links to other websites do not imply a recommendation for all the content found on these sites. Site owners and content may change without notice and may occur before we have the opportunity to remove a link which may have gone &lsquo;bad&rsquo;.</p>

<p>Please be also aware that when you leave our website, other sites may have different privacy policies and terms which are beyond our control. Please be sure to check the Privacy Policies of these sites as well as their &ldquo;Terms of Service&rdquo; before engaging in any business or uploading any information.</p>

<h2>Consent</h2>

<p>By using our website, you hereby consent to our disclaimer and agree to its terms.</p>

<h2>Update</h2>

<p>Should we update, amend or make any changes to this document, those changes will be prominently posted here.</p>

<p>&nbsp;</p>


        </section>
      </article>
      
    </Layout>
  )
}

export default WebsiteDisclaimerPage
