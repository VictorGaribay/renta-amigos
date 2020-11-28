import Head from 'next/head'
import React, { useState } from 'react'
import Button from 'src/components/base/Button'
import ModalSchedule from 'src/components/modals/ModalSchedule'
import { Container } from 'src/styles/globalStyled'

const Home: React.FC = () => {
  const [isOpenModal, setOpenModal] = useState(false)
  function openModal(): void {
    setOpenModal(prev => !prev)
  }

  return (
    <div>
      <Head>
        <title>RentaAmigos | Home</title>
      </Head>
      <Container>
        <div>
          <Button onClick={openModal} label="Rentar amigo" />
        </div>

        {isOpenModal && <ModalSchedule openModal={openModal} />}
      </Container>
    </div>
  )
}
export default Home
