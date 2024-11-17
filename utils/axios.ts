import { Axios, AxiosRequestConfig, Method } from "axios";

export default class Requests extends Axios {
    /**
     * 
     * @param baseURL - The base URL to send requests to
     * @param headers - The headers to send with the request
     */
    constructor(baseURL: string , headers: any = {}) {
        headers['Content-Type'] = 'application/json';
        super({ baseURL: baseURL , headers: headers ? headers : {} });
    }

    /**
     * This function sends a request to the server
     * @param url - The URL to send the request to
     * @param method - The HTTP method to use
     * @param data - The data to send in the request
     * @param params - The query parameters to send in the request
     * @returns - The response from the server
     */
    async sendRequest(url: string, method: Method, data: any = undefined, params: any = undefined){
        const requestConfig : AxiosRequestConfig = {
            url: url,
            method: method,
            params: method === "GET" ? params : undefined,
            data: method === "GET" ? undefined :  JSON.stringify(data)
        };

        console.log("Request Config:", requestConfig); // Add logging here

        const response = await super.request(requestConfig);

        if(response.status >= 400) {
            throw new Error("Failed to send request to URL : " + url);
        }
        return response.data;
    }
}
