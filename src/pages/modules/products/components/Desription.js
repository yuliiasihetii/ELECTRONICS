import { useSelector } from "react-redux"

export default function Description() {
    const currentProductDetails = useSelector(state => state.currentProductDetails)
    return (
        <div className="description">
            <p>{currentProductDetails.description}</p>
            <p>Brand: {currentProductDetails.brand}</p>
            <p>Rating: {currentProductDetails.rating}/5</p>
        </div>
    )
}
