export type Order = {
  status: string
  name: string
  description?: string
  at?: Location
  expectedDelivery?: Date
  deliveredOn?: Date
}
