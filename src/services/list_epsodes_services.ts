import { PodcastTransferModel } from "../models/podcast_transfer_model"
import {repositoryPodcastes} from "../repositories/podcast_repository"
import { StatusCode } from "../utils/status_code"



export const serviceListEpsodes = async(): Promise<PodcastTransferModel> =>{

    let responseFormat: PodcastTransferModel = {
        statusCode: 0,
        body: []
    }

    const data = await repositoryPodcastes()

    responseFormat = {
        statusCode: data.length > 0 ? StatusCode.OK : StatusCode.NO_CONTENT,
        body: data  
    }
        
    return responseFormat
}
