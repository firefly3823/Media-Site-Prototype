import { commonAPI } from "./commonAPI";
import { serverURL } from "./serverURL";

//uploading video
export const uploadVideo = async (body)=>{
    //call post http req from api/videos to add video in json server return response to add component
    return await commonAPI("POST",`${serverURL}/videos`,body)
}
//get all videos

export const getAllVideo = async ()=>{
    //call get http req from api/videos to get video in json server return response to View component
    return await commonAPI("GET",`${serverURL}/videos`,"")
}

//get a single video

export const getAVideo = async (id)=>{
    //call get http req from api/videos to add video in json server return response to videoCard component
    return await commonAPI("GET",`${serverURL}/videos/${id}`,"")
}
//delete a single video

export const deleteAVideo = async (id)=>{
    //call delete http req from api/videos to add video in json server return response to videoCard component
    return await commonAPI("DELETE",`${serverURL}/videos/${id}`,"")
}