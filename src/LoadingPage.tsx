import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './components/Loading.module.css';
import LoadingComponent from './components/Loading';

const API_ENDPOINT = '';

const LoadingPage = () => {
  const history = useHistory();
  const [status, setStatus] = useState(true);

  useEffect(() => {
    checkHealth();
  }, []);

  const checkHealth = () => {
    setStatus(true);

    fetch(`${API_ENDPOINT}/health`)
      .then((data) => data.json())
      .then((data: { status: string }) => {
        const currentStatus = data.status === 'OK' ? true : false;

        if (currentStatus) {
          history.push('/questions');
        }
        setStatus(currentStatus);
      })
      .catch((_error) => {
        setStatus(false);
      });
  };
  return (
    <>
      {status ? (
        <LoadingComponent />
      ) : (
        <div className={styles.centerContainer}>
          <h1 className="title">Service is unavailable</h1>
          <h2 className="subtitle">
            Please press retry in a few moments to try again
          </h2>
          <button className="button is-primary" onClick={checkHealth}>
            Retry
          </button>
        </div>
      )}
    </>
  );
};

export default LoadingPage;
