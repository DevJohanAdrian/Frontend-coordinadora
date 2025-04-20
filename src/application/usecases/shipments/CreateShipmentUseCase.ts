import { Shipment } from '@/domain/entities/Shipment'
import { ShipmentData } from '@/domain/interfaces/Shipment.interface'
import { ShipmentRepository } from '@/domain/repositories/ShipmentRepository'

export class CreateShipmentUseCase {
    constructor(private shipmentRepo: ShipmentRepository) { }
    async execute(data: ShipmentData): Promise<Shipment> {
      return this.shipmentRepo.create(data)
    }
}
