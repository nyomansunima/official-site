import products from "./products-data.json" with { type: "json" };

type ProductData = {
  title: string;
  link: string;
};

type ProductItemProps = {
  product: ProductData;
};

type ProductGroupData = {
  title: string;
  list: ProductData[];
};

type ProductGroupProps = {
  group: ProductGroupData;
};

function ProductItem({ product }: ProductItemProps) {
  const { title, link } = product;

  return (
    <a className="flex items-center gap-2 py-2" href={link} target="_blank">
      <svg
        className="fill-foreground/40"
        height="10"
        viewBox="0 0 24 24"
        width="10"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12,17c-2.76,0-5-2.24-5-5s2.24-5,5-5,5,2.24,5,5-2.24,5-5,5Z" />
      </svg>
      <span>{title}</span>
    </a>
  );
}

function ProductGroup({ group }: ProductGroupProps) {
  const { title, list } = group;

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-foreground/60">{title}:</h2>

      <div className="grid grid-cols-1 gap-x-16 gap-y-1 md:grid-cols-3">
        {list.map((product, index) => (
          <ProductItem key={index} product={product} />
        ))}
      </div>
    </div>
  );
}

export function ProductsSection() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-16">
        {products.map((group, i) => (
          <ProductGroup group={group} key={i} />
        ))}
      </div>
    </div>
  );
}
