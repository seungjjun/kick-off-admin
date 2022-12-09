import { useEffect } from 'react';

import { adminStore } from '../stores/AdminStore';

import useForceUpdate from './useForceUpdate';

export default function useAdminStore() {
  const forceUpdate = useForceUpdate();

  useEffect(() => {
    adminStore.subscribe(forceUpdate);

    return () => adminStore.unsubscribe(forceUpdate);
  }, [forceUpdate]);

  return adminStore;
}
