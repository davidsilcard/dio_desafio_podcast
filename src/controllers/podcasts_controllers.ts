import {IncomingMessage, ServerResponse} from "http"
import { serviceListEpsodes } from ".././services/list_epsodes_services"
import { serviceFilterEpsodes } from "../services/filter_epsodes_services"
import { PodcastTransferModel } from "../models/podcast_transfer_model"



export const getListEpisodes = async (request:IncomingMessage, response:ServerResponse) =>{
    const content: PodcastTransferModel = await serviceListEpsodes()
    response.writeHead(content.statusCode,{"Content-Type":"application/json"})
    response.write(JSON.stringify(content.body))
    response.end()
}


export const getFilterEpisodes = async (request:IncomingMessage, response:ServerResponse) =>{
    const content: PodcastTransferModel = await serviceFilterEpsodes(request.url)
    response.writeHead(content.statusCode,{"Content-Type":"application/json"})
    response.write(JSON.stringify(content.body))
    response.end()
}