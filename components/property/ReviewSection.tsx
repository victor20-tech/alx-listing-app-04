import axios from "axios"; 
import { useState, useEffect } from "react"; 

const ReviewSection = ({ propertyId }) => { 
    const [reviews, setReviews] = useState([]); 
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
        const fetchReviews = async () => { [15]
            try {
                // Fetch reviews based on propertyId
                const response = await axios.get(`/api/properties/${propertyId}/reviews`); 
                setReviews(response.data); [15]
            } catch (error) {
                console.error("Error fetching reviews:", error); 
            } finally {
                setLoading(false); 
            }
        };

        fetchReviews();
    }, [propertyId]); 

    if (loading) { 
        return <div>Loading reviews...</div>;
    }

    return (
        <div>
            {/* Dynamically display fetched reviews */}
            {reviews.map((review) => (
                <div key={review.id}>{review.comment}</div> 
            ))}
        </div>
    );
};

export default ReviewSection;