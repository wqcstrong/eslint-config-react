import React, { useEffect, useState } from 'react';

export default function App() {
  const [login] = useState(false)
  const [showModal, setShowModal] = useState(false)

  if (login) {
    const [userinfo, setUserinfo] = useState({})
  }

  useEffect(() => {
    if (login) {
      setShowModal(true)
    }
  })

  return <div>xyz</div>;
}
