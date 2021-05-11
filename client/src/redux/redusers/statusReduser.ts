import { actionsForStatus } from "./../actions/statusAcrions";

const initialState = false;

const statusReduser = (state = initialState, action: any) => {
  switch (action.type) {
    case actionsForStatus.SEND_STATUS:
      return action.payload;
    default:
      return state;
  }
};

export default statusReduser;
