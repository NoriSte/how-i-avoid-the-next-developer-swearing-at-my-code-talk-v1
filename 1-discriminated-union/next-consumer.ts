import { Order } from './next-order'

export function createEmailMessage(order: Order) {
  switch (order.status) {
    case 'ready':
      return `${order.name} is at ${order.at}`

    case 'inProgress':
      return `${order.name} will be delivered ${order.expectedDelivery}`

    case 'complete':
      return `${order.name} has been delivered at ${order.deliveredOn}`
  }
}

// Consuming createEmailMessage
const message = createEmailMessage(order)
alert(message)
