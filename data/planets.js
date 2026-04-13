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