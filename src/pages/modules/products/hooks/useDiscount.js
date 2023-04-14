export default function useDiscount(product) {
    const discount = (product.price - product.price * (product.discountPercentage / 100)).toFixed(2)

    return discount
}