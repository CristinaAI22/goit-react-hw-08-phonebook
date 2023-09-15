import background from '../images/networking-png-8397.png';

const styles = {
  container: {
    width: '1200px',
    height: '100vh',
    margin: '0 auto',
    padding: '20px',
    display: 'flex',
    gap: '10px',
  },
  text: {
    margin: '0 auto',
    padding: '20px',
    flexBasis: '60%',
    marginTop: '100px',
  },
  title: {
    fontWeight: 900,
    fontSize: 62,
    color: '#0fb8f5',
    textAlign: 'center',
    marginTop: '20px',
  },
  subtitle: {
    fontWeight: 500,
    fontSize: 25,
    textAlign: 'center',
    color: '#0f4d81',
  },

  image: {
    backgroundImage: `url(${background})`,
    backgroundSize: '100%',
    padding: '30px',
    objectFit: 'contain',
    backgroundRepeat: 'no-repeat',
    flexBasis: '40%',
    marginTop: '100px',
  },
};

export default function Home() {
  return (
    <>
      <div style={styles.container}>
        <div style={styles.text}>
          <h1 style={styles.title}>ONE Place For ALL Your Contacts!</h1>
          <h2 style={styles.subtitle}>
            Manage contacts from a single place and access them everywhere
            together with your team.
          </h2>
        </div>
        <div style={styles.image}></div>
      </div>
    </>
  );
}
