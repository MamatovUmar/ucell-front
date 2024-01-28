import axios, { AxiosRequestConfig } from 'axios'
import {useCookies} from "vue3-cookies";

export async function useAxios<T>(url: string, options: AxiosRequestConfig = {}): Promise<T> {
    const { cookies } = useCookies()

    const defaultOptions: AxiosRequestConfig = {
        url,
        method: 'GET',
        baseURL: import.meta.env.VITE_API_URL,
        transformRequest: [function (headers) {
            if (cookies.isKey('token')) {
                headers.Authorization = `Bearer ${cookies.get('token')}`
            }
        }],
        transformResponse: [function (data) {
            console.log(`%c ${this.method?.toUpperCase()} ${url}`, `background: green`, JSON.parse(data))
            return JSON.parse(data);
        }],
        ...options
    }

    const { data } = await axios(defaultOptions)

    return data
}