import UnstyledLink from '@/components/atoms/UnstyledLink'
import { ArrowSmRightIcon } from '@heroicons/react/outline'
import { AppRoute } from '@/constant/route'
import { SocialMediaProps } from '@/constant/socialMedia'
import { twclsx } from '@/libs/twclsx'

interface FooterLinkProps<T = SocialMediaProps | AppRoute> {
  data: Array<T>
}

const FooterLinks: React.FunctionComponent<FooterLinkProps> = ({ data }) => {
  return (
    <div className={twclsx('flex flex-col sm:flex-col md:flex-row gap-8 w-full')}>
      {data.map((val) => (
        <UnstyledLink
        className={twclsx(
          'group',
          'items-center space-x-1 font-medium',
          'hover:text-primary-3 dark:hover:text-primary-2'
        )}
          key={val.href}
          href={val.href}
          title = {val.children}
        >
          {val.children}
          <ArrowSmRightIcon
            className={twclsx(
              'inline-flex w-4 h-4 transition-all duration-200',
              '-translate-x-4 group-hover:translate-x-0',
              'opacity-0 group-hover:opacity-100'
            )}
          />
        </UnstyledLink>
      ))}
    </div>
  )
}

export default FooterLinks
