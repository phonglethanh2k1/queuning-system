/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { collection, getCountFromServer, getDocs, limit, query, QueryDocumentSnapshot } from 'firebase/firestore';
import { firebaseDatabase } from 'firebaseApp/config';
import React, { useEffect, useState } from 'react';

export type ResponseProps = {
  data: any[];
  loading: boolean;
  mutate(): Promise<void>;
  size: number;
};

const useList = (modal: string, page?: { page: number }): ResponseProps => {
  const [data, setData] = useState<any>([]);
  const [size, setSize] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);

  const mutate = React.useCallback(async () => {
    setLoading(true);
    const equipment = collection(firebaseDatabase, modal);
    const queryString = query(equipment, limit(10));
    const snapshot = await getDocs(queryString).finally(() => setLoading(false));

    const coll = collection(firebaseDatabase, modal);
    const countSnapshot = await getCountFromServer(coll);
    setSize(countSnapshot.data().count);

    const result = snapshot.docs.map((doc: QueryDocumentSnapshot<any>) => ({
      ...doc.data(),
      id: doc.id,
    }));
    setData(result);
  }, [modal, page]);

  useEffect(() => {
    mutate();
  }, [mutate]);

  return {
    data,
    loading,
    mutate,
    size,
  };
};

export default useList;
