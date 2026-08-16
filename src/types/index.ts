export interface BookingFormProps {
  selectedPackage: {
    title: string;
    duration: string;
    price: string;
    description?: string;
  };
  formData: {
    name: string;
    email: string;
    appointmentDate: Date | null;
    paymentProof: File | null;
    additionalMessage: string;
  };
}

export interface PriceOption {
  value: string;
  duration: string;
  amount: string;
  description?: string;
}

export interface Offer {
  title: string;
  price: PriceOption[];
}

export interface MassageOption {
  value: string;
  duration: string;
  amount: string;
}
