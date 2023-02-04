import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { PhotoType } from "../../types/PhotoType";
import { api } from "../services/api";

export function PhotosId() {
  const [photo, setPhoto] = useState<PhotoType>();
  const [loading, setLoading] = useState(false);
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    let id = params.slug;
    if (id) {
      loadPhoto(parseInt(id));
    }
  },[]);
  async function loadPhoto(id: number) {
    try {
      setLoading(true);
      let jsonResult = await api.getPhoto(id);

      setInterval(() => {
        setLoading(false);
      }, 1000);

      console.log(jsonResult);
      setPhoto(jsonResult);
      
    } catch (error) {
      console.error("Erro ao Carregar Conteudo da Foto");
    }
  }
  function handleBackButton() {
    navigate(-1);
  }

  return (
    <div>
      <h2>Photos :</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <div>
            <h4>{photo?.title}</h4>
            <img src={photo?.url} />
          </div>
          <button onClick={handleBackButton}>Voltar</button>
        </>
      )}
    </div>
  );
}
