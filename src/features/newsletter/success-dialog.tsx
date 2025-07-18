import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@shared/components"

interface Props {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function SuccessNewsletterDialog({ open, onOpenChange }: Props) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
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
          <p className="font-mono tracking-tight text-link text-sm">
            No shit, no spam
          </p>
          <p className="text-foreground font-mono tracking-tight text-sm mt-5 leading-loose">
            Huge thanks,
            <br />
            Nyoman Sunima (Your friends)
          </p>
        </div>
      </DialogContent>
    </Dialog>
  )
}
