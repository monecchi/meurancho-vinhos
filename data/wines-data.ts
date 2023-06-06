// import { v4 } from 'uuid'
//
// Mock Data
//

export interface Product {
	id: string
	slug: string
	title: string
	description: string
	type: string
	blend: string
	wineStyle: string
	alcohol: string
	ageing: string
	country: string
	region: string
	alergics: string
	price: number
	url: string
	img_url: string
	hasImage: boolean
	bgColor: string
	color: string
	hasButton: boolean
	new: boolean
	search_keys: string
}

export const products: Product[] = [
	{
		id: '2ffc09ac-d4e1-4b4e-9687-5466e244bd76',
		slug: 'nicasia-vineyards-malbec',
		title: 'Nicasia Vineyards Malbec',
		description:
			'Intenso com traços de Malbec e fragrâncias de especiarias Cabernet Sauvignon com delicado sabor de carvalho e baunilha.',
		type: 'Tinto',
		blend: 'Seco',
		wineStyle: 'Petit Verdot, Cabernet Sauvignon',
		alcohol: '14%',
		ageing: '18 meses em carvalho Francês',
		country: 'Argentino',
		region: 'Vale do Uco',
		alergics: 'Contém sulfitos',
		price: 196.0,
		url: '',
		img_url: 'nicasia-catena-zapata.png',
		hasImage: true,
		bgColor: '#0033FF',
		color: '#E3EDFF',
		hasButton: true,
		new: false,
		search_keys: 'vinho, tinto, seco, argentino',
	},
	{
		id: '4330fcef-9833-49c7-9b87-9f0c528a473f',
		slug: 'dv-catena',
		title: 'D.V. Catena',
		description:
			'DV Catena Malbec é uma mistura de uvas Malbec de dois vinhedos diferentes. Confere aos paladares sabores de ameixa madura, sedosidade e bom volume, notas picantes de pimenta preta e cravo. O resultado é um vinho complexo de sabores intensos que perduram em um final longo e aveludado.',
		type: 'Tinto',
		blend: 'Seco',
		wineStyle: 'Cabernet Sauvignon',
		alcohol: '14%',
		ageing: '18 meses em carvalho Francês',
		country: 'Argentino',
		region: 'Mendoza / San Carlos',
		alergics: 'Contém sulfitos',
		price: 230.0,
		url: '',
		hasImage: true,
		img_url: 'vinho-tinto-dv-catena-malbec.png',
		bgColor: '#0033FF',
		color: '#E3EDFF',
		hasButton: true,
		new: false,
		search_keys: 'vinho, tinto, seco, argentino',
	},
	{
		id: '124ad60d-77ed-4f80-a094-43505e1e029a',
		slug: 'fond-de-cave',
		title: 'Fond de Cave',
		description:
			'Fond de Cave é uma reserva com aroma de Frutas negras maduras, de paladar rico e persistente, tem corpo médio e harmoniza bem com carnes vermelhas, queijos duros, e massas.',
		type: 'Tinto',
		blend: 'Seco',
		wineStyle: ' Malbec Argentino',
		alcohol: '14%',
		ageing: '15 meses em barricas de carvalho Francês (70%) e Americano (30%)',
		country: 'Argentino',
		region: 'Luján de Cuyo y maipú / Mendoza',
		alergics: 'Contém sulfitos',
		price: 199,
		url: '',
		hasImage: true,
		img_url: 'fond-de-cave.png',
		bgColor: '#0033FF',
		color: '#E3EDFF',
		hasButton: true,
		new: false,
		search_keys: 'vinho, tinto, seco, argentino',
	},
	{
		id: 'c34f9134-0d13-4784-a179-5d388c22f29f',
		slug: 'luigi-bosca-malbec',
		title: 'Luigi Bosca Malbec "De Sangre"',
		description:
			'Um Malbec com aromas de frutas pretas e notas de especiarias. Elaborado a partir de uvas de vinhedos com idade média de 70 anos, é compacto, concentrado, e tem muito boa fluidez no paladar. Taninos finos com textura agradável, ótima acidez, firmeza e equilíbrio. Final longo e complexo. Amadurecimento de 12 meses em barris de carvalho e potencial de guarda de 10 anos.',
		type: 'Tinto',
		blend: 'Seco',
		wineStyle: 'Malbec',
		alcohol: '14,6%',
		ageing: '12 meses em carvalho e potencial de guarda de 10 anos',
		country: 'Argentino',
		region: 'Mendoza-Lujan de Cuyo',
		alergics: 'Contém sulfitos',
		price: 249,
		url: '',
		hasImage: true,
		img_url: 'luigi-bosca-de-sangre.png',
		bgColor: '#0033FF',
		color: '#E3EDFF',
		hasButton: true,
		new: false,
		search_keys: 'vinho, tinto, seco, argentino',
	},
	{
		id: 'bce971c9-9341-40a1-956c-22b976b8f795',
		slug: 'trapiche-medalla-malbec',
		title: 'Trapiche Medalla Malbec',
		description:
			'Trapiche Medalla é 100% Malbec, encorpado e com aroma de Frutas negras maduras, notas totastadas, côco e baunilha. Harmoniza bem com carnes vermelhas assados e pratos com molhos fortes.',
		type: 'Tinto',
		blend: 'Seco',
		wineStyle: 'Malbec',
		region: 'Argentina / Luján de Cuyo y maipú / Mendoza',
		alcohol: '14%',
		ageing: '18 meses em barricas de carvalho Francês de primeiro uso.',
		country: 'Argentino',
		alergics: 'Contém sulfitos',
		price: 220,
		url: '',
		hasImage: true,
		img_url: 'trapiche-medalla-malbec-vinho.png',
		bgColor: '#0033FF',
		color: '#E3EDFF',
		hasButton: true,
		new: false,
		search_keys: 'vinho, tinto, seco, argentino',
	},
	{
		id: 'c4b1c85e-dc31-494a-a6c0-e4b2373d16bf',
		slug: 'angelica-zapata',
		title: 'Angélica Zapata Malbec',
		description:
			'Angélica Zapata é uma mistura de uvas Malbec provenientes de diferentes vinhas. O resultado é um vinho de grande concentração e elegância. O Angélica Vineyard oferece sabores maduros de ameixa com uma sensação suave e suave.',
		type: 'Tinto',
		blend: 'Seco',
		wineStyle: 'Malbec',
		alcohol: '14%',
		ageing: '18 meses em carvalho Francês',
		country: 'Argentino',
		region: 'Mendoza / San Carlos',
		alergics: 'Contém sulfitos',
		price: 297,
		url: '',
		hasImage: true,
		img_url: 'angelica-zapata-malbec.png',
		bgColor: '#0033FF',
		color: '#E3EDFF',
		hasButton: true,
		new: false,
		search_keys: 'vinho, tinto, seco, argentino',
	},
	{
		id: '04ddbd35-3056-4b7a-a343-501c2d3b5c35',
		slug: 'testa-matta',
		title: 'Testa Matta Tinto Malbec',
		description:
			'Testa Matta Tinto Malbec é uma mistura de uvas Malbec provenientes de diferentes vinhas. O resultado é um vinho de grande concentração e elegância. O Angélica Vineyard oferece sabores maduros de ameixa com uma sensação suave e suave.',
		type: 'Tinto',
		blend: 'Seco',
		wineStyle: 'Malbec',
		alcohol: '14%',
		ageing: '18 meses em carvalho Francês',
		country: 'Argentino',
		region: 'Mendoza / San Carlos',
		alergics: 'Contém sulfitos',
		price: 189,
		url: '',
		hasImage: true,
		img_url: 'testa-matta-malbec.png',
		bgColor: '#0033FF',
		color: '#E3EDFF',
		hasButton: true,
		new: false,
		search_keys: 'vinho, tinto, seco, argentino',
	},
	{
		id: '8a6e0804-2bd0-4672-b79d-d97027f9071a',
		slug: 'famiglia-biachi',
		title: 'Famiglia Biachi Tinto Malbec',
		description:
			'Gran Famiglia Bianchi, um rótulo blend com malbec, petit verdot, merlot, cabernet sauvignon e tannat. O resultando é um vinho de cor rubi intenso, com aromas de frutas pretas em compota, especiarias como anis estrelado e canela, além de pimenta do reino.',
		type: 'Tinto',
		blend: 'Seco',
		wineStyle: 'Malbec',
		alcohol: '14%',
		ageing: '18 meses em carvalho Francês',
		country: 'Argentino',
		region: 'Mendoza / Valle de Uco',
		alergics: 'Contém sulfitos',
		price: 220,
		url: '',
		hasImage: true,
		img_url: 'famiglia-bianchi_vino_malbec_tinto_x600.png',
		bgColor: '#0033FF',
		color: '#E3EDFF',
		hasButton: true,
		new: false,
		search_keys: 'vinho, tinto, seco, argentino, famiglia, bianchi',
	},
]
