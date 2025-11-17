
import ProductCard from './ProductCard';

const BestSeller = () => {
    return (
        <div className='mt-16 mx-16'>
            <p className='text-2xl md:text-4xl font-medium'>Best Sellers</p>
            <div>
            <ProductCard/>
            </div>
        </div>
    );
};

export default BestSeller;