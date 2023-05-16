import service from "components/service";
import UpdateService from "components/service/UpdateService";
import { collection, doc, getDoc } from "firebase/firestore";
import { firebaseDatabase } from "firebaseApp/config";
import React, { memo, useEffect, useState } from "react";
import { useParams } from "react-router";
import { Service } from "types/service";

const UpdateServicePage = memo((): JSX.Element => {
  const { id } = useParams<{ id: string }>();
  const [device, setDevice] = useState<Service | null>(null);

  useEffect(() => {
    const fetchDevice = async () => {
      const serviceDoc = doc(collection(firebaseDatabase, "service"), id);
      const serviceData = await getDoc(serviceDoc);
      if (serviceData.exists()) {
        const service = {
          id: serviceData.id,
          ...serviceData.data(),
        } as unknown as Service;
        setDevice(service);
      } else {
        console.log("No such device");
      }
    };
    fetchDevice();
  }, [id]);
  if (!device) {
    return <div>Loading...</div>;
  }
  return <UpdateService service={service} />;
});
export default UpdateServicePage;
