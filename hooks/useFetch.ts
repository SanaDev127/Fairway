import { useState } from "react";

const DEFAULT_FETCH_OPTIONS = {};

type UseFetchProps = {
  url: string;
  method: "GET" | "POST" | "PUT" | "DELETE"
};

type CommonFetch = {
  /** the variables that the endpoint expects to receive */
  input?: { [index: string]: any };
  fetchOptions?: RequestInit;
}

export function useFetch<T> ({ url, method }: UseFetchProps) {
    const [isLoading, setIsLoading] = useState(false);
    // we are assigning the generic type T to our data value here
    const [data, setData] = useState<T | null>(null);
   
  
    const commonFetch = async ({
      input,
      fetchOptions = {},
    }: CommonFetch) => {
        setIsLoading(true);

        const response = await fetch(url, {
            method,
            ...DEFAULT_FETCH_OPTIONS,
            ...fetchOptions,
            body: JSON.stringify(input),
        })
        .catch(function(error){
          console.log("Unable to complete fetch operation: " + error);
          throw error;
        });

        const data = await response.json();

        setIsLoading(false);
        setData(data);
    };

    return {isLoading, commonFetch, data};
};