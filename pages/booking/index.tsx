import BookingForm from "@/components/booking/BookingForm"; 
import OrderSummary from "@/components/booking/OrderSummary"; 
import CancellationPolicy from "@/components/booking/CancellationPolicy"; 


export default function BookingPage() {

    // Define booking details 
    const bookingDetails = {
        propertyName: "Villa Arrecife Beach House",
        price: 7500,
        bookingFee: 65,
        totalNights: 3,
        startDate: "24 August 2024",
    }; 

    return (
        <div className="booking-layout">
            
            
            <section className="form-section">
                <BookingForm />
            </section>

            <section className="summary-section">
                <OrderSummary bookingDetails={bookingDetails} />
                <CancellationPolicy /> 
            </section>

        </div>
    );
}