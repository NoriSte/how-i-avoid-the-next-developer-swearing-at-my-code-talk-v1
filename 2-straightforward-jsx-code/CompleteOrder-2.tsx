import type { Order } from '../1-discriminated-union/next-order'
import { OrderHeading, SendEmailButton } from './fake'

type CompletedOrder = Extract<Order, { status: 'complete' }>

type Props = {
  order: CompletedOrder
}

export function CompleteOrder(props: Props) {
  const { order } = props
  const { name, description, deliveredOn } = order

  return (
    <div>
      <OrderHeading name={name} description={description} />

      <p>Delivered on: {deliveredOn}</p>

      <SendEmailButton order={order} />
    </div>
  )
}
