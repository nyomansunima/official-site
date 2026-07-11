interface ItemProps {
  href: string;
  title: string;
}

function Item({ href, title }: ItemProps) {
  return (
    <a
      className="group flex items-center gap-1 py-1 transition-all duration-300 hover:-translate-y-0.5"
      href={href}
      rel="noopener"
      target="_blank"
    >
      <svg
        className="text-foreground/40"
        fill="currentColor"
        height={10}
        viewBox="0 0 24 24"
        width={10}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 0h24v24H0z" fill="none" stroke="none" />
        <path d="M12 7a5 5 0 1 1 -4.995 5.217l-.005 -.217l.005 -.217a5 5 0 0 1 4.995 -4.783z" />
      </svg>
      <span className="flex flex-1">{title}</span>
    </a>
  );
}

export function ContactSection() {
  return (
    <div className="mt-16 flex flex-col">
      <h1 className="text-balance font-medium text-xl leading-tight tracking-tighter">
        Connects.
      </h1>

      <div className="mt-5 flex">
        <a
          className="flex w-full cursor-pointer rounded-xl border border-border border-dashed bg-surface p-1 transition-all duration-300 hover:-translate-y-0.5"
          href={"https://api.whatsapp.com/send?phone=6285161619109"}
          rel="noopener nooppener"
          target="_blank"
        >
          <img
            alt="Contact Me"
            className="h-30 w-full overflow-hidden rounded-lg object-cover object-top"
            src="https://cdn.dribbble.com/userupload/47926872/file/770ba11804dc2a759461a430192acdaa.png?resize=2048x1536&vertical=center"
          />
        </a>
      </div>

      <div className="mt-3 flex flex-col gap-10">
        <div className="flex flex-col gap-3">
          <div className="grid grid-cols-2 gap-x-5 gap-y-1 sm:grid-cols-3 sm:gap-x-8">
            <Item
              href="https://linkedin.com/in/nyomansunima"
              title="Linkedin"
            />
            <Item
              href="https://producthunt.com/@nyomansunima"
              title="Producthunt"
            />
            <Item href="https://youtube.com/@nyomansunima" title="Youtube" />
            <Item href="https://twitter.com/nyomansunima" title="Twitter" />
            <Item href="https://threads.net/nyomansunimaa" title="Threads" />
            <Item href="https://facebook.com/nyomansunimaa" title="Facebook" />
            <Item href="https://github.com/nyomansunima" title="Github" />
            <Item
              href="https://instagram.com/nyomansunimaa"
              title="Instagram"
            />
            <Item href="https://dribbble.com/nyomansunima" title="Dribbble" />
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <span className="text-foreground/40">Find me on:</span>
          <div className="grid grid-cols-2 gap-x-5 gap-y-1 sm:grid-cols-3 sm:gap-x-8">
            <Item href="https://dev.to/nyomansunima" title="Dev.to" />
            <Item href="https://medium.com/@nyomansunima" title="Medium" />
            <Item href="https://substack.com/@nyomansunima" title="Substack" />
          </div>
        </div>
      </div>
    </div>
  );
}
