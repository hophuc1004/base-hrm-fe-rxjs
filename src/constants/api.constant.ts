import { config } from "configs/index.config";

export const getDataApiAjax = async (url: any, token: any) => {
  return {
    url: `${config.BASE_URL + url}`,
    method: "GET",
    headers: { Authorization: `Bearer ${token}` },
  };
};

export const postDataApiAjax = async (url: any, body: any, token: any) => {
  console.log("takeconfigfdfffff: ", config.BASE_URL);
  return {
    url: `${config.BASE_URL + url}`,
    method: "POST",
    body: body,
    headers: { Authorization: `Bearer ${token}` },
  };
};

export const putDataApiAjax = async (url: any, body: any, token: any) => {
  return {
    url: `${config.BASE_URL + url}`,
    method: "PUT",
    body: body,
    headers: { Authorization: `Bearer ${token}` },
  };
};

export const deleteDataApiAjax = async (url: any, body: any, token: any) => {
  return {
    url: `${config.BASE_URL + url}`,
    method: "DELETE",
    body: body,
    headers: { Authorization: `Bearer ${token}` },
  };
};
