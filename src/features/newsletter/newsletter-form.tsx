"use client"

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import {
  Button,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  Input,
} from "@shared/components"
import { subscribeToNewsletter } from "./newsletter-service"

const formSchema = z.object({
  email: z
    .string()
    .min(2, "Please fill the email address")
    .email("Opps, your email looks weird"),
})

export function NewsletterForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    subscribeToNewsletter(values)
      .then(() => {
        form.reset()
      })
      .catch(() => {
        form.setError("email", { message: "Opps, something wrong" })
      })
  }

  return (
    <div className="flex flex-col">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col tablet:flex-row gap-3 w-full"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="flex flex-col grow">
                <FormControl>
                  <Input placeholder="Your email address" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">
            Subscribe now <i className="fi fi-br-paper-plane" />
          </Button>
        </form>
      </Form>
    </div>
  )
}
