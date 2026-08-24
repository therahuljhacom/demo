import { useEffect, useState } from 'react';
import styles from './ProductListing.module.css';
const ProductListing = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const fetchProducts = async () => {
        setLoading(true);
        try {
            const response = await fetch('https://dummyjson.com/products');
            const data = await response.json();
            setProducts(data.products);
            setLoading(false);
            // hello worl 
        } catch (error) {
            setError(error);
            setLoading(false);
        } finally {
            setLoading(false);
        }
    }
    useEffect(() => {
        fetchProducts();
    }, []);
    interface Product {
        id: number;
        title: string;
        price: number;
        thumbnail: string;
    }
    return (
        <div className={styles.productListing}>
            {loading && <p>Loading products...</p>}
            {error && <p>Error fetching products: {error.message}</p>}
            {!loading && !error && products.length > 0 && (
                products.map((product: Product) => (
                    <div key={product.id} className={styles.productCard}>
                        <img
                            src={product.thumbnail}
                            alt={product.title}
                            className={styles.productImage}
                        />
                        <h3 className={styles.productTitle}>{product.title}</h3>
                        <p className={styles.productPrice}>${product.price}</p>
                    </div>
                ))
            )}
        </div>
    )
}
export default ProductListing;