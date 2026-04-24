export const pokemonTypes = [
  "normal",
  "fire",
  "water",
  "grass",
  "electric",
  "ice",
  "fighting",
  "poison",
  "ground",
  "flying",
  "psychic",
  "bug",
  "rock",
  "ghost",
  "dragon",
  "dark",
  "steel",
  "fairy",
];

function getColorsByType(type: (typeof pokemonTypes)[number]) {
  switch (type) {
    case "fire":
      return "#E62828";
    case "water":
      return "#3382F0";
    case "grass":
      return "#3DA324";
    case "electric":
      return "#F9C001";
    case "ice":
      return "#47DAFF";
    case "fighting":
      return "#F78104";
    case "poison":
      return "#923FCC";
    case "ground":
      return "#92501A";
    case "flying":
      return "#81B9EF";
    case "psychic":
      return "#EF3F7A";
    case "bug":
      return "#92A213";
    case "rock":
      return "#B1AA82";
    case "ghost":
      return "#703E71";
    case "dragon":
      return "#4F60E2";
    case "dark":
      return "#4F3F3D";
    case "steel":
      return "#60A1B8";
    case "fairy":
      return "#EF71F0";
    case "normal":
      return "#A0A2A0";
    default:
      return "#A0A2A0";
  }
}

export default getColorsByType;
