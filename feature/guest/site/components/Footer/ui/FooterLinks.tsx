type Link = {
  label: string
  href: string
}

export function FooterLinks({ links }: { links: Link[] }) {
  return (
    <div className="flex flex-col md:grid-cols-2 md:flex-row justify-center gap-6 md:gap-10 text-[10px] font-black uppercase tracking-widest text-gray-400 items-center">
      {links.map((link, index) => (
        <a
          key={index}
          href={link.href}
          className="hover:text-white transition-all duration-300 relative group py-1"
        >
          {link.label}
          <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#E11D48] group-hover:w-full transition-all duration-300" />
        </a>
      ))}
    </div>
  )
}
