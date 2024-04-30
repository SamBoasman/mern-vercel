import axios from "axios";

const API_URL = process.env.NODE_ENV === "production"
? "https://mern-vercel-ochre.vercel.app"
: `http://localhost:5000`;


export const host = `${API_URL}`;

const API = axios.create({
  baseURL: host,
});

export const register = (formData = {
  password,
  username,
  email,
}) => API.post("/api/auth/register", JSON.stringify(formData), 
    {
        headers: {
            'Content-Type': 'application/json'
        }
    }
);

export async function getRecords(e) {
    return API.get(`${API_URL}/api/record/`);
}
