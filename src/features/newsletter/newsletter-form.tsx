import * as React from "react"
import {
  Button,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  Input,
} from "@shared/components"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { subscribeToNewsletter } from "./newsletter-service"
import { SuccessNewsletterDialog } from "./success-dialog"
import { useMutation } from "@tanstack/react-query"

const formSchema = z.object({
  email: z.email("Opps, your email looks weird"),
})

export function NewsletterForm() {
  const [isOpenDialog, setIsOpenDialog] = React.useState(false)
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  })

  const subscribe = useMutation({
    mutationKey: ["newsletter", "subscribe"],
    mutationFn: subscribeToNewsletter,
    onSuccess: () => {
      form.reset()
      setIsOpenDialog(true)
    },
    onError: () => {
      form.setError("email", { message: "Opps, something happen" })
    },
  })

  return (
    <>
      <Form {...form}>
        <div className="w-full">
          <form
            onSubmit={form.handleSubmit((values) => {
              subscribe.mutate({ data: { email: values.email } })
            })}
            className="flex flex-col tablet:flex-row gap-3 w-full"
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <Input placeholder="Your email address" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">
              {subscribe.isPending
                ? "Subscribing ..."
                : "Subscribe to newsletter"}
            </Button>
          </form>
        </div>
      </Form>

      <SuccessNewsletterDialog
        open={isOpenDialog}
        onOpenChange={setIsOpenDialog}
      />
    </>
  )
}
