export function Footer() {
  return (
    <footer className="flex flex-col" id="footer">
      <div className="mt-8 flex flex-row items-center justify-between py-7">
        <span className="inline-flex cursor-pointer gap-2">
          <i className="fi fi-sr-check-circle text-sm" />
          Design and craft in Bali
        </span>
        <span className="inline-flex cursor-pointer gap-2">
          Built with
          <i className="fi fi-sr-heart text-sm" />
        </span>
      </div>
    </footer>
  );
}
