import React,{useState,useEffect} from 'react'
import { Button, Select,Form, Image, Modal } from 'semantic-ui-react'

function AddStep(props) {
  const [open, setOpen] = useState(false)
  const [name, setName] = useState('')
  const [container_id, setContainer_id] = useState('')
  const [showSelectContainerTypes, setShowSelectContainerTypes] = useState({status: null,data: null})
  useEffect(() => { 
    if(props.containerTypesData.status == 1 ){                                                                                                                                             
      let containerTypes = showSelectContainerTypes
      containerTypes.data = props.containerTypesData.data.map(item=>({
        key : item.name,
        value : item.name,
        text : item.name,
      }))
      containerTypes.status = true  
      // debugger
      setShowSelectContainerTypes(containerTypes)
    }
  }, [props.containerTypesData.status])
  var x = {status: null,data: null}
  useEffect(() => {
    if(props.containers.status == 1){
      let cont = props.showContainers
      cont.data = props.containers.data.map(item=>({
        key : item.data.name,
        value : item.container_id,
        text : item.data.name,
      }))
      cont.status = true
      props.setContainers(cont)
    }
  }, [props.containers.status])
  const addNewStep = ()=>{
    props.addNewStep(name,"82c6ce0f-797c-41da-8d01-dd09ba89a46e")
  }
  // console.log(props,'addStepProps')
  console.log(props,'addProps')
  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button>Add Step</Button>}
      >
      <Modal.Header>Add a new Step</Modal.Header>
      <Modal.Content >
        <Modal.Description>
          <Form onSubmit={addNewStep}>
              <Form.Input 
                  label="Name"
                  value={name}
                  onChange={(e)=>setName(e.target.value)}
              />
              <Form.Field>
              {showSelectContainerTypes.status &&
                <Select
                  placeholder='Select Container Type' 
                  options={showSelectContainerTypes.data}
                  onChange={(e,{value})=>{props.getSelectedTypeContainer(value)}}
                />
              }
              {props.showContainers.data &&
                <Select
                  placeholder='Select Container' 
                  options={props.showContainers.data}
                  onChange={(e,{value})=>{setContainer_id(value)}}
                />
              }
              </Form.Field>
              <Form.Field type="submit" control={Button}>Submit</Form.Field>
          </Form>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button color='black' onClick={() => setOpen(false)}>
          Nope
        </Button>
      </Modal.Actions>
    </Modal>
  )
}

export default AddStep
