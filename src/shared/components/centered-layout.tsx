type CenteredLayoutProps = {
  children: React.ReactNode;
};

export function CenteredLayout({ children }: CenteredLayoutProps) {
  return (
    <div className="container mx-auto laptop:px-0 px-5">
      <div className="mx-auto desktop:w-7/12 laptop:w-9/12 tablet:w-11/12 w-full laptop:px-20">
        {children}
      </div>
    </div>
  );
}
