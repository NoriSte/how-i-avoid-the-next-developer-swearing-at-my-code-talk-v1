export type Order = {
  name: string
  description?: string
  at: Location
} & (
  | {
      status: 'ready'
    }
  | {
      status: 'inProgress'
      expectedDelivery: Date
    }
  | {
      status: 'complete'
      expectedDelivery: Date
      deliveredOn: Date
    }
)
