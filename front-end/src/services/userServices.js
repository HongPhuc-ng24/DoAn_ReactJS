import * as httpRequest from "../utils/httpRequest";

export const getAllUsers = async (page = 1, limit = 5) => {
  try {
    const respone = await httpRequest.get(
      `api/users?page=${page}&limit=${limit}`
    );
    console.log("đây là", respone);
    return respone;
  } catch (error) {
    console.error("Error getallUsers", error);
    return [];
  }
};

export const deleteUser = async (id) => {
  const res = await httpRequest.del(`api/users/${id}`);
  return res.data;
};

export const createUser = async (userData) => {
  const res = await httpRequest.post("api/signup", userData);
  return res.data;
};

export const updateUser = async (id, data) => {
  const res = await httpRequest.patch(`/api/users/edit/${id}`, data);
  return res.data;
};
