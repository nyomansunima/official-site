import { buttonVariants } from "./button";

interface ItemProps {
  href: string;
  title: string;
}

function Item({ href, title }: ItemProps) {
  return (
    <a
      className="group flex items-center gap-2 py-1 transition-all duration-300 hover:-translate-y-0.5"
      href={href}
      rel="noopener"
      target="_blank"
    >
      <svg
        className="text-foreground/20"
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
    <section className="mt-16 flex flex-col">
      <div className="flex items-center justify-between border-border border-b border-dashed pb-2">
        <span className="text-foreground/40 leading-tight tracking-tight">
          Thoughts.
        </span>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        <a
          className={buttonVariants({
            className: "transition-all duration-300 hover:-translate-y-0.5",
            variant: "outline",
          })}
          href="https://twitter.com/nyomansunima"
          rel="noopener noreferrer"
          target="_blank"
        >
          <svg
            fill="currentColor"
            height={14}
            viewBox="0 0 24 24"
            width={14}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 0h24v24H0z" fill="none" stroke="none" />
            <path d="M14.058 3.41c-1.807 .767 -2.995 2.453 -3.056 4.38l-.002 .182l-.243 -.023c-2.392 -.269 -4.498 -1.512 -5.944 -3.531a1 1 0 0 0 -1.685 .092l-.097 .186l-.049 .099c-.719 1.485 -1.19 3.29 -1.017 5.203l.03 .273c.283 2.263 1.5 4.215 3.779 5.679l.173 .107l-.081 .043c-1.315 .663 -2.518 .952 -3.827 .9c-1.056 -.04 -1.446 1.372 -.518 1.878c3.598 1.961 7.461 2.566 10.792 1.6c4.06 -1.18 7.152 -4.223 8.335 -8.433l.127 -.495c.238 -.993 .372 -2.006 .401 -3.024l.003 -.332l.393 -.779l.44 -.862l.214 -.434l.118 -.247c.265 -.565 .456 -1.033 .574 -1.43l.014 -.056l.008 -.018c.22 -.593 -.166 -1.358 -.941 -1.358l-.122 .007a.997 .997 0 0 0 -.231 .057l-.086 .038a7.46 7.46 0 0 1 -.88 .36l-.356 .115l-.271 .08l-.772 .214c-1.336 -1.118 -3.144 -1.254 -5.012 -.554l-.211 .084z" />
          </svg>
          Twitter
        </a>
        <a
          className={buttonVariants({
            className: "transition-all duration-300 hover:-translate-y-0.5",
            variant: "outline",
          })}
          href="https://linkedin.com/in/nyomansunima"
          rel="noopener noreferrer"
          target="_blank"
        >
          <svg
            fill="currentColor"
            height={14}
            viewBox="0 0 24 24"
            width={14}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 0h24v24H0z" fill="none" stroke="none" />
            <path d="M17 2a5 5 0 0 1 5 5v10a5 5 0 0 1 -5 5h-10a5 5 0 0 1 -5 -5v-10a5 5 0 0 1 5 -5zm-9 8a1 1 0 0 0 -1 1v5a1 1 0 0 0 2 0v-5a1 1 0 0 0 -1 -1m6 0a3 3 0 0 0 -1.168 .236l-.125 .057a1 1 0 0 0 -1.707 .707v5a1 1 0 0 0 2 0v-3a1 1 0 0 1 2 0v3a1 1 0 0 0 2 0v-3a3 3 0 0 0 -3 -3m-6 -3a1 1 0 0 0 -.993 .883l-.007 .127a1 1 0 0 0 1.993 .117l.007 -.127a1 1 0 0 0 -1 -1" />
          </svg>
          Linkedin
        </a>
        <a
          className={buttonVariants({
            className: "transition-all duration-300 hover:-translate-y-0.5",
            variant: "outline",
          })}
          href="https://github.com/nyomansunima"
          rel="noopener noreferrer"
          target="_blank"
        >
          <svg
            fill="currentColor"
            height={14}
            viewBox="0 0 24 24"
            width={14}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 0h24v24H0z" fill="none" stroke="none" />
            <path d="M5.315 2.1c.791 -.113 1.9 .145 3.333 .966l.272 .161l.16 .1l.397 -.083a13.3 13.3 0 0 1 4.59 -.08l.456 .08l.396 .083l.161 -.1c1.385 -.84 2.487 -1.17 3.322 -1.148l.164 .008l.147 .017l.076 .014l.05 .011l.144 .047a1 1 0 0 1 .53 .514a5.2 5.2 0 0 1 .397 2.91l-.047 .267l-.046 .196l.123 .163c.574 .795 .93 1.728 1.03 2.707l.023 .295l.007 .272c0 3.855 -1.659 5.883 -4.644 6.68l-.245 .061l-.132 .029l.014 .161l.008 .157l.004 .365l-.002 .213l-.003 3.834a1 1 0 0 1 -.883 .993l-.117 .007h-6a1 1 0 0 1 -.993 -.883l-.007 -.117v-.734c-1.818 .26 -3.03 -.424 -4.11 -1.878l-.535 -.766c-.28 -.396 -.455 -.579 -.589 -.644l-.048 -.019a1 1 0 0 1 .564 -1.918c.642 .188 1.074 .568 1.57 1.239l.538 .769c.76 1.079 1.36 1.459 2.609 1.191l.001 -.678l-.018 -.168a5.03 5.03 0 0 1 -.021 -.824l.017 -.185l.019 -.12l-.108 -.024c-2.976 -.71 -4.703 -2.573 -4.875 -6.139l-.01 -.31l-.004 -.292a5.6 5.6 0 0 1 .908 -3.051l.152 -.222l.122 -.163l-.045 -.196a5.2 5.2 0 0 1 .145 -2.642l.1 -.282l.106 -.253a1 1 0 0 1 .529 -.514l.144 -.047l.154 -.03z" />
          </svg>
          Github
        </a>
        <a
          className={buttonVariants({
            className: "transition-all duration-300 hover:-translate-y-0.5",
            variant: "outline",
          })}
          href="https://youtube.com/@nyomansunima"
          rel="noopener noreferrer"
          target="_blank"
        >
          <svg
            fill="currentColor"
            height={14}
            viewBox="0 0 24 24"
            width={14}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 0h24v24H0z" fill="none" stroke="none" />
            <path d="M18 3a5 5 0 0 1 5 5v8a5 5 0 0 1 -5 5h-12a5 5 0 0 1 -5 -5v-8a5 5 0 0 1 5 -5zm-9 6v6a1 1 0 0 0 1.514 .857l5 -3a1 1 0 0 0 0 -1.714l-5 -3a1 1 0 0 0 -1.514 .857z" />
          </svg>
          Youtube
        </a>
      </div>

      <div className="mt-5 flex">
        <a
          className="flex w-full cursor-pointer rounded-xl border border-border border-dashed bg-surface p-1 transition-all duration-300 hover:-translate-y-0.5"
          href="https://dribbble.com/nyomansunima"
          rel="noopener"
          target="_blank"
        >
          <img
            alt="Find on dribbble"
            className="h-30 w-full overflow-hidden rounded-lg object-cover object-top"
            src="https://cdn.dribbble.com/userupload/46676036/file/fba5d32a3c9101fb79ffd843f6f78f81.png"
          />
        </a>
      </div>

      <div className="mt-3 flex flex-col gap-10">
        <div className="flex flex-col gap-3">
          <div className="grid grid-cols-2 gap-x-5 gap-y-1 sm:grid-cols-3 sm:gap-x-8">
            <Item
              href="https://producthunt.com/@nyomansunima"
              title="Producthunt"
            />
            <Item href="https://threads.net/nyomansunimaa" title="Threads" />
            <Item href="https://facebook.com/nyomansunimaa" title="Facebook" />
            <Item
              href="https://instagram.com/nyomansunimaa"
              title="Instagram"
            />
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
    </section>
  );
}
