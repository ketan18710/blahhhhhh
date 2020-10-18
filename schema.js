const recipeData = {
  data : []
}
const containerTypesData = {
  data : []
}
const containersData = {
  data : []
}
const newStepData = {
  data: []
}
const recipes={
  data:[]
}
export const structureRecipeData = (response)=>{
  
  if(!response) return null
  const {recipe} = response
  const data = recipe.data
  recipeData.data = {
    content : data.content,
    description: data.description,
    id : data.id,
    name : data.name,
    status : data.status,
    steps : data.steps.data.map(item =>({
      id : item.id,
      name : item.name,
      description : item.description,
      status : item.status,
      settings : item.settings,
      container_id : item.container_id,
      container  : item.container
    }))
  }
  console.log(recipeData.data,'recipeData.data')
  return recipeData.data
}
export const structureContainerTypesData = (response)=>{
  
  if(!response) return null
  const {types} = response
  const data = types.data
  containerTypesData.data = data.map(item=>({
    name : item.name
  }))
  return containerTypesData.data
}
export const getContainersData = (response)=>{
  
  if(!response) return null
  const {containers} = response
  const data = containers.data
  containersData.data = data.map(data =>({
    data : data.service.data,
    container_id : data.id
  }))
  console.log(containersData,'containersData')
  return containersData.data
}
export const crateStepsData = (response)=>{
  if(!response) return null
  const {step} = response
  const {data} = step
  newStepData.data = {
    step_id : data.id,
    name: data.name,
    description : data.description,
    status : data.status,
    settings : data.settings,
    container_id : data.container_id,
    container_type : data.container.data.type.data.name,
    container_data : data.container.data.service.data,
  }
  console.log(newStepData.data,'newStepData')
  return newStepData.data
}
export const structureRecipes = (response)=>{
  if(!response) return null
  
}