import * as React from "react"

export function Footer() {
  return (
    <footer className="flex flex-col" id="footer">
      <div className="flex flex-col tablet:flex-row tablet:items-center py-7 tablet:justify-between mt-8">
        <span className="text-sm cursor-pointer">&copy; Nyoman Sunima</span>
        <span className="text-sm cursor-pointer">Design in Bali</span>
      </div>
    </footer>
  )
}
