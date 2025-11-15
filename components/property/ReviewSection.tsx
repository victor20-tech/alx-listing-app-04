import axios from "axios"; [14]
import { useState, useEffect } from "react"; [14]

const ReviewSection = ({ propertyId }) => { [14]
    const [reviews, setReviews] = useState([]); [14]
    const [loading, setLoading] = useState(true); [14]

    useEffect(() => {
        const fetchReviews = async () => { [15]
            try {
                // Fetch reviews based on propertyId
                const response = await axios.get(`/api/properties/${propertyId}/reviews`); [15]
                setReviews(response.data); [15]
            } catch (error) {
                console.error("Error fetching reviews:", error); [15]
            } finally {
                setLoading(false); [15]
            }
        };

        fetchReviews();
    }, [propertyId]); [15]

    if (loading) { [15]
        return <div>Loading reviews...</div>;
    }

    return (
        <div>
            {/* Dynamically display fetched reviews */}
            {reviews.map((review) => (
                <div key={review.id}>{review.comment}</div> // Assuming 'review' object has a 'comment' field
            ))}
        </div>
    );
};

export default ReviewSection;