import { doc, setDoc } from 'firebase/firestore';
import { firebaseDatabase } from 'firebaseApp/config';
import { useState } from 'react';

const useUpdate = (modal: string) => {
  const [loading, setLoading] = useState<boolean>(false);

  const mutate = async (values: object, id: string) => {
    setLoading(true);
    await setDoc(doc(firebaseDatabase, modal, id), values).finally(() => setLoading(false));
  };

  return {
    mutate,
    loading,
  };
};

export default useUpdate;
