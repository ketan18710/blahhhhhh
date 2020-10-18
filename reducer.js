/*
 *
 * RecipesContainer reducer
 *
 */
import produce from 'immer';
import { API_CONSTANTS } from 'utils/constants';
import {
  DEFAULT_ACTION,
  GET_NEW_RECIPE,
  GET_NEW_RECIPE_RESULT,
  GET_CONTAINER_TYPES,
  GET_CONTAINER_TYPES_RESULT,
  GET_SELECTED_TYPE_CONTAINER,
  GET_SELECTED_TYPE_CONTAINER_RESULT,
  CREATE_STEP,
  CREATE_STEP_RESULT,
  UPDATE_STEP,
  UPDATE_STEP_RESULT,
  RESET_UPDATE,
  UPDATE_CONTAINER,
  GET_CONTAINER,
  GET_CONTAINER_RESULT
} from './constants';

export const initialState = {
  recipeData : {
    data : null,
    status:null,
    updateStatus:null
  },
  containerTypesData : {
    data : null,
    status:null,
  },
  containers : {
    data : null,
    status:null,
  },
  containerData : {
    data : null,
    status:null,
    updateStatus:null,
    updateMSg:null
  },
};

/* eslint-disable default-case, no-param-reassign */
const RecipesContainerReducer = (state = initialState,  { type, payload }) =>
  produce(state, draft => {
    switch (type) {
      case DEFAULT_ACTION: {
        draft.status = API_CONSTANTS.loading;
        break;
      }
      case GET_NEW_RECIPE: {
        draft.recipeData.status = API_CONSTANTS.loading;
        break;
      }
      case GET_NEW_RECIPE_RESULT: {
        console.log(payload.data,'payload')
        if(payload.status === API_CONSTANTS.success ){
          draft.recipeData.data = payload.data
          draft.recipeData.status = payload.status
        }else if(payload.status === API_CONSTANTS.error ){
          draft.recipeData.status = payload.status
          draft.recipeData.data = payload.data.message
        }
          break;
      }
      case GET_CONTAINER_TYPES: {
        draft.containerTypesData.status = API_CONSTANTS.loading;
        break;
      }
      case GET_CONTAINER_TYPES_RESULT: {
        if(payload.status === API_CONSTANTS.success ){
          draft.containerTypesData.data = payload.data
          draft.containerTypesData.status = payload.status
        }else if(payload.status === API_CONSTANTS.error ){
          draft.containerTypesData.status = payload.status
          draft.containerTypesData.data = payload.data.message
        }
          break;
      }
      case UPDATE_CONTAINER || GET_CONTAINER: {
        draft.containerData.status = API_CONSTANTS.loading;
        draft.containerData.updateStatus = API_CONSTANTS.loading;
        break;
      }
      case GET_CONTAINER_RESULT: {
        if(payload.status === API_CONSTANTS.success ){
          draft.containerData.data = payload.data
          draft.containerData.status = payload.status
          if(payload.updateStatus === API_CONSTANTS.success)
            draft.containerData.updateStatus = payload.updateStatus
        }else if(payload.status === API_CONSTANTS.error ){
          draft.containerData.status = payload.status
          draft.containerData.data = payload.data.message
        }
          break;
      }
      case GET_SELECTED_TYPE_CONTAINER: {
        draft.containers.status = API_CONSTANTS.loading;
        break;
      }
      case GET_SELECTED_TYPE_CONTAINER_RESULT: {
        if(payload.status === API_CONSTANTS.success ){
          draft.containers.data = payload.data
          draft.containers.status = payload.status
        }else if(payload.status === API_CONSTANTS.error ){
          draft.containers.status = payload.status
          draft.containers.data = payload.data.message
        }
          break;
      }
      case CREATE_STEP: {
        // draft.step1Data.status = API_CONSTANTS.loading;
        break;
      }
      case CREATE_STEP_RESULT: {
        console.log(payload,'payloadStep')
        // debugger
        if(payload.status === API_CONSTANTS.success ){
          draft.recipeData.data.steps.push(payload.data)
          console.log('updated',draft.recipeData)
        }else if(payload.status === API_CONSTANTS.error ){
          // debugger
          draft.recipeData.updateMSg = 'error'
          // draft.step1Data.data = payload.data.message
        }
          break;
      }
      case UPDATE_STEP : {
        draft.recipeData.updateStatus = API_CONSTANTS.loading
        break
      }
      case UPDATE_STEP_RESULT : {
        console.log(payload,'payloadStep')
        // debugger
        if(payload.status === API_CONSTANTS.success ){
          draft.recipeData.data.steps[payload.index] = payload.data
          draft.recipeData.updateStatus = API_CONSTANTS.success
        }else if(payload.status === API_CONSTANTS.error ){
          // debugger
          draft.recipeData.updateMSg = 'error'
          // draft.step1Data.data = payload.data.message
        }
        break
      }
      case RESET_UPDATE: {
        draft.step1Data.updateStatus = null
        draft.step2Data.updateStatus = null
        draft.step3Data.updateStatus = null
      }
      
    }

  });

export default RecipesContainerReducer;
