import {AxiosInstance} from "axios";

interface Executable {
    buildUrl(apiVersion: string): string;
    execute(apiVersion: string, axios: AxiosInstance): Promise<any>;
}

export default Executable;
