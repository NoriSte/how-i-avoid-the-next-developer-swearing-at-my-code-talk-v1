import type { Order } from '../1-discriminated-union/next-order'

import { useEffect, useMemo, useState } from 'react'

export type FetchStatus =
  | {
      status: 'loading'
    }
  | {
      status: 'success'
      order: Order
    }

export function useFetchOrder() {
  const [order, setOrder] = useState<Order | undefined>()

  useEffect(() => {
    fetch('https://api.yourdomain.com/latest-order')
      .then(response => response.json())
      .then(order => setOrder(order))
  }, [])

  return useMemo<FetchStatus>(() => {
    return order ? { status: 'success', order } : { status: 'loading' }
  }, [order])
}
