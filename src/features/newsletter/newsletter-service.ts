import { kitClient } from "@shared/libs"
import { createServerFn } from "@tanstack/react-start"

interface SubscribeInput {
  email: string
}

export const subscribeToNewsletter = createServerFn({ method: "POST" })
  .validator((data: SubscribeInput) => data)
  .handler(async (ctx) => {
    const input = ctx.data
    const payload = {
      email_address: input.email,
    }

    const res = await kitClient.post("/subscribers", {
      ...payload,
    })

    if (!res.data) {
      throw new Error("Opps, something error when submit form")
    }
  })
