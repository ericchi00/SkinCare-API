## SkinCare API

API that provides skincare products with ingredients and categories from a self made database.

## Technology

Node.js, Express, PostgreSQL, TypeScript

**URL**

link will go here when hosted

## Get all Products

### `GET /products`

### Response

```json
[
	{
		"id": 1,
		"name": "low ph good morning gel cleanser",
		"brand": "cosrx",
		"category": "cleanser",
		"ingredients": [
			"water",
			"cocamidopropyl betaine",
			"sodium lauroyl methyl isethionate",
			"polysorbate 20",
			"styrax japonicus branch/fruit/leaf extract",
			"butylene glycol",
			"saccharomyces ferment",
			"cryptomeria japonica leaf extract",
			"nelumbo nucifera leaf extract",
			"pinus palustris leaf extract",
			"ulmus davidiana root extract",
			"oenothera biennis (evening primrose) flower extract",
			"pueraria lobata root extract",
			"melaleuca alternifolia (tea tree) leaf oil",
			"allantoin",
			"caprylyl glycol",
			"ethylhexylglycerin",
			"betaine salicylate",
			"citric acid",
			"ethyl hexanediol",
			"1,2-hexanediol",
			"trisodium ethylenediamine disuccinate",
			"sodium benzoate",
			"disodium edta"
		]
	}
]
```

## Get Products by Product ID

### `GET /products/:id`

### Response

```json
{
	"id": **5,**
	"name": "pure fit cica cleanser",
	"brand": "cosrx",
	"category": "cleanser",
	"ingredients": [
		"water",
		"sodium cocoyl isethionate",
		"glycerin",
		"glyceryl stearate",
		"stearyl alcohol",
		"coco-betaine",
		"sodium methyl cocoyl taurate",
		"sodium chloride",
		"coco-glucoside",
		"caprylyl glycol",
		"glyceryl caprylate",
		"citric acid",
		"eucalyptus globulus leaf oil",
		"disodium edta",
		"ocimum basilicum (basil) oil",
		"1,2-hexanediol",
		"quillaja saponaria bark extract",
		"propanediol",
		"centella asiatica extract",
		"centella asiatica leaf extract",
		"centella asiatica root extract",
		"saccharomyces ferment",
		"ethylhexylglycerin",
		"asiatic acid",
		"asiaticoside",
		"madecassic acid",
		"madecassoside",
		"pinus pinaster bark extract"
	]
}
```

## Get Products by Category

### `GET /categories/:category`

### Response

```json
[
	{
		"id": 1,
		"name": "low ph good morning gel cleanser",
		"brand": "cosrx",
		"category": **"cleanser",**
		"ingredients": [
			"water",
			"cocamidopropyl betaine",
			"sodium lauroyl methyl isethionate",
			"polysorbate 20",
			"styrax japonicus branch/fruit/leaf extract",
			"butylene glycol",
			"saccharomyces ferment",
			"cryptomeria japonica leaf extract",
			"nelumbo nucifera leaf extract",
			"pinus palustris leaf extract",
			"ulmus davidiana root extract",
			"oenothera biennis (evening primrose) flower extract",
			"pueraria lobata root extract",
			"melaleuca alternifolia (tea tree) leaf oil",
			"allantoin",
			"caprylyl glycol",
			"ethylhexylglycerin",
			"betaine salicylate",
			"citric acid",
			"ethyl hexanediol",
			"1,2-hexanediol",
			"trisodium ethylenediamine disuccinate",
			"sodium benzoate",
			"disodium edta"
		]
	},
	{
		"id": 2,
		"name": "advanced snail mucin gel cleanser",
		"brand": "cosrx",
		"category": **"cleanser",**
		"ingredients": [
			"water",
			"acrylates copolymer",
			"butylene glycol",
			"glycerin",
			"disodium laureth sulfosuccinate",
			"sodium cocoyl isethionate",
			"1,2-hexanediol",
			"coco-glucoside",
			"lauryl betaine",
			"snail secretion filtrate",
			"arginine",
			"tromethamine",
			"potassium cocoyl glycinate",
			"fragrance",
			"carbomer",
			"sodium chloride",
			"ethylhexylglycerin",
			"acrylates/c10-30 alkyl acrylate crosspolymer",
			"sodium polyacrylate",
			"disodium edta"
		]
	}
]
```

## Get Products by Brand

### `GET /brands/:brand`

### Response

