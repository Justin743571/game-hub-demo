import { useQuery } from "@tanstack/react-query"
import Screenshot from "../entities/Screenshot"
import ApiClient from "../services.ts/api-client"
import ms from "ms"



const useScreenshot = (gameId:number) =>{
    const apiClient = new ApiClient<Screenshot>(`/games/${gameId}/screenshots`)

    return useQuery({
        queryKey:["games",gameId,"screenshots"],
        queryFn:apiClient.getAll,
        staleTime:ms("24h")
    })
}

export default useScreenshot;
