import React,{useState, useEffect} from 'react'
import { Form , Button} from 'semantic-ui-react'
function Step3(props) {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [status, setStatus] = useState('')
  useEffect(() => {
    setName(props.name)
    setDescription((props.description !=null) ? props.description : '')
  }, [])
  const submitCampaignSettings = ()=>{
    let data = {
      name : name,
      description : description,
    }
    let dataToSend = {
      data : data,
      step_id : props.step_id
    }
    props.updateStep(dataToSend,3)
  }  
  return (
    <div>
       <Form onSubmit={submitCampaignSettings}>
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
    </div>
  )
}

export default Step3