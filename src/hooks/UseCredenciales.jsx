import { useQuery } from "@tanstack/react-query";
import { CredencialesAPI } from "../api/CredencialesAPI";

const getCredenciales = async () => {
  const { data } = await CredencialesAPI.get("/credenciales");
  return data;
};

export const useCredencial = () => {
  const credencialesQuery = useQuery({
    queryKey: ["credenciales"],
    queryFn: () => getCredenciales(),
    // onError: () => {
    //   window.location.href = "https://sistemas.ms.gba.gov.ar/";
    // },
  });

  return {
    credencialesQuery,
  };
};
