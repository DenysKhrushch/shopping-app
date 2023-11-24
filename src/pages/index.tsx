import {HomeLayout} from "@/layout/home-layout";

export default function Home({products}: {products: any, cart: any}) {

  return (
      <HomeLayout products={products} />
  )
}

export async function getStaticProps() {

  const res = await fetch('https://dummyjson.com/products')

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  const products = await res.json()

  return {
    props: {
      products: products.products,
      cart: []
    }
  }
}