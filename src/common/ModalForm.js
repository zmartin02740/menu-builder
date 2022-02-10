import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal'
import TextInput from '../common/TextInput'

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
  const dispatch = useDispatch()
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
          {title !== null &&
            <TextInput
              dispatchType={titleDispatch}
              hint={inputTitleHint}
              value={title}
              title={inputTitle}
            />}
          {price !== null &&
            <TextInput
              dispatchType={priceDispatch}
              hint={inputPriceHint}
              value={price}
              title={inputPrice}
            />}
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