import { useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';

const Home = () => {
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/')
      .then((response: AxiosResponse<{ message: string }>) => {
        setMessage(response.data.message);
      })
      .catch((error) => {
        console.error("Erro ao buscar mensagem da API:", error);
        setMessage("Erro ao conectar com o backend.");
      });
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Página Home</h1>
      <p className="mt-2">
        {message ? message : "Carregando..."}
      </p>
    </div>
  );
};

export default Home;
