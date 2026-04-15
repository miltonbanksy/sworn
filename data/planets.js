const settlement_location = [
    {min: 1, max: 40, location: () => "Planetside"},
    {min: 41, max: 75, location: () => "Orbital"},
    {min: 76, max: 100, location: () => "Deep Space"}
];

const settlement_authority = [
    {min: 1, max: 15, authority: () => "None / lawless"},
    {min: 16, max: 30, authority: () => "Ineffectual"},
    {min: 31, max: 45, authority: () => "Tolerant"},
    {min: 46, max: 55, authority: () => "Fair"},
    {min: 56, max: 70, authority: () => "Unyielding"},
    {min: 71, max: 85, authority: () => "Corrupt"},
    {min: 86, max: 100, authority: () => "Oppressive"}
];

const settlement_projects = [
    {min: 1, max: 5, project: () => "Agriculture"},
    {min: 6, max: 7, project: () => "Archeology"},
    {min: 8, max: 9, project: () => "Automation"},
    {min: 10, max: 11, project: () => "Black Market"},
    {min: 12, max: 13, project: () => "Command"},
    {min: 14, max: 17, project: () => "Defense"},
    {min: 18, max: 22, project: () => "Energy"},
    {min: 23, max: 25, project: () => "Engineering"},
    {min: 26, max: 27, project: () => "Entertainment"},
    {min: 28, max: 29, project: () => "Environmentalism"},
    {min: 30, max: 31, project: () => "Evacuation"},
    {min: 32, max: 33, project: () => "Expansion"},
    {min: 34, max: 37, project: () => "Exploration"},
    {min: 38, max: 39, project: () => "Festival"},
    {min: 40, max: 41, project: () => "History"},
    {min: 42, max: 43, project: () => "Hunting"},
    {min: 44, max: 46, project: () => "Manufacturing"},
    {min: 47, max: 49, project: () => "Medical"},
    {min: 50, max: 51, project: () => "Migration"},
    {min: 52, max: 57, project: () => "Mining"},
    {min: 58, max: 59, project: () => "Pacifism"},
    {min: 60, max: 62, project: () => "Raiding"},
    {min: 63, max: 65, project: () => "Research"},
    {min: 66, max: 69, project: () => "Salvage"},
    {min: 70, max: 72, project: () => "Secrecy"},
    {min: 73, max: 75, project: () => "Shipbuilding"},
    {min: 76, max: 78, project: () => "Spirituality"},
    {min: 79, max: 84, project: () => "Subsistence"},
    {min: 85, max: 86, project: () => "Surveillance"},
    {min: 87, max: 88, project: () => "Terraforming"},
    {min: 89, max: 92, project: () => "Trade"},
    {min: 93, max: 95, project: () => "Warfare"},
    {min: 96, max: 100, project: () => getActionAndTheme()}
];

const settlement_first_look = [
  { "min": 1, "max": 4, "first_look": () => "Beautiful architecture" },
  { "min": 5, "max": 8, "first_look": () => "Built from natural materials" },
  { "min": 9, "max": 14, "first_look": () => "Built from scrap metal" },
  { "min": 15, "max": 20, "first_look": () => "Built within repurposed ship" },
  { "min": 21, "max": 25, "first_look": () => "Built within terrain or asteroid" },
  { "min": 26, "max": 29, "first_look": () => "Elevated or multi-level construction" },
  { "min": 30, "max": 34, "first_look": () => "Hidden or subsurface location" },
  { "min": 35, "max": 37, "first_look": () => "High-tech construction" },
  { "min": 38, "max": 43, "first_look": () => "Industrial architecture" },
  { "min": 44, "max": 48, "first_look": () => "Intimidating defenses" },
  { "min": 49, "max": 51, "first_look": () => "Moving or transforming" },
  { "min": 52, "max": 56, "first_look": () => "Obvious social stratification" },
  { "min": 57, "max": 61, "first_look": () => "Precarious location" },
  { "min": 62, "max": 65, "first_look": () => "Prominent emblems or signage" },
  { "min": 66, "max": 71, "first_look": () => "Rustic architecture" },
  { "min": 72, "max": 76, "first_look": () => "Significant structural damage" },
  { "min": 77, "max": 80, "first_look": () => "Sprawling or dispersed structures" },
  { "min": 81, "max": 83, "first_look": () => "Temporary or seasonal location" },
  { "min": 84, "max": 87, "first_look": () => "Toxic or polluted habitat" },
  { "min": 88, "max": 90, "first_look": () => "Within or near a Precursor Vault" },
  { "min": 91, "max": 100, "first_look": () => getDescriptorAndFocus() }
];

