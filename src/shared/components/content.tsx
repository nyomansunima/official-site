import { mergeClass } from "@shared/libs/utils";

type ArticleContentProps = {
  children: React.ReactNode;
  className?: string;
};

export function ArticleContent({
  children,
  className,
}: ArticleContentProps): React.ReactElement {
  return (
    <article className={`${mergeClass("prose", className)}`}>
      {children}
    </article>
  );
}
