import { useEffect, useState } from "react";
import { getTeams } from "./api";
import TeamForm from "./components/TeamForm";
import TeamList from "./components/TeamList";

function App() {
  const [teams, setTeams] = useState([]);

  const fetchTeams = async () => {
    const data = await getTeams();
    setTeams(data);
  };

  useEffect(() => {
    fetchTeams();
  }, []);

  return (
    <div style={{ maxWidth: "600px", margin: "2rem auto", fontFamily: "sans-serif" }}>
      <h1>🏆 Teams Manager</h1>
      <TeamForm onTeamAdded={fetchTeams} />
      <TeamList teams={teams} onRefresh={fetchTeams} />
    </div>
  );
}

export default App;