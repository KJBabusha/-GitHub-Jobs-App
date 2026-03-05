import React from 'react'
import { Col, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form'

const SearchForm = ({params, onParamChange}) => {
  return (
    <Form className='mb-4'>
        <Row className='align-items-end'> 
            <Form.Group as={Col}>
                    <Form.Label>Description</Form.Label>
                    <Form.Control name='description' value={params.description} onChange={onParamChange} type='text'/>
            </Form.Group>
            <Form.Group as={Col}>
                    <Form.Label>Location</Form.Label>
                    <Form.Control name='location' value={params.location} onChange={onParamChange} type='text'/>
            </Form.Group>
            <Form.Group as={Col} xs='auto' className='ml-2'>
                <Form.Check onChange={onParamChange} value={params.qualifications} name='full_time' label='Full Time' 
                id='full-time' type='checkbox' className='mb-2'  />

            </Form.Group>
       </Row>
    </Form>
   
  )
}

export default SearchForm;