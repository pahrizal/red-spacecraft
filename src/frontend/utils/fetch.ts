/**
 * Fetch helper function with generic type
 * @param url:string url to fetch
 * @param options:RequestInit options for fetch
 * @returns any
 */
export async function Fetch<T>(url: string, options?: RequestInit): Promise<T> {
  const defaultOptions = {
    method: "get",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  };

  // we don't hit the cache, so fetch from swapi
  const response = await fetch(url, options || defaultOptions);
  const json = (await response.json()) as T;

  return json as T;
}
