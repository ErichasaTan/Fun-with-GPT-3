import React, { useState } from 'react'

// openAI API
import { Configuration, OpenAIApi } from "openai";

// components
import Response from './Response';

// styles
import '../styles/Prompt.css'

export default function Prompt() {
  const [responses, setResponses] = useState('') ;
  const [usersPrompt, setUsersPrompt] = useState('');
  const [payload, setPayload] = useState([]) ;

  function onSubmit(e) {
    e.preventDefault();     
    const formDetails = new FormData(e.target)
    const formDetailsObject = Object.fromEntries(formDetails.entries())    

    const configuration = new Configuration({
      apiKey: process.env.REACT_APP_OPENAI_SECRET,
    });
    const openai = new OpenAIApi(configuration);

    openai.createCompletion("text-curie-001", {
      prompt: `${usersPrompt}`,
      temperature: 0.5,
      max_tokens: 64,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
    })
    .then((response) => {      
      setUsersPrompt(`${formDetailsObject.prompt}`)
      setResponses(`${response.data.choices[0].text}`)         
      let responseObject

      responseObject = {        
        prompt: `${formDetailsObject.prompt}`,
        response: `${response.data.choices[0].text}`
      }      
      payload.unshift(responseObject)          
    })       
  }  
  
  return (
    <div className="prompt_box">    
      <form className="prompt_form" onSubmit={onSubmit} >
        <label className="prompt_title">Please enter a prompt for GPT-3 <span class="wave">💬</span></label>
        <input
          className="prompt_textbox"
          placeholder='Tell me anything!'
          type='text'
          name='prompt'
          value={usersPrompt}
          onChange={(e) => {setUsersPrompt(e.target.value)}}
        />       
        <input className="prompt_button" type='submit' value='Submit' />  
      </form>
      <Response        
        payload={payload}       
      />        
    </div>
  )
}