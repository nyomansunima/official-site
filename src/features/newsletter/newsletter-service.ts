import { kitClient } from "@shared/libs";
import { createServerFn } from "@tanstack/react-start";
import z from "zod";

export const subscribeToNewsletter = createServerFn({ method: "POST" })
  .inputValidator(
    z.object({
      email: z.string(),
    })
  )
  .handler(async (ctx) => {
    const input = ctx.data;
    const payload = {
      email_address: input.email,
    };

    const res = await kitClient.post("/subscribers", {
      ...payload,
    });

    if (!res.data) {
      throw new Error("Opps, something error when submit form");
    }
  });
