import { useState, useEffect } from "react";
import axios from "axios";

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


