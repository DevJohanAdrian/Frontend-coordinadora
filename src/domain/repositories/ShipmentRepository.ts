import { ShipmentData } from "@/domain/interfaces/Shipment.interface";
import { Shipment } from "../entities/Shipment"


export interface ShipmentRepository {
  create(data:ShipmentData): Promise<Shipment>;
}