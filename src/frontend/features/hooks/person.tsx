import { useCallback, useState } from "react";
import { People } from "../../../backend/swapi/schema";
import { Fetch } from "../../utils/fetch";
export default function usePeople() {
  const [people, setPeople] = useState<People | null>(null);
  const [peoples, setPeoples] = useState<People[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>("");
  // function to fetch all people
  const fetchAll = useCallback(async () => {
    setLoading(true);
    try {
      const results = await Fetch<People[]>("/api/person");
      setPeoples(results);
    } catch (err) {
      setError("fetching all people failed");
    }
    setLoading(false);
  }, []);

  // function to fetch people by Id
  const fetchById = useCallback(async (id: number) => {
    setLoading(true);
    try {
      const result = await Fetch<People>(`/api/person/${id}`);
      setPeople(result);
    } catch (err) {
      setError(`fetching person with id ${id} failed`);
    }
    setLoading(false);
  }, []);

  // function to fetch people by url
  const fetchByUrl = useCallback(async (url: string) => {
    setLoading(true);
    try {
      const result = await Fetch<People>(url);
      setPeople(result);
    } catch (err) {
      setError(`fetching person with url ${url} failed`);
    }
    setLoading(false);
  }, []);

  return {
    people,
    peoples,
    loading,
    error,
    fetchAll,
    fetchById,
    fetchByUrl,
  };
}
