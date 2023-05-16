/* eslint-disable @typescript-eslint/no-explicit-any */
import { doc, getDoc } from 'firebase/firestore';
import { firebaseDatabase } from 'firebaseApp/config';
import React, { useEffect, useState } from 'react';

const useDetailById = (modal: string, id: string) => {
  const [data, setData] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const mutate = React.useCallback(async () => {
    setLoading(true);
    const snap = await getDoc(doc(firebaseDatabase, modal, id)).finally(() => setLoading(false));
    setData(snap.data());
  }, [id, modal]);

  useEffect(() => {
    if (id !== 'create') mutate();
  }, [id, mutate]);

  return {
    data,
    mutate,
    loading,
  };
};

export default useDetailById;
