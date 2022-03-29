import axios from 'axios';
import { ENV_API_BASE_URL } from '../configs/Environments';

export const API = axios.create({
  baseURL: ENV_API_BASE_URL
})