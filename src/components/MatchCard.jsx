function MatchCard({ homeTeam, awayTeam, date, time, stadium, logoHome, logoAway }) {
  return (
    <div className="card">
      <div className="teams">
        <img src={logoHome} alt={homeTeam} className="team-logo" />
        <h2>{homeTeam} vs {awayTeam}</h2>
        <img src={logoAway} alt={awayTeam} className="team-logo" />
      </div>
      <p>{date} – {time}</p>
      <p>{stadium}</p>
    </div>
  );
}


export default MatchCard;