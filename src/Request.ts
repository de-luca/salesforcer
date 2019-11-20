import Executable from "./Executable";
import {AxiosInstance, Method} from 'axios';

class Request implements Executable {

    static readonly urlPrefix = '/services/data/';
    static readonly urlSuffix = '/sobject/';

    method: Method;
    sobject: string;
    body: object;
    apiVersion: string | null;

    constructor(method: Method, sobject: string, body: object, apiVersion: string | null = null) {
        this.method = method;
        this.sobject = sobject;
        this.body = body;
        this.apiVersion = apiVersion;
    }

    buildUrl(apiVersion: string): string {
        return [
            Request.urlPrefix,
            this.apiVersion || apiVersion,
            Request.urlSuffix,
            this.sobject,
        ].join('');
    }

    async execute(apiVersion: string, axios: AxiosInstance): Promise<object> {
        const res = await axios.request({
            url: this.buildUrl(apiVersion),
            method: this.method,
            data: this.body,
        });

        return res.data;
    }

}

export default Request;
