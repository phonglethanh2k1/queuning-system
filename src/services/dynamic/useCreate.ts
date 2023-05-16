import { addDoc, collection } from 'firebase/firestore';
import { firebaseDatabase } from 'firebaseApp/config';
import { useState } from 'react';

const useCreate = (modal: string) => {
  const [loading, setLoading] = useState<boolean>(false);

  const mutate = async (values: object) => {
    setLoading(true);
    await addDoc(collection(firebaseDatabase, modal), values).finally(() => setLoading(false));
  };

  return {
    mutate,
    loading,
  };
};

export default useCreate;
