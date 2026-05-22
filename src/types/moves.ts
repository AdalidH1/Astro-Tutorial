export interface NamedAPIResource {
  name: string;
  url: string;
}

export interface VerboseEffect {
  effect: string;
  short_effect: string;
  language: NamedAPIResource;
}

export interface AbilityEffectChange {
  effect_entries: VerboseEffect[];
  version_group: NamedAPIResource;
}

export interface MoveFlavorText {
  flavor_text: string;
  language: NamedAPIResource;
  version_group: NamedAPIResource;
}

export interface MoveMetaData {
  ailment: NamedAPIResource;
  ailment_chance: number;
  category: NamedAPIResource;
  crit_rate: number;
  drain: number;
  flinch_chance: number;
  healing: number;
  max_hits: number | null;
  max_turns: number | null;
  min_hits: number | null;
  min_turns: number | null;
  stat_chance: number;
}

export interface MachineVersionDetail {
  machine: NamedAPIResource;
  version_group: NamedAPIResource;
}

export interface MoveStatChange {
  change: number;
  stat: NamedAPIResource;
}

export interface PastMoveStatValues {
  accuracy: number | null;
  effect_chance: number | null;
  power: number | null;
  pp: number | null;
  effect_entries: VerboseEffect[];
  type: NamedAPIResource | null;
  version_group: NamedAPIResource;
}

export interface Move {
  id: number;
  name: string;

  accuracy: number | null;
  effect_chance: number | null;
  pp: number | null;
  priority: number;
  power: number | null;

  contest_combos: {
    normal: {
      use_before: NamedAPIResource[] | null;
      use_after: NamedAPIResource[] | null;
    };
    super: {
      use_before: NamedAPIResource[] | null;
      use_after: NamedAPIResource[] | null;
    };
  };

  contest_type: NamedAPIResource | null;
  contest_effect: NamedAPIResource | null;

  damage_class: NamedAPIResource;
  effect_entries: VerboseEffect[];
  effect_changes: AbilityEffectChange[];

  flavor_text_entries: MoveFlavorText[];

  generation: NamedAPIResource;

  machines: MachineVersionDetail[];

  meta: MoveMetaData | null;

  names: {
    name: string;
    language: NamedAPIResource;
  }[];

  past_values: PastMoveStatValues[];

  stat_changes: MoveStatChange[];

  super_contest_effect: NamedAPIResource | null;

  target: NamedAPIResource;

  type: NamedAPIResource;

  learned_by_pokemon: NamedAPIResource[];
}
