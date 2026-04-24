import axios from "axios";

const API_BASE_URL = "http://127.0.0.1:5000/api/teams";

export async function getTeams() {
  const response = await axios.get(API_BASE_URL);
  return response.data;
}

export async function createTeam(team) {
  const response = await axios.post(API_BASE_URL, team);
  return response.data;
}

export async function updateTeam(id, updates) {
  const response = await axios.put(`${API_BASE_URL}/${id}`, updates);
  return response.data;
}

export async function deleteTeam(id) {
  const response = await axios.delete(`${API_BASE_URL}/${id}`);
  return response.data;
}

export default {
  getTeams,
  createTeam,
  updateTeam,
  deleteTeam,
};
