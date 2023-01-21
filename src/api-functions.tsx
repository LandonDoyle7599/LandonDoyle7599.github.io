import { Quote } from "./models";

export function getRandomQuote(): Promise<Quote> {
    return makeGetRequest("https://usu-quotes-mimic.vercel.app/api/random").then((res) => res);
}

export function getSearchQuotes(author: string): Promise<Quote[]> {
  return makeGetRequest(`https://usu-quotes-mimic.vercel.app/api/search?query=${author}`).then((res) => res.results);
}

  
export function makeGetRequest(path: string): Promise<any> {
  return fetch(`${path}`, {
    method: "GET",
  
  }).then((res) => res.json());
}