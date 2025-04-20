export interface Shipment {
    id?: string;
    productType: string;
    street: string;
    city: string;
    state: string;
    zipCode: string;
    weight: number;
    height: number;
    width: number;
    length: number;
    status: string;
  }