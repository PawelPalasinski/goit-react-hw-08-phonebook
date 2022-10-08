import styles from './Home.module.css';


const Home = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>
        Task manager welcome page{' '}
        <span role="img" aria-label="Greeting icon">
          💁‍♀️
        </span>
      </h1>
    </div>
  );
}

export default Home