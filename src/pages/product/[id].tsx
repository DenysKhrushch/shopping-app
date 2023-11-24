import React, {FC} from "react";
import {Product} from "@/interfaces/Product";
import {ProductLayout} from "@/layout/product-layout";


interface ProductPageProps {
    product: Product,
}

const ProductPage:FC<ProductPageProps> = ({product}) => {

    return(
        <ProductLayout product={product} />
    );
}

export default ProductPage;

export async function getStaticProps({ params }: { params: { id: string }}) {
    const res = await fetch(`https://dummyjson.com/products/${params.id}`);

    if (!res.ok) {
        return { notFound: true };
    }

    const product = await res.json();

    return {
        props: {
            product,
        },
    };
}

export async function getStaticPaths() {
    const res = await fetch('https://dummyjson.com/products');
    const data = await res.json();

    const paths = data.products.map((product: Product) => ({
        params: { id: product.id.toString() },
    }));

    return { paths, fallback: false };
}
