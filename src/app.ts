import * as http from "http";
import { getListEpisodes, getFilterEpisodes } from "../src/controllers/podcasts_controllers";
import { Routes } from "../src/routes/routes";
import { HttpMethod } from "./utils/http_methods";


export const app = async(request:http.IncomingMessage, response:http.ServerResponse) => {
    // http://localhost:3636/api/episode?p=flow
    const baseUrl = request.url?.split("?")[0] || ""

    if(request.method === HttpMethod.GET && baseUrl === Routes.LIST){
        await getListEpisodes(request,response)
    }
    if(request.method === HttpMethod.GET && baseUrl === Routes.FILTER){
        await getFilterEpisodes(request,response)
    }
}

