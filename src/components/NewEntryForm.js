import React from 'react'
import ButtonSaveOrCancel from "./ButtonSaveOrCancel";
import { Form } from "semantic-ui-react";

const NewEntryForm = () => {
    return (
        <Form unstackable>
        <Form.Group>
        <Form.Input icon='tags' width={12} label='Description' placeholder='New shinny thing'/>
        <Form.Input iconPosition='left' icon='dollar' width={4} label='Value' placeholder='100'/>
        </Form.Group>
        <ButtonSaveOrCancel/>
      </Form>
    )
}

export default NewEntryForm
