import { describe, expect, test, it } from "vitest"
import { getWorkDetail, getWorks } from "./work-service"

describe("Work Service", () => {
  describe("All works", () => {
    test("Should not null", async () => {
      const works = await getWorks()
      expect(works).not.toBeNull()
      expect(works.length).not.toBeNull()
    })
  })

  describe("Work detail", () => {
    test("Should not null", async () => {
      const slug = "dev-crates"
      const work = await getWorkDetail(slug)
      expect(work).not.toBeNull()
    })

    test("Get work detail", async () => {
      const slug = "dev-crates"
      const work = await getWorkDetail(slug)
      expect(work.meta.title).not.toBeNull()
      expect(work.meta.title).not.toEqual("")
    })
  })
})
