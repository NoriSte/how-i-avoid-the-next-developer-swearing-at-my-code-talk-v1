import type { Order } from '../1-discriminated-union/prev-order'

import { useCallback, useEffect, useState } from 'react'

import { createEmailMessage } from '../1-discriminated-union/prev-consumer'
import { sendEmail } from './fake'

export function RenderOrder() {
  const [order, setOrder] = useState<Order | undefined>()

  useEffect(() => {
    fetch('https://api.yourdomain.com/latest-order')
      .then(response => response.json())
      .then(order => setOrder(order))
  }, [])

  const onSendEmailClick = useCallback(() => {
    if (!order) return

    const message = createEmailMessage(order)
    if (message) {
      sendEmail(message)
    }
  }, [order])

  if (!order) return null

  return (
    <div>
      <p>
        {order.name} ({order.status})
      </p>
      {order.description && <p>{order.description}</p>}

      {!order.deliveredOn && order.expectedDelivery && (
        <p>Expected delivery: {order.expectedDelivery}</p>
      )}
      {order.deliveredOn && <p>Delivered on: {order.deliveredOn}</p>}

      <button onClick={onSendEmailClick}>Send email</button>
    </div>
  )
}
