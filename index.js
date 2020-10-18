/*
 * FeaturePage
 *
 * List all the features
 */
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { redirectToUrl } from 'utils/common';
import PropTypes from 'prop-types';
import { Select} from 'semantic-ui-react';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import reducer from './reducer';
import saga from './saga';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import CommonMessages from 'helpers/Intl.CommonMessage';
import { newRecipe,
         getContainerTypes,
         getSelectedTypeContainer,
         createStep,
         updateStep,
         resetUpdateStepStatus
        } from './actions'
import Button from '../../components/Common/Button/Button'
import { API_CONSTANTS } from 'utils/constants';
import makeSelectRecipesContainer ,{
  // makeSelectStep1,
  // makeSelectStep2,
  // makeSelectStep3,
  recipeData,
  containerTypesData,
  containerData,
  containers
}from './selectors';
import SideBar from 'components/Sidebar';
import './style.scss'
import '../../components/Recipes/RecipeTemplate'
import RecipeTemplate from '../../components/Recipes/RecipeTemplate'
const RecipesContainer = (props) => {
  const [showSelectRecipes, setShowSelectRecipes] = useState(false)
  const [showSelectContainerTypes, setShowSelectContainerTypes] = useState({status: null,data: null})
  const [showContainers, setShowContainers] = useState(null)
  const [showRecipeTemplate, setShowRecipeTemplate] = useState(false)
  // const [container_id, setContainer_id] = useState('')
  const [recipe_id, setRecipe_id] = useState('')
  const newReipeButtonArguments = {
    primary : true
  }
  const buuid = props.userData.data.brands[0].id
  // const recipe_id = "4f319276-dd84-4598-b97a-7241e2a0497e"
  const container_id =  "0b01c31c-b90b-4f00-b85c-abd343502a1e"
  const createSteps = ()=>{
    
    data = {
      buuid : buuid,
      name  : "Step2",
      container_id :container_id,
      order  : 2
    }
    dataToSend = {
      data : data,
      recipe_id : recipe_id
    }
    props.createStep2(dataToSend)
    data = {
      buuid : buuid,
      name  : "Step3",
      container_id :container_id,
      order  : 3
    }
    dataToSend = {
      data : data,
      recipe_id : recipe_id
    }
    props.createStep3(dataToSend)
  }
  useEffect(() => {
    addNewRecipe()
    props.containerTypes({id: buuid})
  }, [])
  const addNewStep = (name,container_id)=>{
    // const {container_id} = args
    let data = {
      buuid : buuid,
      name  : name,
      container_id :container_id,
      order  : 1
    }
    let dataToSend = {
      data : data,
      recipe_id : recipe_id
    }
    props.createStep(dataToSend)
  }
  useEffect(() => {
    if(props.recipeData.status == 1){
      setRecipe_id(props.recipeData.data.id)
      // addNewStep()
    }
  }, [props.recipeData])
  useEffect(() => {
    if(recipe_id !== ''){
      setShowRecipeTemplate(true)
      // addNewStep()
    }
  }, [recipe_id])
  // useEffect(() => {
  //   console.log(props,'props')
  //   if((props.step1.status == 1) && (props.step2.status == 1) && (props.step3.status ==1)){
  //     setShowRecipeTemplate(true)
  //   }
  // }, [props])
  // useEffect(() => {
  //   if(props.containerTypesData.status == 1 ){                                                                                                                                             
  //     let containerTypes = showSelectContainerTypes
  //     containerTypes.data = props.containerTypesData.data.map(item=>({
  //       key : item.name,
  //       value : item.name,
  //       text : item.name,
  //     }))
  //     containerTypes.status = true  
  //     // debugger
  //     setShowSelectContainerTypes(containerTypes)
  //   }
  // }, [props.containerTypesData.status])
  // useEffect(() => {
  //   if(props.recipeData.status == 1){
  //     setRecipe_id(props.recipeData.data.id)
  //   }
  // }, [props.recipeData])
  const addNewRecipe=  ()=>{
    let data = {
      "buuid": buuid,
      "name": "Recipe name",
      "type": "standalone"
    }
    props.newRecipe(data) 
    // props.containerTypes({id: buuid})
  }
  const getSelectedTypeContainer =  (type)=>{
    props.selectedTypeContainer({id: buuid,type: type})
  }
  const selectRecipieTypeOptions=[
    { key: 'workflow', value: 'workflow', text: 'workflow' },
    { key: 'standalone', value: 'standalone', text: 'standalone' },
  ]
  // console.log(props,'globalData')
  const containerSelectedFunc = (value)=>{
    // setContainer_id(value)
    // createSteps()
  }
  // console.log(props.globalData,'globalData')
  // console.log(props.recipeData,'recipeData')
  var  containers = []
  // if(props.selectedTypeContainer.status ==1){
  //     containers = props.selectedTypeContainer.data.map(item=>({
  //      key : item.data.name,
  //      value : item.container_id,
  //      text : item.data.name,
  //    }))
  //    console.log(containers,'containers')
  // }    
  return (
    <div className="container">
      <Helmet>
        <title>Grorapid-Recipes Page</title>
        <meta name="description" content="Recipes page" />
      </Helmet>
      <>
        <SideBar 
            animation={'push'}
            visible={true}
            activeState={'expanded'}
            expandSidebar={true}
            path={props.location.pathname}
          />
        <div className={`_main_app_content`}>
              {/* <Button 
                arguments={newReipeButtonArguments}
                onClickFunc={()=>{setShowSelectRecipes(true)}}
                btnContent="Add New Recipe"
              />
              {showSelectRecipes &&
                <Select
                  placeholder='Select Recipe Type' 
                  options={selectRecipieTypeOptions}
                  onChange={(e,{value})=>{addNewRecipe(value)}}
                />
              }
              {console.log(showSelectContainerTypes,'ketan')}
              {showSelectContainerTypes.status &&
                <Select
                  placeholder='Select Container Type' 
                  options={showSelectContainerTypes.data}
                  onChange={(e,{value})=>{console.log(value);getSelectedTypeContainer(value)}}
                />
              } */}
              {/* {
                <Select
                  placeholder='Select Container ' 
                  options={containers && containers}
                  onChange={(e,{value})=>{containerSelectedFunc(value)}}
                />
              } */}
              {showRecipeTemplate &&
                <RecipeTemplate 
                  updateStep= {(data)=>props.updateStep(data)}
                  containerTypesData = {props.containerTypesData}
                  containers = {props.containers}
                  recipe_id={recipe_id}
                  getSelectedTypeContainer={getSelectedTypeContainer}
                  buuid={buuid}
                  recipeData = {props.recipeData}
                  addNewStep={addNewStep}
              />}
        </div>
      </>
    </div>
  )
};

RecipesContainer.propTypes = {
  RecipesContainer: PropTypes.object.isRequired,
};

const mapStateToProps = createStructuredSelector({
  globalData : makeSelectRecipesContainer(),
  // step1 : makeSelectStep1(),
  // step2 : makeSelectStep2(),
  // step3 : makeSelectStep3(),
  recipeData : recipeData(),
  containerTypesData : containerTypesData(),
  containerData : containerData(),
  containers:containers()
});

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch,
    newRecipe : (data) => dispatch(newRecipe(data)),
    containerTypes : (data) => dispatch(getContainerTypes(data)),
    selectedTypeContainer : (data) => dispatch(getSelectedTypeContainer(data)),
    createStep : (data) => dispatch(createStep(data)),
    updateStep : (data) => dispatch(updateStep(data)),
    resetUpdateStepStatus : ()=>dispatch(resetUpdateStepStatus())
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'RecipesContainer', reducer });
const withSaga = injectSaga({ key: 'RecipesContainer', saga });

export default compose(
  withConnect,
  withReducer,
  withSaga,
)(RecipesContainer);
