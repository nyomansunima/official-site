"use server"

import { kitConnection } from "@shared/libs"

export async function subscribeToNewsletter(input: { email: string }) {
  const { email } = input
  return await kitConnection("/subscribers", {
    method: "POST",
    body: { email_address: email },
  })
}
