import { useEffect, useState } from "react";
import axios from 'axios';

import React from 'react'

export default function useFetch(apipath) {

    const [record, setRecord] = useState([]);

    useEffect(() => {
        axios.get(apipath)
        .then((res) => {
            setRecord(res.data.results);
        })
        .catch((err) => console.log(err));
    }, []);
  return record;
}
