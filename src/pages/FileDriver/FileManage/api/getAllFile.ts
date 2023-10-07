import { useQuery } from "@tanstack/react-query";

import { axios } from "src/lib/axios";
import { QueryConfig } from "src/lib/react-query";
import { ResponseDetailData } from "src/utils/type";
import { GetAllFile } from "../types";
import { useLoading } from "src/hooks/useLoading";

export const getAllFile = (): Promise<ResponseDetailData<GetAllFile[]>> => {
  return axios.get("/upload");
};

type UseGetAllFileOption = {
  config?: QueryConfig<any>;
};

export const useGetAllFile = ({ config }: UseGetAllFileOption) => {
  const { setLoading } = useLoading();
  return useQuery<ResponseDetailData<GetAllFile[]>>({
    ...config,
    queryKey: ["authority-group-new"],
    queryFn: async () => {
      setLoading(true);
      const data = await getAllFile();
      setLoading(false);

      return data;
    },
  });
};
