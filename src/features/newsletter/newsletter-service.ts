import { kitClient } from "@shared/libs"

interface SubscribeInput {
  email: string
}

export async function subscribeToNewsletter(
  input: SubscribeInput,
): Promise<void> {
  const payload = {
    email_address: input.email,
  }

  const res = await kitClient.post("/subscribers", {
    ...payload,
  })

  if (!res.data) {
    throw new Error("Opps, something error when submit form")
  }
}
