import { cn } from '@/lib/utils'
import { buttonVariants } from './ui/button'
import Link from 'next/link'
import FramerWrapper from './animation/FramerWrapper'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareBluesky, faSquareTwitter, faSquareGithub, faSquareInstagram } from '@fortawesome/free-brands-svg-icons'

const SocialLinks = () => {
  const links = [
    { name: 'Twitter', link: 'https://x.com/Junexus_indie', icon: <FontAwesomeIcon icon={faSquareTwitter} /> },
    { name: 'Github', link: 'https://github.com/shadowDragons', icon: <FontAwesomeIcon icon={faSquareGithub} /> },
    { name: 'BlueSky', link: 'https://bsky.app/profile/junexus.bsky.social', icon: <FontAwesomeIcon icon={faSquareBluesky} /> },
    { name: 'Instagram', link: 'https://www.instagram.com/indiejunexus', icon: <FontAwesomeIcon icon={faSquareInstagram} /> },
  ]
  return (
    <>
      {links.map((itm, indx) => {
        const timing = 0.55 + indx * 0.125

        return (
          <FramerWrapper key={indx} delay={timing} y={50}>
            <Link target='blank' href={itm.link} className={cn(buttonVariants({ variant: 'default', size: 'icon' }))}>
              {itm.icon}
            </Link>
          </FramerWrapper>
        )
      })}
    </>
  )
}

export default SocialLinks
