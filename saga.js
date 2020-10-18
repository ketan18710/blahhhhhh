import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { request,getResponseFromApiResponse  } from 'utils/common';
import { PROD_DOMAIN} from 'utils/apiConfig';
import { API_CONSTANTS, HTTP_METHODS } from 'utils/constants';
import { AuthHelpers } from 'helpers';
import {
        structureRecipeData,
        structureContainerTypesData,
        getContainersData,
        crateStepsData
 } from './schema'
import {  
        GET_NEW_RECIPE,
        GET_CONTAINER_TYPES,
        GET_SELECTED_TYPE_CONTAINER,
        CREATE_STEP,
        UPDATE_STEP,
        UPDATE_CONTAINER,
        GET_CONTAINER
} from './constants';
import {
        newRecipeResult,
        getContainerTypesResult,
        getSelectedTypeContainerResult,
        createStepResult,
        updateStepResult,
        updateContainerResult,
        getContainerResult
} from './actions';
// import { fetchUserData } from '../App/actions';
export default function* RecipesContainerSaga() {
        yield takeLatest(GET_NEW_RECIPE, getNewRecipe);
        yield takeLatest(GET_CONTAINER_TYPES, getContainerTypesFunc);
        yield takeLatest(GET_SELECTED_TYPE_CONTAINER, getSelectedTypeContainerFunc);
        yield takeLatest(CREATE_STEP, createStepFunc);
        yield takeLatest(UPDATE_STEP, updateStepFunc);
        yield takeLatest(UPDATE_CONTAINER, updateContainer);
        yield takeLatest(GET_CONTAINER, getContainerFunc);
}
/**
 * @description Onboarding service
 */
function* getNewRecipe(data) {
        data = data.payload
        try {
            const newRecipeData = yield call(request, `${PROD_DOMAIN}/api/recipes`, {
            method: HTTP_METHODS.POST,
            body: JSON.stringify(data),
                headers: {
                'Content-type': 'application/json; charset=UTF-8',
                // 'Accept': 'application/json'
                },
                }
            ) ; 
            if(newRecipeData.statusCode === 200) {
                yield put(newRecipeResult({ 
                        status: API_CONSTANTS.success,  
                        data: structureRecipeData(getResponseFromApiResponse(newRecipeData))
                }));
            } 
            else {
                yield put(setOnboardingSuccess({ 
                    status: API_CONSTANTS.error,
                    data: getResponseFromApiResponse(newRecipeData)
                }))
            }
        }catch (err){
                yield put(setOnboardingSuccess({ 
                        status: API_CONSTANTS.error,
                        data: getResponseFromApiResponse(err)
                }))
        }
}
function* getContainerTypesFunc(data) {
        let buuid = data.payload.id
        try {
            const  containerTypesData = yield call(request, `${PROD_DOMAIN}/api/types/containers/?buuid=${buuid}`, {
            method: HTTP_METHODS.GET,
                headers: {
                'Content-type': 'application/json; charset=UTF-8',
                // 'Accept': 'application/json'
                },
                }
            ) ; 
            if(containerTypesData.statusCode === 200) {
                yield put( getContainerTypesResult({ 
                        status: API_CONSTANTS.success,  
                        data:  structureContainerTypesData(getResponseFromApiResponse(containerTypesData)) 
                }));
            } 
            else {
                yield put(getContainerTypesResult({ 
                    status: API_CONSTANTS.error,
                    data: getResponseFromApiResponse(containerTypesData)
                }))
            }
        }catch (err){
                yield put(getContainerTypesResult({ 
                        status: API_CONSTANTS.error,
                        data: getResponseFromApiResponse(err)
                    }))
        }
}
function* getSelectedTypeContainerFunc(data) {
        let buuid = data.payload.id
        let type = data.payload.type
        try {
            const  selectedTypeContainerData = yield call(request, `${PROD_DOMAIN}/api/containers/${type}?buuid=${buuid}`, {
            method: HTTP_METHODS.GET,
                headers: {
                'Content-type': 'application/json; charset=UTF-8',
                // 'Accept': 'application/json'
                },
                }
            ) ; 
            console.log(selectedTypeContainerData,'selectedTypeContainerData')
            if(selectedTypeContainerData.statusCode === 200) {
                yield put( getSelectedTypeContainerResult({ 
                        status: API_CONSTANTS.success,  
                        data:  getContainersData(getResponseFromApiResponse(selectedTypeContainerData)) 
                }));
            } 
            else {
                yield put(getSelectedTypeContainerResult({ 
                    status: API_CONSTANTS.error,
                    data: getResponseFromApiResponse(selectedTypeContainerData)
                }))
            }
        }catch (err){
            console.log(err,'err')
                // yield put(getSelectedTypeContainerResult({ 
                //         status: API_CONSTANTS.error,
                //         data: getResponseFromApiResponse(err)
                // }))
        }
}
function* createStepFunc(data) {
        var {data, recipe_id} = data.payload
        // debugger
        try {
            const  newStepData = yield call(request, `${PROD_DOMAIN}/api/recipe/${recipe_id}/steps`, {
                        method: HTTP_METHODS.POST,
                        body: JSON.stringify(data),
                        headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                        // 'Accept': 'application/json'
                        },
                }
            ) ; 
            console.log(newStepData,'newStepData')
            if(newStepData.statusCode === 200) {
                yield put( createStepResult({ 
                        status: API_CONSTANTS.success,  
                        data:  crateStepsData(getResponseFromApiResponse(newStepData))
                }));
            } 
            else {
                yield put(createStepResult({ 
                    status: API_CONSTANTS.error,
                    data: getResponseFromApiResponse(newStepData)
                }))
            }
        }catch (err){
               console.log(err,'err')
        }
}
function* createStep2Func(data) {
        var {data, recipe_id} = data.payload
        // debugger
        try {
            const  newStepData = yield call(request, `${PROD_DOMAIN}/api/recipe/${recipe_id}/steps`, {
                        method: HTTP_METHODS.POST,
                        body: JSON.stringify(data),
                        headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                        // 'Accept': 'application/json'
                        },
                }
            ) ; 
            console.log(newStepData)
            if(newStepData.statusCode === 200) {
                yield put( createStep2Result({ 
                        status: API_CONSTANTS.success,  
                        data:  crateStepsData(getResponseFromApiResponse(newStepData))
                }));
            } 
            else {
                yield put(createStep2Result({ 
                    status: API_CONSTANTS.error,
                    data: getResponseFromApiResponse(newStepData)
                }))
            }
        }catch (err){
                yield put(createStep2Result({ 
                        status: API_CONSTANTS.error,
                        data: getResponseFromApiResponse(err)
                }))
        }
}
function* createStep3Func(data) {
        var {data, recipe_id} = data.payload
        // debugger
        try {
            const  newStepData = yield call(request, `${PROD_DOMAIN}/api/recipe/${recipe_id}/steps`, {
                        method: HTTP_METHODS.POST,
                        body: JSON.stringify(data),
                        headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                        // 'Accept': 'application/json'
                        },
                }
            ) ; 
            console.log(newStepData)
            if(newStepData.statusCode === 200) {
                yield put( createStep3Result({ 
                        status: API_CONSTANTS.success,  
                        data:  crateStepsData(getResponseFromApiResponse(newStepData))
                }));
            } 
            else {
                yield put(createStep3Result({ 
                    status: API_CONSTANTS.error,
                    data: getResponseFromApiResponse(newStepData)
                }))
            }
        }catch (err){
                yield put(createStep3Result({ 
                        status: API_CONSTANTS.error,
                        data: getResponseFromApiResponse(err)
                }))
        }
}
function* updateStepFunc(dataToSend) {
        console.log(dataToSend.payload,'payload')
        const {recipe_id,step_id,data,index} = dataToSend.payload
        // debugger
        try {
            const  updateStepData = yield call(request, `${PROD_DOMAIN}/api/recipe/${recipe_id}/steps/${step_id}`, {
                        method: HTTP_METHODS.PUT,
                        body: JSON.stringify(data),
                        headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                        // 'Accept': 'application/json'
                        },
                }
            ) ; 
            // console.log(index)
            // debugger
            if(updateStepData.statusCode === 200) {
                    yield put( updateStepResult({ 
                            status: API_CONSTANTS.success,  
                            data:  crateStepsData(getResponseFromApiResponse(updateStepData)),
                            index: index,
                            updateStatus : API_CONSTANTS.success
                    }));
            } 
            else {
                yield put(updateStepResult({ 
                    status: API_CONSTANTS.error,
                    data: getResponseFromApiResponse(newStepData)
                }))
            }
        }catch (err){
                yield put(updateStepResult({ 
                        status: API_CONSTANTS.error,
                        data: getResponseFromApiResponse(err)
                }))
        }
}

