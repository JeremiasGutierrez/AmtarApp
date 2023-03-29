import { useState, useEffect } from "react";
import axios from "axios";
import { ApiInfo } from "@env";

export const usersData = (dni) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data: response } = await axios.get(`${ApiInfo}${dni}&entidad=1`);
        setData(response);
      } catch (error) {
        console.error(error.message);
      }
      setLoading(false);
    };

    if (dni) {
      fetchData();
    }
  }, [dni]);

  return { data, loading };
};