```json
[
	{
		"id": 9,
		"name": "ac collection calming foam cleanser",
		"brand": **"cosrx",**
		"category": "cleanser",
		"ingredients": [
			"water",
			"glycerin",
			"stearic acid",
			"myristic acid",
			"peg-32",
			"potassium hydroxide",
			"palmitic acid",
			"lauric acid",
			"glyceryl stearate",
			"peg-100 stearate",
			"lauramide dea",
			"cocamidopropyl betaine",
			"potassium cocoate",
			"salicylic acid",
			"sodium chloride",
			"arachidic acid",
			"lavandula hybrida oil",
			"linalool",
			"disodium edta",
			"oleic acid",
			"limonene",
			"asiaticoside",
			"asiatic acid",
			"madecassic acid"
		]
	},
	{
		"id": 10,
		"name": "low ph centella cleansing powder",
		"brand": **"cosrx",**
		"category": "cleanser",
		"ingredients": [
			"zea mays (corn) starch",
			"sodium cocoyl isethionate",
			"sodium lauroyl glutamate",
			"sodium lauroyl aspartate",
			"maltodextrin",
			"allantoin",
			"centella asiatica extract",
			"lipase",
			"protease"
		]
	}
]
```

## Get Products by Ingredients

### `GET /ingredients?ingredients=water, citric acid`

Searches for products for any amount of ingredients (minimum one) separated by a comma (,)

### Response

```json
[
	{
		"id": 1,
		"name": "low ph good morning gel cleanser",
		"brand": "cosrx",
		"category": "cleanser",
		"ingredients": [
			**"water",**
			"cocamidopropyl betaine",
			"sodium lauroyl methyl isethionate",
			"polysorbate 20",
			"styrax japonicus branch/fruit/leaf extract",
			"butylene glycol",
			"saccharomyces ferment",
			"cryptomeria japonica leaf extract",
			"nelumbo nucifera leaf extract",
			"pinus palustris leaf extract",
			"ulmus davidiana root extract",
			"oenothera biennis (evening primrose) flower extract",
			"pueraria lobata root extract",
			"melaleuca alternifolia (tea tree) leaf oil",
			"allantoin",
			"caprylyl glycol",
			"ethylhexylglycerin",
			"betaine salicylate",
			**"citric acid",**
			"ethyl hexanediol",
			"1,2-hexanediol",
			"trisodium ethylenediamine disuccinate",
			"sodium benzoate",
			"disodium edta"
		]
	},
	{
		"id": 5,
		"name": "pure fit cica cleanser",
		"brand": "cosrx",
		"category": "cleanser",
		"ingredients": [
			**"water",**
			"sodium cocoyl isethionate",
			"glycerin",
			"glyceryl stearate",
			"stearyl alcohol",
			"coco-betaine",
			"sodium methyl cocoyl taurate",
			"sodium chloride",
			"coco-glucoside",
			"caprylyl glycol",
			"glyceryl caprylate",
			**"citric acid",**
			"eucalyptus globulus leaf oil",
			"disodium edta",
			"ocimum basilicum (basil) oil",
			"1,2-hexanediol",
			"quillaja saponaria bark extract",
			"propanediol",
			"centella asiatica extract",
			"centella asiatica leaf extract",
			"centella asiatica root extract",
			"saccharomyces ferment",
			"ethylhexylglycerin",
			"asiatic acid",
			"asiaticoside",
			"madecassic acid",
			"madecassoside",
			"pinus pinaster bark extract"
		]
	},
	{
		"id": 7,
		"name": "pure fit cica low ph cleansing pad",
		"brand": "cosrx",
		"category": "cleanser",
		"ingredients": [
			**"water",**
			"isopropyl myristate",
			"methylpropanediol",
			"polyglyceryl-6 caprylate",
			"panthenol",
			"betaine",
			"allantoin",
			"centella asiatica root extract",
			"pinus pinaster bark extract",
			"ethylhexylglycerin",
			"cetylpyridinium chloride",
			"caprylyl glycol",
			"cocamidopropyl pg-dimonium chloride phosphate",
			**"citric acid",**
			"sodium citrate ",
			"rosmarinus officinalis (rosemary) leaf oil",
			"centella asiatica leaf extract",
			"hydrogenated phosphatidylcholine",
			"caprylic/capric triglyceride",
			"sucrose stearate",
			"asiaticoside",
			"madecassic acid",
			"asiatic acid",
			"centella asiatica extract",
			"cholesterol",
			"madecassoside"
		]
	}
]
```

### Status Codes

| Code | Response                                       |
| ---- | ---------------------------------------------- |
| 200  | returned products in JSON format               |
| 400  | the brand, category, or product does not exist |
