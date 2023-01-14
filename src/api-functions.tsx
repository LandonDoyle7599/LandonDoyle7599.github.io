import { Quote } from "./models";

export function getRandomQuote(): Promise<Quote> {
    return makeGetRequest("https://api.quotable.io/random").then((res) => res);
}

export function getSearchQuotes(author: string): Promise<Quote[]> {
  return makeGetRequest(`https://api.quotable.io/search/quotes?query=${author}`).then((res) => res.results);
}

  
export function makeGetRequest(path: string): Promise<any> {
  return fetch(`${path}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `${localStorage.getItem("token")}`,
    },
  }).then((res) => res.json());
}