function* updateContainer(dataToSend) {
    console.log(dataToSend.payload,'payload')
    const {container_id,data} = dataToSend.payload
    // debugger
    try {
        const  updateContainer = yield call(request, `${PROD_DOMAIN}/api/container/${container_id}/`, {
                    method: HTTP_METHODS.PUT,
                    body: JSON.stringify(data),
                    headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                    // 'Accept': 'application/json'
                    },
            }
        ) ; 
        console.log(updateContainer)
        // debugger
        if(updateContainer.statusCode === 200) {
                yield put( getContainerResult({ 
                        status: API_CONSTANTS.success,  
                        data:  crateStepsData(getResponseFromApiResponse(updateContainer)),
                        updateStatus : API_CONSTANTS.success
                }));
        } 
        else {
            yield put(getContainerResult({ 
                status: API_CONSTANTS.error,
                data: getResponseFromApiResponse(newStepData)
            }))
        }
    }catch (err){
            yield put(getContainerResult({ 
                    status: API_CONSTANTS.error,
                    data: getResponseFromApiResponse(err)
            }))
    }
}
function* getContainerFunc(dataToSend) {
    console.log(dataToSend.payload,'payload')
    const {container_id,data,buuid} = dataToSend.payload
    // debugger
    try {
        const  updateContainer = yield call(request, `${PROD_DOMAIN}/api/container/${container_id}?buuid=${buuid}`, {
                    method: HTTP_METHODS.GET,
                    body: JSON.stringify(data),
                    headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                    // 'Accept': 'application/json'
                    },
            }
        ) ; 
        console.log(updateContainer)
        // debugger
        if(updateContainer.statusCode === 200) {
                yield put( getContainerResult({ 
                        status: API_CONSTANTS.success,  
                        data:  crateStepsData(getResponseFromApiResponse(updateContainer)),
                }));
        } 
        else {
            yield put(getContainerResult({ 
                status: API_CONSTANTS.error,
                data: getResponseFromApiResponse(newStepData)
            }))
        }
    }catch (err){
            yield put(getContainerResult({ 
                    status: API_CONSTANTS.error,
                    data: getResponseFromApiResponse(err)
            }))
    }
}
