import { describe, expect, test } from "vitest"
import { subscribeToNewsletter } from "./newsletter-service"

describe("Newsletter service", () => {
  describe("Create new subscriber", () => {
    test("Should not throw an error", async () => {
      const input = {
        email: "nyomansunima@gmail.com",
      }
      expect(() => subscribeToNewsletter(input)).not.toThrow()
    })
  })
})
