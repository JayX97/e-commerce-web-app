const Product = ({ product }) => {
  return (
    <div className='product flex w-full px-4 py-8 gap-5 items-center border-b border-gray-400'>
      <img 
        src={product.images[0]}
        alt={product.title}
        className="size-35"
      />
      <div className="product-info flex w-full flex-col gap-2">
        <h3 className="product-name text-md mb-1"><strong>{product.brand ? product.brand : 'JayMart'}</strong> - {product.title}</h3>
        <p className="product-rating text-xs">Rating - {product.rating}</p>
        <p className="product-price text-2xl my-1"><strong>${product.price}</strong></p>
        <p className="product-ship-info text-sm">{product.shippingInformation}</p>
        <p className="product-availability text-sm">
          {product.availabilityStatus.toLowerCase() === 'in stock'
            ? <span className="text-green-600">{product.availabilityStatus}</span>
            : <span className="text-red-600">{`Only ${product.stock} in stock! Order soon.`}</span>
          }
        </p>
        <button className="bg-amber-400 mt-1 py-2 rounded-lg">Add to Cart</button>
      </div>
    </div>
  )
}

// image, brand, name, rating, price, shipInfo, availability, stock

export default Product;