const settlement_trouble = [
  { "min": 1, "max": 3, "trouble": () => "Battle for leadership" },
  { "min": 4, "max": 6, "trouble": () => "Betrayal from within" },
  { "min": 7, "max": 8, "trouble": () => "Caught in the crossfire" },
  { "min": 9, "max": 11, "trouble": () => "Changing environment" },
  { "min": 12, "max": 13, "trouble": () => "Clash of cultures" },
  { "min": 14, "max": 17, "trouble": () => "Dangerous discovery" },
  { "min": 18, "max": 21, "trouble": () => "Depleted supplies" },
  { "min": 22, "max": 24, "trouble": () => "Deprived of a resource" },
  { "min": 25, "max": 28, "trouble": () => "Failing technology" },
  { "min": 29, "max": 32, "trouble": () => "Feuding factions" },
  { "min": 33, "max": 34, "trouble": () => "Ghostly visitations" },
  { "min": 35, "max": 38, "trouble": () => "Hazardous environment" },
  { "min": 39, "max": 42, "trouble": () => "Hostile lifeforms" },
  { "min": 43, "max": 45, "trouble": () => "Impassable route" },
  { "min": 46, "max": 48, "trouble": () => "Impending attack" },
  { "min": 49, "max": 51, "trouble": () => "Impending natural disaster" },
  { "min": 52, "max": 53, "trouble": () => "Invasive organisms" },
  { "min": 54, "max": 55, "trouble": () => "Mounting debt" },
  { "min": 56, "max": 57, "trouble": () => "Mysterious deaths" },
  { "min": 58, "max": 60, "trouble": () => "Overdue delivery" },
  { "min": 61, "max": 62, "trouble": () => "Plagued by sickness" },
  { "min": 63, "max": 65, "trouble": () => "Preyed upon by raiders" },
  { "min": 66, "max": 67, "trouble": () => "Revolt against leadership" },
  { "min": 68, "max": 69, "trouble": () => "Sabotaged technology" },
  { "min": 70, "max": 71, "trouble": () => "Shunned by others" },
  { "min": 72, "max": 74, "trouble": () => "Social strife" },
  { "min": 75, "max": 76, "trouble": () => "Someone is ill or injured" },
  { "min": 77, "max": 78, "trouble": () => "Someone is missing" },
  { "min": 79, "max": 80, "trouble": () => "Stolen technology or object" },
  { "min": 81, "max": 83, "trouble": () => "Strange phenomenon" },
  { "min": 84, "max": 86, "trouble": () => "Toxic waste or pollution" },
  { "min": 87, "max": 88, "trouble": () => "Volatile energy source" },
  { "min": 89, "max": 90, "trouble": () => "Vulnerable lifeforms" },
  { "min": 91, "max": 100, "trouble": () => getActionAndTheme() }
];


const primary_stars = [
    {min: 1, max: 15, description: "Smoldering red star"},
    {min: 16, max: 30, description: "Glowing orange star"},
    {min: 31, max: 45, description: "Burning yellow star"},
    {min: 46, max: 50, description: "Blazing blue star"},
    {min: 51, max: 60, description: "Young star incubating in a molecular cloud"},
    {min: 61, max: 70, description: "White dwarf shining with spectral light"},
    {min: 71, max: 75, description: "Corrupted star radiating with unnatural light"},
    {min: 76, max: 80, description: "Neutron star surrounded by intense magnetic fields"},
    {min: 81, max: 85, description: "Two stars in close orbit connected by fiery tendrils of energy"},
    {min: 86, max: 90, description: "Black hole allows nothing to escape - not even light"},
    {min: 91, max: 98, description: "Hypergiant star generating turbulent solar winds"},
    {min: 99, max: 99, description: "Artificial star constructed by a long dead civilization"},
    {min: 100, max: 100, description: "Unstable star showing signs of impending supernova"}
];

const planetary_class = [
    {
        min: 1, max: 15,
        pClass: "Desert World",
        pDescription: "A pitiless planet of searing heat, blowing sand, and sunbaked rock.",
        pAtmos: [
            {aMin: 1, aMax: 10, aDescription: "None / Thin"},
            {aMin: 11, aMax: 25, aDescription: "Toxic"},
            {aMin: 26, aMax: 40, aDescription: "Corrosive"},
            {aMin: 41, aMax: 70, aDescription: "Marginal"},
            {aMin: 71, aMax: 95, aDescription: "Breathable"},
            {aMin: 96, aMax: 100, aDescription: "Ideal"}
        ],
        pSettlements_terminus: [
            {min: 1, max: 50, sDescription: "None"}
        ]
    }
];