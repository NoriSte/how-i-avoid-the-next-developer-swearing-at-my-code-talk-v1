import type { Order } from '../1-discriminated-union/next-order'
import { OrderHeading, SendEmailButton } from './fake'

type Props = {
  order: Order
}

export function CompleteOrder(props: Props) {
  const { order } = props

  if (order.status !== 'complete') return null

  const { name, description, deliveredOn } = order

  return (
    <div>
      <OrderHeading name={name} description={description} />

      <p>Delivered on: {deliveredOn}</p>

      <SendEmailButton order={order} />
    </div>
  )
}
