import { useEffect } from 'react';

import { boardFormStore } from '../stores/BoardFormStore';

import useForceUpdate from './useForceUpdate';

export default function useBoardFormStore() {
  const forceUpdate = useForceUpdate();

  useEffect(() => {
    boardFormStore.subscribe(forceUpdate);

    return () => boardFormStore.unsubscribe(forceUpdate);
  }, [forceUpdate]);

  return boardFormStore;
}
