import Detail from 'components/levelNo/Detail';
import { collection, doc, getDoc } from 'firebase/firestore';
import { firebaseDatabase } from 'firebaseApp/config';
import React, { memo, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { LevelNo } from 'types/levelNo';

const LeveNoPage = memo((): JSX.Element => {
  const { id } = useParams<{ id: string }>();
  const [levelNo, setLevelNo] = useState<LevelNo | null>(null);
  console.log(levelNo)
  useEffect(() => {
    const fetchLevelNo = async () => {
      const levelNoDoc = doc(collection(firebaseDatabase, 'levelNo'), id);
      const levelNoData = await getDoc(levelNoDoc);
      if (levelNoData.exists()) {
        const levelNo = { id: levelNoData.id, ...levelNoData.data() } as unknown as LevelNo;
        setLevelNo(levelNo);
      } else {
        console.log('No such device');
      }
    };
    fetchLevelNo();
  }, [id]);
  if (!levelNo) {
    return <div>Loading...</div>;
  }
  // get detail ddos ra owr usserEffeft
  // truyền props vào  detail page để view

  return <Detail levelNo={levelNo} />;
});
export default LeveNoPage;
