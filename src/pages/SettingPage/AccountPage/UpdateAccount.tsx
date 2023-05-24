import UpdateAccount from 'components/setting/Account/UpdateAccount';
import { collection, doc, getDoc } from 'firebase/firestore';
import { firebaseDatabase } from 'firebaseApp/config';
import React, { memo, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Account } from 'types/account';

const UpdateAccountPage = memo((): JSX.Element => {
  const { id } = useParams<{ id: string }>();
  const [account, setAccount] = useState<Account | null>(null);

  useEffect(() => {
    const fetchAccount = async () => {
      const accountDoc = doc(collection(firebaseDatabase, 'accountSetting'), id);
      const accountData = await getDoc(accountDoc);
      if (accountData.exists()) {
        const account = { id: accountData.id, ...accountData.data() } as unknown as Account;
        setAccount(account);
      } else {
        console.log('No such device');
      }
    };
    fetchAccount();
  }, [id]);
  if (!account) {
    return <div>Loading...</div>;
  }
  return <UpdateAccount account={account} />;
});
export default UpdateAccountPage;
