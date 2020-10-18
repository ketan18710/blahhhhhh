import React, {useEffect, useState} from 'react'
import {  Form } from 'semantic-ui-react'

function CampaignForm(props) {
  const [subject, setSubject] = useState('')
  const [campaignName, setCampaignName] = useState('')
  const [fromName, setFromName] = useState('')
  const [fromEmail, setFromEmail] = useState('')
  const [replyTo, setReplyTo] = useState('')
  useEffect(() => {
    console.log(props)
  }, [props.data])
  const submitForm = ()=>{
    let dataToSend ={
      data:{
          subject: subject,
          title : campaignName,
          from_name: fromName,
          from_email: fromEmail,
          reply_to: replyTo
      },
      id: props.data.id
  }
  }
  return (
    <Form onSubmit={submitForm}>
      <Form.Group>
        <Form.Input 
          name="subject"
          value={subject}
          placeholder='subject'
          onChange={(e)=>{setSubject(e.target.value)}}
        />
        <Form.Input 
          name="Campaign Name"
          value={campaignName}
          placeholder='Campaign Name'
          onChange={(e)=>{setCampaignName(e.target.value)}}
        />
      </Form.Group>
      <Form.Group>
        <Form.Input 
          name="From Name"
          value={fromName}
          placeholder='From Name'
          onChange={(e)=>{setFromName(e.target.value)}}
        />
        <Form.Input 
          name="From Email"
          value={fromEmail}
          placeholder='From Email'
          onChange={(e)=>{setFromEmail(e.target.value)}}
        />
      </Form.Group>
      <Form.Group>
        <Form.Input 
          name="Reply To"
          value={replyTo}
          placeholder='Reply To'
          onChange={(e)=>{setReplyTo(e.target.value)}}
        />
        <Form.Button 
          name="Submit"
          type="submit"
        />
      </Form.Group>
    </Form>
  )
}

export default CampaignForm
