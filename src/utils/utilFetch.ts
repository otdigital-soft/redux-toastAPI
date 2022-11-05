import { URL_API } from "../types/constants";

export const useFetch = async (
  endpoint: string,
  optionsMethod: string,
  optionsBody = {}
) => {
  const optionsFetch: any = {
    method: optionsMethod,
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
  };
  if (optionsMethod !== "GET") {
    optionsFetch["body"] = JSON.stringify(optionsBody);
  }

  const response = await fetch(`${URL_API}/${endpoint}`, optionsFetch);
  return await response.json();
};
