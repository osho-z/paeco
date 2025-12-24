import axios from 'axios';

interface HealthStatus {
  status: string;
}

export default async function Home() {
  const response = await axios.get<HealthStatus>('http://localhost:8000/health');
  const healthStatus = response.data.status;

  return (
    <main>
      <h1>Server Health Status</h1>
      <p>The server is currently: {healthStatus}</p>
    </main>
  );
}