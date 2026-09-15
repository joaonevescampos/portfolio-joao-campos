import linkedinIcon from '../assets/img/social/linkedin.svg'
import githubIcon from '../assets/img/social/github.svg'
import whatsappIcon from '../assets/img/social/whatsapp.svg'
import { socialLinks } from '../utils/links'

const icons = { linkedin: linkedinIcon, github: githubIcon, whatsapp: whatsappIcon }

export function SocialLinks() {
  return (
    <aside className="social-links fixed bottom-0 left-0 z-20 flex w-full items-center justify-center gap-6 px-5 py-4 backdrop-blur lg:bottom-6 lg:left-auto lg:right-6 lg:w-auto lg:flex-col lg:rounded-2xl lg:border lg:border-[var(--border)]">
      {socialLinks.map((social) => (
        <a key={social.label} href={social.href} target="_blank" rel="noreferrer" aria-label={social.label} className="transition-transform hover:scale-125">
          <img src={icons[social.file.replace('.svg', '') as keyof typeof icons]} alt="" className={`social-icon social-icon-${social.label.toLowerCase()} h-7 w-7`} />
        </a>
      ))}
    </aside>
  )
}