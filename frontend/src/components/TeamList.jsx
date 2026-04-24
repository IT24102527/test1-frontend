import { deleteTeam } from "../api";

export default function TeamList({ teams, onRefresh }) {
  const handleDelete = async (id) => {
    await deleteTeam(id);
    onRefresh();
  };

  return (
    <div>
      <h2>Teams</h2>
      {teams.length === 0 && <p>No teams yet.</p>}
      {teams.map((team) => (
        <div key={team._id} style={{ border: "1px solid #ccc", padding: "0.5rem", marginBottom: "0.5rem" }}>
          <strong>{team.name}</strong> — {team.description} ({team.members} members)
          <button onClick={() => handleDelete(team._id)} style={{ marginLeft: "1rem" }}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}