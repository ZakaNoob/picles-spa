import { useQuery } from "@tanstack/react-query"
import { GetPetsRequest, GetPetsResponse } from "../interfaces/pet"
import { getPets } from "../services/pets/getPet"


interface IUsePetList {
    data?: GetPetsResponse
    isLoading: boolean
}

export function usePetList(params: GetPetsRequest): IUsePetList {
    const {data, isLoading} = useQuery({
        queryKey: ['get-pets', params],
        queryFn: () => getPets(params),
        staleTime: 100,
    })

    return {data, isLoading}
}