import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal'
import TextInput from '../common/TextInput'
import Warning from './Warning';

export function ModalForm({
  dispatchType,
  formName,
  inputNameHint,
  inputPriceHint,
  inputTitleHint,
  inputName,
  inputPrice,
  inputTitle,
  name = null,
  nameDispatch,
  price = null,
  priceDispatch,
  title = null,
  titleDispatch,
  handleSubmission,
  showModal,
  setShowModal
}) {
  const nameWarning = useSelector(state => state.nameWarning)
  const priceWarning = useSelector(state => state.priceWarning)
  const titleWarning = useSelector(state => state.titleWarning)
  const handleClose = () => setShowModal(false)
  return (
    <>
    <Modal show={showModal} onHide={handleClose}>
      <Form onSubmit={handleSubmission}>
        <Modal.Header closeButton>
          <Modal.Title>{formName} Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {name !== null &&
            <TextInput
              dispatchType={nameDispatch}
              hint={inputNameHint}
              value={name}
              title={inputName}
            />}
          <Warning input={nameWarning} />
          {title !== null &&
            <TextInput
              dispatchType={titleDispatch}
              hint={inputTitleHint}
              value={title}
              title={inputTitle}
            />}
          <Warning input={titleWarning} />
          {price !== null &&
            <TextInput
              dispatchType={priceDispatch}
              hint={inputPriceHint}
              value={price}
              title={inputPrice}
            />}
          <Warning input={priceWarning} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
    </>
  );
}

export default ModalForm