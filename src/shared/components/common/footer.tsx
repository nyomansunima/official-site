import * as React from "react"

export function Footer() {
  return (
    <footer className="flex flex-col" id="footer">
      <div className="flex flex-row items-center py-7 justify-between mt-8">
        <span className="text-sm cursor-pointer">&copy; Nyoman Sunima</span>
        <span className="text-sm cursor-pointer">Design in Bali</span>
      </div>
    </footer>
  )
}
