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

const formSchema = z.object({
  email: z
    .string()
    .min(5, "Please add your email address")
    .email("Opps, your email looks weird"),
})

export function NewsletterForm() {
  const [isOpenDialog, setIsOpenDialog] = React.useState(false)
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    subscribeToNewsletter({ email: values.email })
      .then(() => {
        form.reset()
        setIsOpenDialog(true)
      })
      .catch(() => {
        form.setError("email", { message: "Opps, something happen" })
      })
  }

  return (
    <>
      <Form {...form}>
        <div className="w-full">
          <form
            onSubmit={form.handleSubmit(onSubmit)}
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
            <Button type="submit">Subscribe to newsletter</Button>
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
