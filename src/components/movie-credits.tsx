import { API_URL } from "app/constants";
import styles from "styles/movie-credits.module.css";

async function getCredits(id: string) {
  const response = await fetch(`${API_URL}/${id}/credits`);
  return response.json();
}

export async function MovieCredits({ id }: { id: string }) {
  const credits = await getCredits(id);
  return (
    <div className={styles.container}>
      {credits.map((credit) => (
        <div key={credit.id}>
          {credit.profile_path === null ? (
            <div className={styles.null} />
          ) : (
            <img src={credit.profile_path} alt={credit.name} />
          )}
          <div>
            <h3>{credit.name}</h3>
            <br />
            <p>{credit.character}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
