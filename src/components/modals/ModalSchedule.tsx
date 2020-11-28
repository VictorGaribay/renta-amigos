import React from 'react'
import { Days, Hours } from 'src/helpers/data'
import {
  Background,
  CloseModalButton,
  ModalContent,
  ModalImg,
  ModalWrapper
} from 'src/styles/globalStyled'
import Friend from '../../assets/friend.jpg'
import Portal from '../../lib/Portal'
import Select from '../base/Select'

interface ModalProps {
  openModal: () => void
}
const ModalSchedule: React.FC<ModalProps> = ({ openModal }) => {
  return (
    <Portal selector="#modalSchedule">
      <Background>
        <ModalWrapper>
          <ModalImg src={Friend} alt="camera" />
          <CloseModalButton
            aria-label="Close modal"
            onClick={() => {
              openModal()
            }}
          />
          <ModalContent>
            <h1>Disponibilidad de tiempo</h1>
            <div style={{ display: 'flex' }}>
              <Select label="Seleccionar día" data={Days} />
              <Select label="Seleccionar hora" data={Hours} />
            </div>
            <p>¿Porqué desea rentar a Antonio?</p>
            <textarea cols={30} rows={10} />
            <br />
            <button>Rentar</button>
          </ModalContent>
        </ModalWrapper>
      </Background>
    </Portal>
  )
}

export default ModalSchedule
