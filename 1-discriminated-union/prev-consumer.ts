import { Order } from './prev-order'

export function createEmailMessage(order: Order) {
  if (order.expectedDelivery) {
    return `${order.name} will be delivered ${order.expectedDelivery}`
  }

  if (order.deliveredOn) {
    return `${order.name} has been delivered on ${order.deliveredOn}`
  }

  if (!order.expectedDelivery && !order.deliveredOn) {
    return `${order.name} is at ${order.at}`
  }
}

// Consuming createEmailMessage
const message = createEmailMessage(order)
if (message) {
  alert(message)
}
