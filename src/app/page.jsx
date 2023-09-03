import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Torneos y Salas de Juego</h1>
      <div className={styles.card}>
        <div className={styles.cardImage}>
          <Image
            // src="/imagen-de-la-sala.jpg" // Reemplaza con la URL de la imagen de la sala
            alt="Imagen de la sala"
            width={300} // Ajusta el tamaño de la imagen según tus necesidades
            height={200}
          />
        </div>
        <div className={styles.cardContent}>
          <h2>Sala de Brawl Stars</h2>
          <p>
            Únete a la diversión en Brawl Stars y compite en emocionantes
            torneos.
          </p>
        </div>
      </div>
    </main>
  );
}
