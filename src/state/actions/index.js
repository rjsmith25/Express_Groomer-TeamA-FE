export const POPULATE = 'POPULATE';
export const POPULATE_USER = 'POPULATE_USER';
export const POPULATE_PET = 'POPULATE_PET';
export const CREATE_PET = 'CREATE_PET';
export const EDIT_PET = 'EDIT_PET';
export const DELETE_PET = 'DELETE_PET';
export const GET_APPOINTMENTS = 'GET_APPOINTMENTS';
export const CREATE_APPOINTMENT = 'CREATE_APPOINTMENT';
export const DELETE_APPOINTMENT = 'DELETE_APPOINTMENT';
export const GET_BUSINESS_PROFILE = 'GET_BUSINESS_PROFILE';
export const EDIT_BUSINESS_PROFILE_INFO = 'EDIT_BUSINESS_PROFILE_INFO';

export const setProfilesToState = data => {
  return {
    type: POPULATE,
    payload: data,
  };
};
export const populateUser = data => {
  return {
    type: POPULATE_USER,
    payload: data,
  };
};

export const populatePet = data => {
  return {
    type: POPULATE_PET,
    payload: data,
  };
};

export const createPet = data => {
  return {
    type: CREATE_PET,
    payload: data,
  };
};

export const editPet = data => {
  return {
    type: EDIT_PET,
    payload: data,
  };
};

export const deletePet = data => {
  return {
    type: DELETE_PET,
    payload: data,
  };
};

export const getAppointments = data => {
  return {
    type: GET_APPOINTMENTS,
    payload: data,
  };
};

export const createAppointment = data => {
  return {
    type: CREATE_APPOINTMENT,
    payload: data,
  };
};

export const delAppointment = data => {
  return {
    type: DELETE_APPOINTMENT,
    payload: data,
  };
};

export const getBusinessProfile = data => {
  return {
    type: GET_BUSINESS_PROFILE,
    payload: data,
  };
};

export const editBusinessProfileInfo = data => {
  return {
    type: EDIT_BUSINESS_PROFILE_INFO,
    payload: data,
  };
};
