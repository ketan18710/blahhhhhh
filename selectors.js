import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the loginContainer state domain
 */

const selectRecipesContainer = state =>
   state.RecipesContainer || initialState;


const makeSelectRecipesContainer = () =>
   createSelector(
      selectRecipesContainer,    
      substate => substate,
);
// const makeSelectStep1 = () =>
//    createSelector(
//       selectRecipesContainer,    
//       substate => substate.step1Data,
// );
// const makeSelectStep2 = () =>
//    createSelector(
//       selectRecipesContainer,    
//       substate => substate.step2Data,
// );
// const makeSelectStep3 = () =>
//    createSelector(
//       selectRecipesContainer,    
//       substate => substate.step3Data,
// );
const recipeData = () =>
   createSelector(
      selectRecipesContainer,    
      substate => substate.recipeData,
);
const containerTypesData = () =>
   createSelector(
      selectRecipesContainer,    
      substate => substate.containerTypesData,
);
const containerData = () =>
   createSelector(
      selectRecipesContainer,    
      substate => substate.containerData,
);
const containers = () =>
   createSelector(
      selectRecipesContainer,    
      substate => substate.containers,
);

export default makeSelectRecipesContainer;
export { 
   // makeSelectStep1,
   // makeSelectStep2,
   // makeSelectStep3,
   recipeData,
   containerTypesData,
   containerData, 
   containers
};
