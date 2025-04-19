import { Shipment } from '@/domain/entities/Shipment'
import { ShipmentData } from '@/domain/interfaces/Shipment.interface'
import { axiosPrivate } from '../services/axios/axiosConfigInstances';
import { ShipmentRepository } from '@/domain/repositories/ShipmentRepository'

export class ShipmentApiRepository implements ShipmentRepository {
  async create(data: ShipmentData): Promise<Shipment> {
    const res = await axiosPrivate.post<Shipment>('/shipments/create', data)
    return res.data
  }
}