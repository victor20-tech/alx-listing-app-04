import axios from "axios";
import { useEffect, useState } from "react";
import PropertyCard from "@/components/property/PropertyCard"; 

export default function Home() {
    const [properties, setProperties] = useState([]); 
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
        const fetchProperties = async () => {
            try {
                // Fetch the list of properties
                const response = await axios.get("/api/properties"); 
                setProperties(response.data);
            } catch (error) {
                console.error("Error fetching properties:", error); 
            } finally {
                setLoading(false);
            }
        };

        fetchProperties();
    }, []); 

    // Handle loading state
    if (loading) { 
        return <div>Loading...</div>; 
    }

    return (
        // Dynamically display fetched properties
        <div>
            {properties.map((property) => (
                <PropertyCard key={property.id} property={property} /> 
            ))}
        </div>
    );
}