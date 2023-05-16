import UpdateDevice from 'components/device/UpdateDevice';
import { collection, doc, getDoc } from 'firebase/firestore';
import { firebaseDatabase } from 'firebaseApp/config';
import React, { memo, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Device } from 'types/device';

const UpdateDevicePage = memo((): JSX.Element => {
  const { id } = useParams<{ id: string }>();
  const [device, setDevice] = useState<Device | null>(null);

  useEffect(() => {
    const fetchDevice = async () => {
      const deviceDoc = doc(collection(firebaseDatabase, 'device'), id);
      const deviceData = await getDoc(deviceDoc);
      if (deviceData.exists()) {
        // eslint-disable-next-line @typescript-eslint/no-shadow
        const device = { id: deviceData.id, ...deviceData.data() } as unknown as Device;
        setDevice(device);
      } else {
        console.log('No such device');
      }
    };
    fetchDevice();
  }, [id]);
  if (!device) {
    return <div>Loading...</div>;
  }
  return <UpdateDevice device={device} />;
});
export default UpdateDevicePage;
