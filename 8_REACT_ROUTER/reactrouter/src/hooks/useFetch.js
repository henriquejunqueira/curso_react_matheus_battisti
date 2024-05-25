import { useState, useEffect } from 'react';

//* 4 - custom hook
export const useFetch = (url) => {
  const [data, setData] = useState(null);

  //* 5 - refatorando post
  const [config, setConfig] = useState(null); // ! configura o método post
  const [method, setMethod] = useState(null); // ! define o tipo de método
  const [callFetch, setCallFetch] = useState(false); // ! serve para atualizar dados

  //* 6 - loading
  const [loading, setLoading] = useState(false);

  //* 7 - tratando erros
  const [error, setError] = useState(null);

  //* 8 - desafio 6
  const [itemId, setItemId] = useState(null);

  const httpConfig = (data, method) => {
    if (method === 'POST') {
      setConfig({
        method,
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      setMethod(method);
    } else if (method === 'DELETE') {
      setConfig({
        method,
        headers: {
          'Content-type': 'application/json',
        },
      });
      setMethod(method);
      setItemId(data);
    }
  };

  useEffect(() => {
    //* 6 - loading

    const fetchData = async () => {
      setLoading(true);

      try {
        const response = await fetch(url);

        const json = await response.json();

        setData(json);
      } catch (error) {
        console.log(error.message);

        setError('Houve algum erro ao carregar os dados!');
      }

      setLoading(false);
    };

    fetchData();
  }, [url, callFetch]);

  //* 5 - refatorando post
  useEffect(() => {
    const httpRequest = async () => {
      let json;
      if (method === 'POST') {
        let fetchOptions = [url, config];

        const response = await fetch(...fetchOptions);

        json = await response.json();
      } else if (method === 'DELETE') {
        const deleteUrl = `${url}/${itemId}`;

        const response = await fetch(deleteUrl, config);
        json = await response.json();
      }
      setCallFetch(json);
    };

    httpRequest();
  }, [config, method, url]); //! a config está sendo monitorada, sempre que for alterada o useEffect é chamado

  return { data, httpConfig, loading, error };
};
