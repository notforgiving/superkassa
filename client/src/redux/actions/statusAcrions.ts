export enum actionsForStatus {
  GET_STATUS = "GET_STATUS",
  SEND_STATUS = "SEND_STATUS",
  POST_STATUS = "POST_STATUS",
}

interface getStatusObject {
  type: string;
}

export interface postStatusObject {
  type: string;
  payload: boolean;
}

export const getStatus = (): getStatusObject => ({
  type: actionsForStatus.GET_STATUS,
});

export const sendStatus = (status: boolean): postStatusObject => ({
  type: actionsForStatus.SEND_STATUS,
  payload: status,
});

export const postStatus = (status: boolean): postStatusObject => ({
  type: actionsForStatus.POST_STATUS,
  payload: status,
});
