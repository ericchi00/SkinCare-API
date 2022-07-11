## SkinCare API

API that provides skincare products with ingredients and categories from over 300 products. Slowly adding more to the database.

## Technology

Node.js, Express, PostgreSQL, TypeScript

### URL

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

Example

### `GET /products/5`

### Response

```json
{
	"id": 5,
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

## Get a Products by Name

### `GET /products/name/:name`

Example

### `GET/products/name/sleeping mask`

### Response

```json
[
	{
		"id": 178,
		"name": "jeju water sleeping mask",
		"brand": "ciracle",
		"category": "mask",
		"ingredients": [
			"water",
			"kaolin",
			"butylene glycol",
			"volcanic ash",
			"titanium dioxide",
			"sorbitol",
			"caprylic/capric triglyceride",
			"cetearyl alcohol",
			"stearic acid",
			"bentonite",
			"polysorbate 60",
			"salix alba (willow) bark extract",
			"polyvinyl alcohol",
			"triethanolamine",
			"peg-100 stearate",
			"glyc",
			"magnolia kobus bark extract",
			"citrus grandis (grapefruit) fruit extract",
			"chamomilla recutita (matricaria) flower/leaf extract",
			"chamomilla recutita (matricaria) flower extract",
			"camellia sinensis leaf extract",
			"hamamelis virginiana (witch hazel) leaf extract"
		]
	},
	{
		"id": 319,
		"name": "wine therapy sleeping mask red wine",
		"brand": "holika holika",
		"category": "mask",
		"ingredients": [
			"water",
			"wine extract",
			"alcohol",
			"dipropylene glycol",
			"glycereth-26",
			"bis-peg-18 methyl ether dimethyl silane",
			"peg/ppg/polybutylene glycol-8/5/3 glycerin",
			"peg-240/hdi copolymer bis-decyltetradeceth-20 ether",
			"glycerin",
			"glyceryl acrylate/acrylic acid copolymer",
			"propylene glycol",
			"butylene glycol",
			"glycerylpolyacrylate",
			"biosaccharide gum-1",
			"hydrolyzed wheat protein/pvp crosspolymer",
			"peg-60 hydrogenated castor oil",
			"rosmarinus officinalis (rosemary) extract",
			"lavandula angustifolia (lavender) extract",
			"thymus vulgaris (thyme) extract",
			"bergenia ciliata root extract",
			"viola mandshurica flower extract",
			"impatiens balsamina flower extract",
			"phenoxyethanol",
			"theobroma cacao (cocoa) seed extract",
			"xanthan gum",
			"adenosine",
			"caprylhydroxyamic acid",
			"caprylyl glycol",
			"disodium edta",
			"fragrance",
			"ci17200",
			"ci15985"
		]
	}
]
```

## Get Products by Ingredients

### `GET /products/ingredients/:ingredients`

Example

### `GET /products/ingredients/water, hydrogenated vegetable oil`

Ingredients must be separated by a comma and at least one must be put in. The ingredient must be have exact spelling. It's recommend to search the database for the ingredient first to see if it exists.

### Response

```json
[
	{
		"id": 207,
		"name": "baking powder pore cleansing cream",
		"brand": "etude house",
		"category": "cream",
		"ingredients": [
			"water",
			"mineral oil",
			"isopropyl palmitate",
			"octyldodecanol",
			"butylene glycol",
			"glycerin",
			"cetearyl alcohol",
			"hydrogenated vegetable oil",
			"citrus medica limonum (lemon) peel oil",
			"citrus aurantium dulcis (orange) peel oil",
			"sodium bicarbonate",
			"glycol distearate",
			"glyceryl stearate",
			"dimethicone",
			"beeswax",
			"sorbitan stearate",
			"acrylates/c10-30 alkyl acrylate crosspolymer",
			"ethylhexylglycerin",
			"poloxamer 184",
			"polysorbate 60",
			"peg-100 stearate",
			"triethanolamine",
			"disodium edta",
			"phenoxyethanol"
		]
	},
	{
		"id": 237,
		"name": "play therapy soft clay pack",
		"brand": "etude house",
		"category": "clay",
		"ingredients": [
			"water",
			"kaolin",
			"titanium dioxide (ci 77891)",
			"butylene glycol",
			"glycerin",
			"caprylic/capric triglyceride",
			"trehalose",
			"silica",
			"bentonite",
			"cetearyl alcohol",
			"glyceryl stearate",
			"polysorbate 60",
			"stearic acid",
			"hydrogenated vegetable oil",
			"palmitic acid",
			"pvp",
			"sorbitan stearate",
			"peg-100 stearate",
			"xanthan gum",
			"lactic acid",
			"ethylhexylglycerin",
			"tetrasodium pyrophosphate",
			"disodium edta",
			"phenoxyethanol",
			"fragrance",
			"chromium oxide greens (ci 77288)"
		]
	}
]
```

## Get all Ingredients

### `GET /ingredients`

### Response

```json
[
	{
		"id": 1,
		"name": "water"
	},
	{
		"id": 2,
		"name": "cocamidopropyl betaine"
	},
	{
		"id": 3,
		"name": "sodium lauroyl methyl isethionate"
	}
]
```

## Get ingredient by name for LIKE values

### `GET /ingredient?q=ingredient_name`

Example

### `GET /ingredient?q=poly`

### Response

```json
[
	{
		"id": 4,
		"name": "polysorbate 20"
	},
	{
		"id": 25,
		"name": "acrylates copolymer"
	},
	{
		"id": 38,
		"name": "acrylates/c10-30 alkyl acrylate crosspolymer"
	},
	{
		"id": 39,
		"name": "sodium polyacrylate"
	}
]
```

## Get all Categories

### `GET /categories/`

### Response

```json
[
	{
		"id": 1,
		"name": "cleanser"
	},
	{
		"id": 3,
		"name": "pad"
	},
	{
		"id": 4,
		"name": "toner"
	},
	{
		"id": 5,
		"name": "liquid"
	}
]
```

## Get Products by Category by LIKE values

### `GET /categories/:category`

Example

### `GET/categories/cream`

### Response

```json
[
	{
		"id": 113,
		"name": "aloe vera oil-free moisture cream",
		"brand": "cosrx",
		"category": "cream",
		"ingredients": [
			"aloe barbadensis leaf water",
			"butylene glycol",
			"glycerin",
			"1 2-hexanediol",
			"betaine",
			"aloe barbadensis leaf juice powder",
			"allantoin",
			"peg-60 hydrogenated castor oil",
			"dimethicone",
			"arginine",
			"carbomer",
			"ethylhexylglycerin",
			"sodium hyaluronate",
			"panthenol",
			"chlorophyllin-copper complex",
			"ethyl hexanediol"
		]
	},
	{
		"id": 140,
		"name": "gokujyun cream",
		"brand": "hada labo (rohto)",
		"category": "cream",
		"ingredients": [
			"water",
			"glycerin",
			"diglycerin",
			"dipropylene glycol",
			"squalane",
			"caprylic/capric triglyceride",
			"behenyl alcohol",
			"carbomer",
			"dimethicone",
			"disodium edta",
			"glyceryl stearate",
			"methylparaben",
			"peg-20 sorbitan isostearate",
			"phytosteryl/octyldocecyl lauroyl glutamate",
			"propylparaben",
			"sodium acetylated hyaluronate",
			"sodium hyaluronate",
			"stearyl alcohol",
			"triethanolamine"
		]
	}
]
```

## Get All Brands

### `GET /brands`

### Response

```json
[
	{
		"id": 1,
		"name": "cosrx"
	},
	{
		"id": 2,
		"name": "drunk elephant"
	},
	{
		"id": 3,
		"name": "supergoop"
	},
	{
		"id": 4,
		"name": "stratia"
	},
	{
		"id": 5,
		"name": "cerave"
	},
	{
		"id": 6,
		"name": "amorepacific"
	},
	{
		"id": 8,
		"name": "deoproce"
	},
	{
		"id": 10,
		"name": "holika holika"
	},
	{
		"id": 14,
		"name": "dr.jart+"
	}
]
```

## Get Products by Brand by LIKE values

### `GET /brands/:brand`

Example

### `GET /brands/cera`

### Response

```json
[
	{
		"id": 58,
		"name": "foaming facial cleanser",
		"brand": "cerave",
		"category": "cleanser",
		"ingredients": [
			"aqua / water / eau",
			"cocamidopropyl hydroxysultaine",
			"glycerin",
			"sodium lauroyl sarcosinate",
			"peg-150 pentaerythrityl tetrastearate",
			"niacinamide",
			"peg-6 caprylic/capric glycerides",
			"sodium methyl cocoyl taurate",
			"propylene glycol",
			"ceramide np",
			"ceramide ap",
			"ceramide eop",
			"carbomer",
			"methylparaben",
			"sodium chloride",
			"sodium lauroyl lactylate",
			"cholesterol",
			"disodium edta",
			"propylparaben",
			"citric acid",
			"tetrasodium edta",
			"hydrolyzed hyaluronic acid",
			"phytosphingosine",
			"xanthan gum"
		]
	}
]
```

## Post a Product

### `POST /products?name=name&brand=brand&category=category&ingredients=ingredients`

Example

### `/product?name=CERAMIDI LIQUID MOISTURIZING TONER&brand=dr.jart+&ingredients=Water, Dipropylene Glycol, Alcohol, Betaine, Propanediol, Glycosyl Trehalose, 1,2-Hexanediol, Erythritol, Pentylene Glycol, Glycerin, Hydrogenated Starch Hydrolysate, Acrylates/C10-30 Alkyl Acrylate Crosspolymer, Triethylhexanoin, Diphenyl Dimethicone, Triethylhexanoin, Panthenol, Butylene Glycol, Hydrogenated Lecithin, Centella Asiatica Extract, Icus Carica (Fig) Fruit Extract, Melia Azadirachta Leaf Extract, Theobroma Cacao (Cocoa) Seed Extract, Amaranthus Caudatus Seed Extract, Ulmus Davidiana Root Extract, Curcuma Longa (Turmeric) Root Extract, Ocimum Sanctum Leaf Extract, Corallina Officinalis Extract, Pyracantha Fortuneana Fruit Extract, Carbomer, Cellulose Gum, Sucrose Distearate, Dipotassium Glycyrrhizate, Ethylhexylglycerin, Methylpropanediol, Disodium Edta, Glyceryl Polymethacrylate, Citrus Aurantium Bergamia (Bergamot) Fruit Oil, C12-14 Pareth-12, Polyglyceryl-10 Myristate, Pelargonium Graveolens Flower Oil, Dextrin, Glyceryl Stearate, Sodium Hyaluronate, Salvia Officinalis (Sage) Oil, Pogostemon Cablin Oil, Cholesterol, Ceramide EOP, Ceramide AP, Ceramide AS, Ceramide NS&category=toner`

Order does not matter when posting. You will get 400 status code if the product is not able to be added.

### Response

```json
{
	"status": "success",
	"message": "Product was added to database."
}
```

### Status Codes

| Code | Response                                                       |
| ---- | -------------------------------------------------------------- |
| 200  | returned products in JSON format or product successfully added |
| 400  | the brand, category, or product does not exist                 |
| 404  | api endpoint doesn't exist                                     |
| 500  | internal server error                                          |
