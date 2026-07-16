import { Dialog as DialogPrimitive } from "@base-ui/react/dialog";
import { play } from "cuelume";
import { cx } from "tailwind-variants/lite";
import { Button } from "./button";

function Dialog({ ...props }: DialogPrimitive.Root.Props) {
  function soundListener(state: boolean) {
    if (state) {
      play("droplet");
    } else {
      play("loading");
    }
  }

  return (
    <DialogPrimitive.Root
      data-slot="dialog"
      onOpenChange={soundListener}
      {...props}
    />
  );
}

function DialogTrigger({ ...props }: DialogPrimitive.Trigger.Props) {
  return <DialogPrimitive.Trigger data-slot="dialog-trigger" {...props} />;
}

function DialogPortal({ ...props }: DialogPrimitive.Portal.Props) {
  return <DialogPrimitive.Portal data-slot="dialog-portal" {...props} />;
}

function DialogContent({
  className,
  children,
  showCloseButton = true,
  ...props
}: DialogPrimitive.Popup.Props & {
  showCloseButton?: boolean;
}) {
  return (
    <DialogPortal>
      <DialogPrimitive.Popup
        className={cx(
          "data-open:fade-in-0 data-open:zoom-in-90 data-open:slide-in-from-bottom-25 data-closed:fade-out-0 data-closed:zoom-out-90 data-closed:slide-out-to-bottom-25 fixed inset-0 z-50 flex h-full w-full bg-background duration-300 data-closed:animate-out data-open:animate-in",
          className
        )}
        data-slot="dialog-content"
        {...props}
      >
        <div className="scrollbar-none container relative mx-auto max-h-full overflow-y-auto px-5 sm:px-0">
          <div className="relative mx-auto flex w-full flex-col pt-10 pb-28 sm:w-10/12 sm:px-10 sm:pt-28 md:w-9/12 lg:w-6/12 xl:w-5/12">
            {children}
          </div>
        </div>
        {showCloseButton && (
          <DialogPrimitive.Close
            data-slot="dialog-close"
            render={
              <Button
                className="absolute top-3 right-3 transition-all duration-300 hover:-translate-y-0.5 sm:top-5 sm:right-5"
                size="icon-sm"
                variant="outline"
              >
                <svg
                  className="icon icon-tabler icons-tabler-outline icon-tabler-square-rounded-minus"
                  fill="none"
                  height={14}
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                  width={14}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 0h24v24H0z" fill="none" stroke="none" />
                  <path d="M9 12h6" />
                  <path d="M12 3c7.2 0 9 1.8 9 9c0 7.2 -1.8 9 -9 9c-7.2 0 -9 -1.8 -9 -9c0 -7.2 1.8 -9 9 -9" />
                </svg>
                <span className="sr-only">Close</span>
              </Button>
            }
          />
        )}
      </DialogPrimitive.Popup>
    </DialogPortal>
  );
}

function DialogHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cx("flex flex-col gap-2", className)}
      data-slot="dialog-header"
      {...props}
    />
  );
}
function DialogFooter({
  className,
  showCloseButton = false,
  children,
  ...props
}: React.ComponentProps<"div"> & {
  showCloseButton?: boolean;
}) {
  return (
    <div
      className={cx(
        "-mx-4 -mb-4 flex flex-col-reverse gap-2 rounded-b-xl border-t bg-muted/50 p-4 sm:flex-row sm:justify-end",
        className
      )}
      data-slot="dialog-footer"
      {...props}
    >
      {children}
      {showCloseButton && (
        <DialogPrimitive.Close
          render={<Button variant="outline">Close</Button>}
        />
      )}
    </div>
  );
}
function DialogTitle({ className, ...props }: DialogPrimitive.Title.Props) {
  return (
    <DialogPrimitive.Title
      className={cx(
        "font-medium text-xl leading-tight tracking-tight",
        className
      )}
      data-slot="dialog-title"
      {...props}
    />
  );
}
function DialogDescription({
  className,
  ...props
}: DialogPrimitive.Description.Props) {
  return (
    <DialogPrimitive.Description
      className={cx(
        "text-foreground/40 leading-5 *:[a]:underline *:[a]:underline-offset-3 *:[a]:hover:text-foreground",
        className
      )}
      data-slot="dialog-description"
      {...props}
    />
  );
}

export {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
};
