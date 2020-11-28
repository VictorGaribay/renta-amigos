import { Field, Form, Formik } from 'formik'
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
import Button from '../base/Button'
import Select from '../base/Select'

interface ModalProps {
  openModal: () => void
}

interface MyFormValues {
  day: string
  hour: string
  opinion: string
}

const ModalSchedule: React.FC<ModalProps> = ({ openModal }) => {
  const initialValues: MyFormValues = {
    day: '',
    hour: '',
    opinion: ''
  }
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
            <Formik
              initialValues={initialValues}
              onSubmit={(values, { setSubmitting }) => {
                if (values) {
                  alert(JSON.stringify(values, null, 2))
                  setSubmitting(false)
                }
              }}
            >
              <Form>
                <div style={{ display: 'flex' }}>
                  <Select name="day" label="Seleccionar día" data={Days} />
                  <Select name="hour" label="Seleccionar hora" data={Hours} />
                </div>
                <p>
                  <b>¿Porqué desea rentar a Antonio?</b>
                </p>
                <Field as="textarea" cols={33} rows={10} name="opinion" />

                <br />
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <Button type="submit" label="rentar" />
                </div>
              </Form>
            </Formik>
          </ModalContent>
        </ModalWrapper>
      </Background>
    </Portal>
  )
}

export default ModalSchedule
