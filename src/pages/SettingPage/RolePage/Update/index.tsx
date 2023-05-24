import UpdateRole from 'components/setting/Role/UpdateRole';
import { collection, doc, getDoc } from 'firebase/firestore';
import { firebaseDatabase } from 'firebaseApp/config';
import React, { memo, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Role } from 'types/role';

const UpdateRolePage = memo((): JSX.Element => {
  const { id } = useParams<{ id: string }>();
  const [role, setRole] = useState<Role | null>(null);

  useEffect(() => {
    const fetchRole = async () => {
      const roleDoc = doc(collection(firebaseDatabase, 'roleSetting'), id);
      const roleData = await getDoc(roleDoc);
      if (roleData.exists()) {
        const role = { id: roleData.id, ...roleData.data() } as unknown as Role;
        setRole(role);
      } else {
        console.log('No such device');
      }
    };
    fetchRole();
  }, [id]);
  if (!role) {
    return <div>Loading...</div>;
  }
  return <UpdateRole role={role} />;
});
export default UpdateRolePage;
