interface RaceInfo {
    name: string;
    time: string;
  }
  
  interface RacesRecord {
    [key: string]: RaceInfo;
  }

export const races: RacesRecord = {
    "0": { name: "Copii", time: "11:30" },
    "1": { name: "Feminin 13-17 ani", time: "10:00" },
    "2": { name: "Masculin 13-17 ani", time: "10:30" },
    "3": { name: "Feminin 18-35 de ani", time: "14:00" },
    "4": { name: "Masculin 18-35 de ani", time: "14:50" },
    "5": { name: "Feminin 35+ de ani", time: "12:20" },
    "6": { name: "Masculin 35+ de ani", time: "13:00" },
  };