function getToggleVariants(params: string) {
  switch (params) {
    case "fire":
      return "fire";
    case "water":
      return "water";
    case "grass":
      return "grass";
    case "electric":
      return "electric";
    case "psychic":
      return "psychic";
    case "ice":
      return "ice";
    case "dragon":
      return "dragon";
    case "dark":
      return "dark";
    case "fairy":
      return "fairy";
    case "fighting":
      return "fighting";
    case "poison":
      return "poison";
    case "ground":
      return "ground";
    case "flying":
      return "flying";
    case "bug":
      return "bug";
    case "rock":
      return "rock";
    case "ghost":
      return "ghost";
    case "steel":
      return "steel";
    case "normal":
      return "normal";
  }
}

export default getToggleVariants;
