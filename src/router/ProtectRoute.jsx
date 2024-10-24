import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import useUserStore from '../pages/Store/userStore';
import { currentUser } from '../aip/deletetrip';

const ProtectRoute = ({ element, allow }) => {
  const [isAllowed, setIsAllowed] = useState(null)


  const token = useUserStore((state) => state.token)
  const user = useUserStore((state) => state.user)

  useEffect(() => {
    checkRole()
  }, [])

  const checkRole = async () => {
    try {
      const resp = await currentUser(token)
      const role = resp.data.role

      console.log(`role from back`, role)

      if (allow.includes(role)) {
        setIsAllowed(true)
      } else {
        setIsAllowed(false)
      }
    } catch (err) {
      console.log(err)
      setIsAllowed(false)
    }
  };
  if (isAllowed === null) {
    return <div>Loading...</div>
  }
  if (!isAllowed) {
    console.log(isAllowed)
    return <Navigate to={'/unauthorization'} />

  }

  return element;
};

export default ProtectRoute