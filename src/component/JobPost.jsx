import React,{ useState} from 'react'
import { Badge, Button, Card, CardBody, Collapse } from 'react-bootstrap'
import ReactMarkdown from 'react-markdown'




const JobPost = ({job}) => {
    const [open, setOpen] = useState(false)

  return (
    <Card className='mb-3'>
        <CardBody>
            <div className='d-flex justify-content-between'>
                <div>
                    <Card.Title>{job.title} -
                        <span className='text-muted font-weight-light'>
                            {job.company}
                        </span>

                    </Card.Title>
                    <Card.Subtitle className='text-muted mb-2'>
                        {new Date(job.created_at).toLocaleDateString()}
                    </Card.Subtitle>
                    <Badge variant='secondary' className='mr-3'> {job.employee_type}</Badge>
                    <Badge variant='secondary'> {job.location}</Badge>
                    <div style={{wordBreak: 'break-all'}}>
                       <ReactMarkdown>{job.how_to_apply}</ReactMarkdown>
                    </div>
                </div>
                <img className='d-none d-md-block' height='50' alt={job.company} src={job.company_logo} />
            </div>
            <Card.Text className='mt-4'>
                <Button variant='primary'
                    onClick={()=>setOpen(prevOpen => !prevOpen)}
                >
                    {open ? 'Hide Details' : 'View Details'}
                </Button>
            </Card.Text>
            <Collapse in={open}>
                <div className='mt-4'>
                    <ReactMarkdown>{job.category}</ReactMarkdown>
                    <ReactMarkdown>{job.description}</ReactMarkdown>
                    <ReactMarkdown>{job.qualifications}</ReactMarkdown>
                    <ReactMarkdown>{job.application_deadline}</ReactMarkdown>
                </div>
            </Collapse>

        </CardBody>
    </Card>
  )
}

export default JobPost