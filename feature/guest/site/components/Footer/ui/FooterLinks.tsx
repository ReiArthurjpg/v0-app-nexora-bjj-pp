type Link = {
  label: string
  href: string
}

export function FooterLinks({ links }: { links: Link[] }) {
  return (
    <div className="flex justify-center gap-8 text-[10px] font-black uppercase tracking-widest text-gray-500">
      {links.map((link, index) => (
        <a
          key={index}
          href={link.href}
          className="hover:text-white transition-colors"
        >
          {link.label}
        </a>
      ))}
    </div>
  )
}
