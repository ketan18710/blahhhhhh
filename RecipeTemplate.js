import React, {useEffect, useState} from 'react'
import {  Grid, Menu, Segment } from 'semantic-ui-react'
import AddStep from './AddStep'
import StepEdit from './StepEdit'
import CampaignForm from './CampaignForm'
import LoadingIndicator from '../LoadingIndicator/index';
import API_CONSTANTS from '../../utils/constants'
import { updateStep } from '../../containers/Recipes/actions'
// const recipe_id = props.recipe_id
// const container_id = props.container_id
function RecipeTemplate(props) {
    const [activeContainerId, setActiveContainerId] = useState('initial')
    const [showContainers, setShowContainers] = useState({status: null,data: null})
    const [menuItem, setMenuItem] = useState([])
    const handleItemClick = (id)=>{ setActiveContainerId(id)}
    const updateStepFunc= (data)=>{
        data.recipe_id = props.recipe_id
        data.data.buuid = props.buuid
        props.updateStep(data)       
    }
 
    console.log(props,'propsTemplate')
    useEffect(() => {
        if(props.recipeData.data.steps.length >0){
            let steps = props.recipeData.data.steps
            let menuitem = []
            steps.map((step,index)=>{
               let item =  
               <Menu.Item
                    className={(activeContainerId=== step.step_id) ? 'activate': 'not_active'}
                    // active={activeContainerId === step.step_id}
                    onClick={(step.container_id)=>handleItemClick(step.container_id)}
                >
                    <div>
            <span><h4>{step.name}</h4><p>{step.description}</p><StepEdit updateStatus={props.recipeData.updateStatus} name={step.name} index={index}  updateStep={updateStepFunc} step_id={step.step_id} description={step.description}/></span>
                    </div>
                </Menu.Item>
                    // {debugger}
                if(activeContainerId=== 'initial'){
                    // debugger
                    setActiveContainerId(step.container_id)
                    console.log(activeContainerId);
                }
                menuitem.push(item)
            })
            setMenuItem(menuitem)
        }
    }, [props.recipeData])
    useEffect(() => {
        alert(activeContainerId)
    }, [activeContainerId])
    const setContainers = (containers)=>{
        // setShowContainers(containers)
    }
    const editContainerFunc = (data)=>{
        console.log(data,'editContainerFunc')
    }
    // const segmentData = ()=>{
    //     let segment = ''
    //     // debugger
    //     let steps = props.recipeData.data.steps
    //     // let index = steps.map((step,index)=>{
    //     //     if(step.container_id == activeContainerId){
    //     //         return index
    //     //     }
    //     // })
    //     let i = ''
    //     steps.map((step,index) => {
    //         console.log({step,index,activeContainerId},'data')
    //         if(step.container_id == activeContainerId){
    //             i =index
    //         }
    //     });
    //     console.log({i})
    //     let step = props.recipeData.data.steps[i] 
    //     // switch (step.container_type) {
    //     //     case 'campaign':
    //     //          ()
    //     //         break;
        
    //     //     default:
    //     //         break;
    //     // }
    // }
    return (
        <div>
            <AddStep 
                addNewStep={props.addNewStep}
                containerTypesData = {props.containerTypesData}
                containers = {props.containers}
                showContainers = {showContainers}
                setContainers={setContainers}
                getSelectedTypeContainer={props.getSelectedTypeContainer}
            />
            <Grid>
                <Grid.Column width={4}>
                <Menu fluid vertical secondary>
                    {menuItem}
                </Menu>
                </Grid.Column>

                <Grid.Column stretched width={12}>
                {/* {(segment)
                   ?<Segment>
                        {
                            <CampaignForm 
                            data={step.container_data}
                            editContainerFunc={editContainerFunc}
                          />
                        }
                    </Segment>
                    :<h3>No Steps</h3>
                } */}
                </Grid.Column>
            </Grid>
        </div>
    )
}

export default RecipeTemplate
