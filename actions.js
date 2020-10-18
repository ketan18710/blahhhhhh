/*
 *
 * RecipesContainer actions
 *
 */

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
  
  export function defaultAction() {
    return {
      type: DEFAULT_ACTION,
    };
  }
  
export const newRecipe = data => ({
  type: GET_NEW_RECIPE,
  payload: data,
});
export const newRecipeResult = data => ({
  type: GET_NEW_RECIPE_RESULT,
  payload: data,
});
export const getContainerTypes = data => ({
  type: GET_CONTAINER_TYPES,
  payload: data,
});
export const getContainerTypesResult = data => ({
  type: GET_CONTAINER_TYPES_RESULT,
  payload: data,
});
export const getSelectedTypeContainer = data => ({
  type: GET_SELECTED_TYPE_CONTAINER,
  payload: data,
});
export const getSelectedTypeContainerResult = data => ({
  type: GET_SELECTED_TYPE_CONTAINER_RESULT,
  payload: data,
});
export const createStep = data => ({
  type: CREATE_STEP,
  payload: data,
});
export const createStepResult = data => ({
  type: CREATE_STEP_RESULT,
  payload: data,
});
export const updateContainer = data => ({
  type: UPDATE_CONTAINER,
  payload: data,
});
export const updateContainerResult = data => ({
  type: UPDATE_CONTAINER_RESULT,
  payload: data,
});
export const getContainer = data => ({
  type: GET_CONTAINER,
  payload: data,
});
export const getContainerResult = data => ({
  type: GET_CONTAINER_RESULT,
  payload: data,
});
export const updateStep = data => ({
  type: UPDATE_STEP,
  payload: data,
});
export const updateStepResult = data => ({
  type: UPDATE_STEP_RESULT,
  payload: data,
});
export const resetUpdateStepStatus = data => ({
  type: RESET_UPDATE,
  payload: data,
});