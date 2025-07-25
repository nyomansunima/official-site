export function Footer() {
  return (
    <footer className="flex flex-col" id="footer">
      <div className="flex flex-row items-center py-7 justify-between mt-8">
        <span className="text-sm cursor-pointer inline-flex gap-2">
          <i className="fi fi-sr-check-circle" />
          Design and craft in Bali
        </span>
        <span className="text-sm cursor-pointer inline-flex gap-2">
          Built with
          <i className="fi fi-sr-heart" />
        </span>
      </div>
    </footer>
  )
}
