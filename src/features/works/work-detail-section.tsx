import { MDXContent } from "@content-collections/mdx/react";
import { ArticleContent } from "@shared/components";
import { parseReadableDate } from "@shared/libs/utils";
import { useLocation } from "@tanstack/react-router";
import type { Work } from "content-collections";

type WorkDetailSectionProps = {
  work: Work;
};

export function WorkDetailSection({ work }: WorkDetailSectionProps) {
  const { date, team, title, mdx } = work;
  const location = useLocation();
  const parsedDate = parseReadableDate(date);

  function copyWorkLink() {
    if (location) {
      const url = location.url;
      navigator.clipboard.writeText(url);
    }
  }

  return (
    <section className="flex flex-col">
      <div className="flex items-center gap-5">
        <a
          className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-2xl text-foreground/60 transition-all duration-300 hover:text-foreground"
          href="/works"
        >
          <svg
            fill="currentColor"
            height={14}
            viewBox="0 0 24 24"
            width={14}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m19,8H2.367c.033-.04.061-.082.098-.119L7.599,2.704c.389-.392.387-1.025-.006-1.414-.392-.388-1.024-.387-1.414.006L1.048,6.471c-.676.676-1.048,1.574-1.048,2.529s.372,1.854,1.045,2.527l5.134,5.177c.195.197.452.296.71.296.255,0,.509-.097.704-.29.393-.389.395-1.022.006-1.414l-5.137-5.18c-.036-.036-.063-.078-.095-.116h16.633c1.654,0,3,1.346,3,3v8c0,.552.447,1,1,1s1-.448,1-1v-8c0-2.757-2.243-5-5-5Z" />
          </svg>
        </a>

        <div className="flex flex-1 flex-col">
          <h1 className="text-balance font-medium text-lg">{title}</h1>

          <div className="mt-2 flex items-center gap-3">
            <span className="font-mono text-foreground/40 text-sm tracking-tight transition-all duration-300 hover:text-foreground">
              {parsedDate}
            </span>

            {team && (
              <a
                className="font-mono text-foreground/40 text-sm tracking-tight transition-all duration-300 hover:text-foreground"
                href={team.url}
                target="_blank"
              >
                {team.name}
              </a>
            )}
          </div>
        </div>

        <button
          className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-2xl text-foreground/60 transition-all duration-300 hover:text-foreground"
          onClick={copyWorkLink}
          type="button"
        >
          <svg
            fill="currentColor"
            height={14}
            viewBox="0 0 24 24"
            width={14}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m22.634,7.967c1.819-1.82,1.818-4.78,0-6.6-.881-.882-2.053-1.367-3.3-1.367s-2.419.485-3.3,1.367l-2.667,2.666c-1.576,1.577-1.781,4.007-.626,5.812l-.447.447c-.391.391-.391,1.023,0,1.414.195.195.451.293.707.293s.512-.098.707-.293l.448-.448c.744.478,1.606.741,2.512.741,1.247,0,2.419-.485,3.3-1.367l2.667-2.666Zm-6.997,1.81l2.07-2.07c.391-.391.391-1.023,0-1.414s-1.023-.391-1.414,0l-2.079,2.079c-.409-.97-.222-2.135.567-2.924l2.667-2.666c.503-.504,1.173-.781,1.885-.781s1.382.277,1.886.781c1.04,1.039,1.039,2.731,0,3.771l-2.667,2.666c-.76.76-1.945.945-2.915.558ZM2.793,4.207c-.391-.391-.391-1.023,0-1.414s1.023-.391,1.414,0l2,2c.391.391.391,1.023,0,1.414-.195.195-.451.293-.707.293s-.512-.098-.707-.293l-2-2Zm5.207-1.207V1c0-.553.448-1,1-1s1,.447,1,1v2c0,.553-.448,1-1,1s-1-.447-1-1ZM0,9c0-.553.448-1,1-1h2c.552,0,1,.447,1,1s-.448,1-1,1H1c-.552,0-1-.447-1-1Zm21.207,10.793c.391.391.391,1.023,0,1.414-.195.195-.451.293-.707.293s-.512-.098-.707-.293l-2-2c-.391-.391-.391-1.023,0-1.414s1.023-.391,1.414,0l2,2Zm-5.207,1.207v2c0,.553-.448,1-1,1s-1-.447-1-1v-2c0-.553.448-1,1-1s1,.447,1,1Zm8-6c0,.553-.448,1-1,1h-2c-.552,0-1-.447-1-1s.448-1,1-1h2c.552,0,1,.447,1,1Zm-12.293-2.707c-.391-.391-1.023-.391-1.414,0l-.448.448c-.744-.478-1.606-.741-2.512-.741-1.247,0-2.419.485-3.3,1.367l-2.667,2.666c-1.819,1.82-1.818,4.78,0,6.6.881.882,2.053,1.367,3.3,1.367s2.419-.485,3.3-1.367l2.667-2.666c1.576-1.577,1.781-4.007.626-5.812l.447-.447c.391-.391.391-1.023,0-1.414Zm-2.488,6.26l-2.667,2.666c-1.007,1.007-2.763,1.008-3.771,0-1.04-1.039-1.039-2.731,0-3.771l2.667-2.666c.503-.504,1.173-.781,1.885-.781.364,0,.715.074,1.04.212l-2.081,2.081c-.391.391-.391,1.023,0,1.414.195.195.451.293.707.293s.512-.098.707-.293l2.079-2.079c.409.97.222,2.135-.567,2.924Z" />
          </svg>
        </button>
      </div>

      <ArticleContent className="mt-10">
        <MDXContent code={mdx} />
      </ArticleContent>
    </section>
  );
}
