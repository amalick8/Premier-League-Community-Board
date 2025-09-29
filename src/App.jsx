import MatchCard from './components/MatchCard';
import './App.css'

function App() {
  const matches = [
  {
    homeTeam: "Arsenal",
    awayTeam: "Chelsea",
    date: "Oct 5, 2025",
    time: "12:30 PM",
    stadium: "Emirates Stadium",
    logoHome: "https://resources.premierleague.com/premierleague/badges/t3.svg",
    logoAway: "https://resources.premierleague.com/premierleague/badges/t8.svg"
  },
  {
    homeTeam: "Liverpool",
    awayTeam: "Man City",
    date: "Oct 6, 2025",
    time: "4:00 PM",
    stadium: "Anfield",
    logoHome: "https://resources.premierleague.com/premierleague/badges/t14.svg",
    logoAway: "https://resources.premierleague.com/premierleague/badges/t43.svg"
  },
  {
    homeTeam: "Man United",
    awayTeam: "Tottenham",
    date: "Oct 12, 2025",
    time: "3:00 PM",
    stadium: "Old Trafford",
    logoHome: "https://resources.premierleague.com/premierleague/badges/t1.svg",
    logoAway: "https://resources.premierleague.com/premierleague/badges/t6.svg"
  },
  {
    homeTeam: "Newcastle",
    awayTeam: "Aston Villa",
    date: "Oct 15, 2025",
    time: "2:00 PM",
    stadium: "St James' Park",
    logoHome: "https://resources.premierleague.com/premierleague/badges/t4.svg",
    logoAway: "https://resources.premierleague.com/premierleague/badges/t7.svg"
  },
  {
    homeTeam: "Brighton",
    awayTeam: "West Ham",
    date: "Oct 18, 2025",
    time: "1:00 PM",
    stadium: "Amex Stadium",
    logoHome: "https://resources.premierleague.com/premierleague/badges/t36.svg",
    logoAway: "https://resources.premierleague.com/premierleague/badges/t21.svg"
  },
  {
    homeTeam: "Leicester",
    awayTeam: "Everton",
    date: "Oct 20, 2025",
    time: "3:00 PM",
    stadium: "King Power Stadium",
    logoHome: "https://resources.premierleague.com/premierleague/badges/t13.svg",
    logoAway: "https://resources.premierleague.com/premierleague/badges/t11.svg"
  },
  {
    homeTeam: "Crystal Palace",
    awayTeam: "Fulham",
    date: "Oct 22, 2025",
    time: "7:00 PM",
    stadium: "Selhurst Park",
    logoHome: "https://resources.premierleague.com/premierleague/badges/t31.svg",
    logoAway: "https://resources.premierleague.com/premierleague/badges/t4.svg"
  },
  {
    homeTeam: "Wolves",
    awayTeam: "Brentford",
    date: "Oct 25, 2025",
    time: "12:30 PM",
    stadium: "Molineux Stadium",
    logoHome: "https://resources.premierleague.com/premierleague/badges/t39.svg",
    logoAway: "https://resources.premierleague.com/premierleague/badges/t94.svg"
  },
  {
    homeTeam: "Nottingham Forest",
    awayTeam: "Burnley",
    date: "Oct 27, 2025",
    time: "2:00 PM",
    stadium: "City Ground",
    logoHome: "https://resources.premierleague.com/premierleague/badges/t17.svg",
    logoAway: "https://resources.premierleague.com/premierleague/badges/t90.svg"
  },
  {
    homeTeam: "Southampton",
    awayTeam: "Leeds",
    date: "Oct 29, 2025",
    time: "5:00 PM",
    stadium: "St Mary's Stadium",
    logoHome: "https://resources.premierleague.com/premierleague/badges/t20.svg",
    logoAway: "https://resources.premierleague.com/premierleague/badges/t2.svg"
  }, {
  homeTeam: "Bournemouth",
  awayTeam: "Sheffield United",
  date: "Nov 1, 2025",
  time: "1:00 PM",
  stadium: "Vitality Stadium",
  logoHome: "https://resources.premierleague.com/premierleague/badges/t91.svg",
  logoAway: "https://resources.premierleague.com/premierleague/badges/t49.svg"
},
{
  homeTeam: "West Ham",
  awayTeam: "Everton",
  date: "Nov 3, 2025",
  time: "4:00 PM",
  stadium: "London Stadium",
  logoHome: "https://resources.premierleague.com/premierleague/badges/t21.svg",
  logoAway: "https://resources.premierleague.com/premierleague/badges/t11.svg"
}
];


  
  return (
  <div className="App">
    <h1>Premier League Fixtures ⚽️</h1>

    <div className="grid">
      {matches.map((game, index) => (
        <MatchCard
          key={index}
          homeTeam={game.homeTeam}
          awayTeam={game.awayTeam}
          date={game.date}
          time={game.time}
          stadium={game.stadium}
          logoHome={game.logoHome}
          logoAway={game.logoAway}
        />

      ))}
    </div>
  </div>
);
  
}

export default App;
  