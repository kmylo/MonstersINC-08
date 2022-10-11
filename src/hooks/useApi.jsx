import { useCallback, useEffect, useState } from "react";

const useApi = (url, _params) => {
  const [isLoading, setIsloading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState("");

  const doFetch = useCallback(
    async (params = _params) => {
      // AXIOS
      let data = await url
        .get("/", {
          params
        })
        .then(({ data }) => {
          // console.log("data2", data);
          return data.results || data;
        })
        .catch((error) => {
          console.log("custom error:", error);
          setError(error.message);
        });
      setData(data);
      setIsloading(false);
    },
    [_params, url]
  );

  useEffect(() => {
    doFetch();
  }, [doFetch]);
  return { response: data, error, isLoading, refetch: doFetch };
};

export default useApi;
