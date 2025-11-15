import axios from "axios"; 
import { useState } from "react"; 

export default function BookingForm() {
    const [formData, setFormData] = useState({
        /* initialization of booking fields... */
    });
    
    const [loading, setLoading] = useState(false); 
    const [error, setError] = useState(null); 

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            // Submit booking details via POST request
            const response = await axios.post("/api/bookings", formData); 
            alert("Booking confirmed!");
        } catch (error) {
            setError("Failed to submit booking.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            {/* Form fields for booking details */}
            <button type="submit" disabled={loading}>
                {loading ? "Processing..." : "Confirm & Pay"}
            </button>
            {error && (
                <p style={{ color: 'red' }}>{error}</p> 
            )}
        </form>
    );
}