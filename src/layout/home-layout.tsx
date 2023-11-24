import {FC} from "react";
import {Product} from "@/interfaces/Product";
import {ShoppingCart} from "@/layout/shopping-cart";
import Link from "next/link";
import {useObserverContext} from "@/contexts/ObserverContext";

interface HomeLayoutProps {
    products: Product[];
}

export const HomeLayout: FC<HomeLayoutProps> = ({products}) => {

    const { open, setOpen, addProductToCart } = useObserverContext();

    return (
        <>
            <ShoppingCart />
            <div className="bg-white">
                <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900">Product List</h2>
                    <button
                        onClick={() => setOpen && setOpen(!open)}
                        className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                       Open Cart
                    </button>
                    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                        {products.map((product) => (
                            <>
                                <div key={product.id} className="group relative">
                                    <Link href={`/product/${product.id}`}>
                                        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                                            <img
                                                src={product.thumbnail}
                                                alt={product.title}
                                                className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                            />
                                        </div>
                                        <div className="mt-4 flex justify-between">
                                            <div>
                                                <h3 className="text-sm text-gray-700">
                                                    <span aria-hidden="true" className="absolute inset-0" />
                                                    {product.title}
                                                </h3>
                                                <p className="mt-1 text-sm text-gray-500">{product.brand}</p>
                                            </div>
                                            <p className="text-sm font-medium text-gray-900">{product.price}</p>
                                        </div>
                                    </Link>
                                </div>
                                <button
                                    onClick={() => addProductToCart(product)}
                                    className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                >
                                    Add to bag
                                </button>
                            </>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}