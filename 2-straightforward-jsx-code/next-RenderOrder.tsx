import { useFetchOrder } from './useFetchOrder'
import { CompleteOrder } from './CompleteOrder-2'
import { InProgressOrder, ReadyOrder } from './fake'

export function RenderOrder() {
  const fetchStatus = useFetchOrder() // Return FetchStatus

  if (fetchStatus.status === 'loading') return <p>Loading...</p>

  const order = fetchStatus.order

  switch (order.status) {
    case 'ready':
      return <ReadyOrder order={order} />

    case 'inProgress':
      return <InProgressOrder order={order} />

    case 'complete':
      return <CompleteOrder order={order} />
  }
}
