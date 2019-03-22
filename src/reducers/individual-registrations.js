import * as types from '../actions/action-types';
import { getCurrentPrice } from './event-details';

export const INDIVIDUAL_REGISTRATION_STATE_KEY = 'individualRegistrations';

const initialState = {
  stage: 'registration',
  details: {},
  paymentDetails: {}
};

export default (state, action) => {
  switch (action.type) {
    case types.SAVING_INDIVIDUAL_REGISTRATION:
      return Object.assign({}, state, { stage: 'savingRegistration' });
    case types.SAVED_INDIVIDUAL_REGISTRATION:
      return Object.assign({}, state, { stage: 'payment', details: action.details, registrationSaved: true });
    case types.ERROR_SAVING_INDIVIDUAL_REGISTRATION:
      return Object.assign({}, state, { stage: 'error', errorDetails: action.problem});
    case types.SAVING_INDIVIDUAL_PAYMENT_DETAILS:
      return Object.assign({}, state, { stage: 'savingPayment' });
    case types.ERROR_SAVING_INDIVIDUAL_PAYMENT_DETAILS:
      return Object.assign({}, state, { state: 'error', errorDetails: action.problem });
    case types.SAVED_INDIVIDUAL_PAYMENT_DETAILS:
      return Object.assign({}, state, { stage: 'finished', paymentDetails: action.details });
    case types.RESET_INDIVIDUAL_REGISTRATION:
      return initialState;
    default:
      return state || initialState;
  }
}

export const getAmountOwing = (state) => {
  if (state[INDIVIDUAL_REGISTRATION_STATE_KEY].details.uuid === undefined) {
    return null;
  }
  return getCurrentPrice(state);
};
