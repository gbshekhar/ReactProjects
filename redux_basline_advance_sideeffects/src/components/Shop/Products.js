import ProductItem from './ProductItem';
import classes from './Products.module.css';

const products = [{
  id:'p1',
  price : 100,
  name : 'first Book',
  description : 'My first Book'
},{
  id:'p2',
  price : 200,
  name : 'Second Book',
  description : 'My Second Book'
}];
const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {products.map(product => (
          <ProductItem
          key={product.id}
          id={product.id}
          title={product.name}
          price={product.price}
          description={product.description}
        />))}
        
      </ul>
    </section>
  );
};

export default Products;
