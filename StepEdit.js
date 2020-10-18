import React,{useState, useEffect} from 'react'
import { Form , Button ,Icon, Modal} from 'semantic-ui-react'
function StepEdit(props) {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [status, setStatus] = useState('')
  const [open, setOpen] = useState(false)
  useEffect(() => {
    setName(props.name)
    setDescription((props.description !=null) ? props.description : '')
  }, [])
  const submitStep = ()=>{
    let data = {
      name : name,
      description : description,
    }
    let dataToSend = {
      data : data,
      step_id : props.step_id,
      index: props.index
    }
    props.updateStep(dataToSend)
  }  
  useEffect(() => {
    if(props.updateStatus == 1){
      setOpen(false)
    }
  }, [props.updateStatus])
  return (
    <div>
      <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Icon name="edit" />}
      >
      <Modal.Header>Add a new Step</Modal.Header>
      <Modal.Content >
        <Modal.Description>
          <Form onSubmit={submitStep}>
            <Form.Group>
              <Form.Input 
                label="Name"
                placeholder="Name"
                value={name}
                onChange={((e)=>setName(e.target.value))}
              />
              <Form.Input 
                label="Description"
                placeholder="Description"
                value={description}
                onChange={((e)=>setDescription(e.target.value))}
              />
            </Form.Group>
            <Form.Group>
              <Button type="submit">Next Step</Button>
            </Form.Group>
          </Form>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button color='black' onClick={() => setOpen(false)}>
          Nope
        </Button>
      </Modal.Actions>
    </Modal>
    </div>
  )
}

export default StepEdit
