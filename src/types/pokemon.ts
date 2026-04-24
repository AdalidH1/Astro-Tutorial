export type Pokemon = {
  id: number;
  name: string;
  height: number;
  weight: number;
  types: {
    slot: number;
    type: {
      name: string;
      url: string;
    };
  }[];
  sprites: {
    front_default: string | null;
    back_default: string | null;
    front_shiny: string | null;
    back_shiny: string | null;
    other?: {
      dream_world?: {
        front_default: string | null;
        front_female: string | null;
      };
      home?: {
        front_default: string | null;
        front_female: string | null;
        front_shiny: string | null;
        front_shiny_female: string | null;
      };
      "official-artwork"?: {
        front_default: string | null;
        front_shiny: string | null;
      };
      showdown?: {
        back_default: string | null;
        back_female: string | null;
        back_shiny: string | null;
        back_shiny_female: string | null;
        front_default: string | null;
        front_female: string | null;
        front_shiny: string | null;
        front_shiny_female: string | null;
      };
    };
    versions?: {
      [generation: string]: {
        [version: string]: {
          back_default: string | null;
          back_gray?: string | null;
          back_transparent?: string | null;
          front_default: string | null;
          front_gray?: string | null;
          front_transparent?: string | null;
          back_shiny?: string | null;
          back_shiny_transparent?: string | null;
          front_shiny?: string | null;
          front_shiny_transparent?: string | null;
        };
      };
    };
  };
  stats: {
    base_stat: number;
    effort: number;
    stat: {
      name: string;
      url: string;
    };
  }[];
  moves: {
    move: {
      name: string;
      url: string;
    };
    version_group_details: {
      level_learned_at: number;
      move_learn_method: {
        name: string;
        url: string;
      };
      order: number | null;
      version_group: {
        name: string;
        url: string;
      };
    }[];
  }[];
  abilities: {
    ability: {
      name: string;
      url: string;
    };
    is_hidden: boolean;
    slot: number;
  }[];
  species: {
    name: string;
    url: string;
  };
  location_area_encounters: string;
  past_abilities?: {
    abilities: {
      ability: {
        name: string;
        url: string;
      } | null;
      is_hidden: boolean;
      slot: number;
    }[];
    generation: {
      name: string;
      url: string;
    };
  }[];
  past_stats?: {
    generation: {
      name: string;
      url: string;
    };
    stats: {
      base_stat: number;
      effort: number;
      stat: {
        name: string;
        url: string;
      };
    }[];
  }[];
  past_types?: any[]; // Assuming past_types is an array of any type, as it is empty in the provided data
  order: number;
};
