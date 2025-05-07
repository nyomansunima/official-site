import { CraftData, CraftItem } from "./craft-item"
import productsData from "./products-data.json"

const products = productsData as CraftData[]

export function ProductSection() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-2">
        <span className="text-sm text-foreground/60 font-mono tracking-tight">
          Products.
        </span>
        <h2 className="text-lg font-medium">Things as results.</h2>
      </div>

      <div className="grid grid-cols-1 tablet:grid-cols-2 w-full gap-2 tablet:gap-3 mt-10">
        {products.map((craft, i) => (
          <CraftItem craft={craft} key={i} />
        ))}
      </div>
    </div>
  )
}
