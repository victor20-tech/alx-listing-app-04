import { useRouter } from "next/router";
import axios from "axios";
import { useState, useEffect } from "react";
import PropertyDetail from "@/components/property/PropertyDetail";

export default function PropertyDetailPage() {
    const router = useRouter(); 
    const { id } = router.query; 
    const [property, setProperty] = useState(null); 
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
        const fetchProperty = async () => { 
            if (!id) return;

            try {
                // Fetch property data based on the dynamic ID
                const response = await axios.get(`/api/properties/${id}`); 
                setProperty(response.data); 
            } catch (error) {
                console.error("Error fetching property details:", error); 
            } finally {
                setLoading(false); 
            }
        };

        fetchProperty();
    }, [id]);  

    if (loading) { 
        return <div>Loading...</div>;
    }

    if (!property) { 
        return <div>Property not found</div>;
    }

    return <PropertyDetail property={property} />; 
}