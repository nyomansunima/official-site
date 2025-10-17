import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@shared/components";

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function SuccessNewsletterDialog({ open, onOpenChange }: Props) {
  return (
    <Dialog onOpenChange={onOpenChange} open={open}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>🎉 Now you're subscribe to newsletter</DialogTitle>
        </DialogHeader>

        <div className="flex flex-col gap-3 text-foreground/60 leading-relaxed">
          <p>Hurray now you're subscribe to the newsletter.</p>
          <p>
            I'll to send you the latest tips, tricks about{" "}
            <span className="text-foreground">
              online business, stories, indie hacking and solopreneur journeys
            </span>{" "}
            every week.
          </p>
          <p className="font-mono text-link text-sm tracking-tight">
            No shit, no spam
          </p>
          <p className="mt-5 font-mono text-foreground text-sm leading-loose tracking-tight">
            Huge thanks,
            <br />
            Nyoman Sunima (Your friends)
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
