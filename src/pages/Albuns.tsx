import { useEffect, useState } from "react";
import { PhotoType } from "../../types/PhotoType";
import { AlbumType } from "../../types/AlbumType";
import { api } from "../services/api";
import { useNavigate, useParams, Link } from "react-router-dom";

export function Albuns() {
  const [photos, setPhotos] = useState<PhotoType[]>([]);
  const [album, setAlbum] = useState<AlbumType>();
  const [loading, setLoading] = useState(false);
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    let albumId = params.slug;
    if (albumId) {
      loadPhotos(parseInt(albumId));
    }
  }, []);

   async function loadPhotos(albumId: number) {
    try {
      setLoading(true);
      let JsonAlbum = await api.getAlbum(albumId);
      let jsonPhotos = await api.getAllPhotos(albumId);

      setInterval(() => {
        setLoading(false);
      }, 1000);

      setAlbum(JsonAlbum);
      setPhotos(jsonPhotos);
    } catch (error) {
      console.log("Erro no loadPhotos");
    }
  };

  function handleBackButton(){
    navigate(-1);
  };

  return (
    <div>
      <h2>Albuns :</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <div>
            <h4>{album?.title}</h4>
            <div>
              {photos.map((item, index) => (
                <Link key={index} to={`/photos/${item.id}`}>
                  <img src={item.thumbnailUrl} />
                </Link>
              ))}
            </div>
          </div>
          <button onClick={handleBackButton}>Voltar</button>
        </>
      )}
    </div>
  );
}
