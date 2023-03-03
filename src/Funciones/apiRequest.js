import { useState, useEffect } from "react";
import axios from "axios";
<<<<<<< Updated upstream

export const data = (() => {
  const [list, setList] = useState(undefined);
  useEffect(() => {
    axios({
      url: "http://osarpyh-testint.dyndns.org/wsvalidaafi2/apiafi.php?numdoc=5324335&entidad=1",
    })
      .then((response) => {

        setList(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [setList]);
  return list
}

)
=======
import { ApiInfo } from '@env';
export const usersData = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: response } = await axios.get(ApiInfo);
        setData(response);
      } catch (error) {
        console.error(error, ApiInfo)
      }
      setLoading(false);
    };
>>>>>>> Stashed changes


