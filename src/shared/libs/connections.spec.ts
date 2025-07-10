import { describe, expect, test } from "vitest"
import { kitClient } from "./connections"

describe("Connections", () => {
  describe("Check kit connections", async () => {
    test("Should not throw error", async () => {
      expect(() => kitClient.get("/subscribers")).not.toThrow()
    })

    test("Success get subscribers", async () => {
      const res = await kitClient.get("/subscribers")
      const subscribers = res.data.subscribers as any[]

      expect(subscribers).not.toBeNull()
      expect(subscribers.length).toBeGreaterThanOrEqual(0)
    })
  })
})
