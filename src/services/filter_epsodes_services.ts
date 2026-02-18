import { repositoryPodcastes } from "../repositories/podcast_repository"
import { PodcastTransferModel } from "../models/podcast_transfer_model"
import { StatusCode } from "../utils/status_code"



export const serviceFilterEpsodes = async(podCastName:string | undefined): Promise<PodcastTransferModel> =>{

    let responseFormat: PodcastTransferModel = {
        statusCode: 0,
        body: []
    }

    const queryString = podCastName?.split("p=")[1] || ""
    const data = await repositoryPodcastes(queryString)

    responseFormat = {
        statusCode: data.length > 0 ? StatusCode.OK : StatusCode.NO_CONTENT,
        body: data  
    }
    
    return responseFormat
}