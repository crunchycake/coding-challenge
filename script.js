// Branch 'main' będzie zawierał w sobie pliki z treściami zadań (bez rozwiązań)
// 👉 Każdy chętny z brancha 'main' powinien utworzyć swój branch o nazwie 'solutions/imie-nazwisko' albo 'solutions/ksywka' np mój to 'solutions/damian-krychowski' i tam będę wrzucał swoje rozwiązania
// 👉 Każda osoba będzie miała także drugi branch o nazwie 'approved-solutions/imie-nazwisko'
// I teraz: nasze rozwiązania tworzymy na branchu solutions, a gdy skończymy tworzymy pull request do brancha approved-solutions - w ten sposób będziemy mogli dyskutować/komentować/ulepszać ten kod - a gdy będzie gotowy i zatwierdzony może zostać zmergowany

var lidl = {
	nazwa: 'Lidl',
	iloscMiejscParkingowych: 35,
	produkty: [
		{
			nazwa: 'masło',
			cena: 5.99,
		},
		{
			nazwa: 'olej słonecznikowy',
			cena: 7.5,
		},
		{
			nazwa: 'kiełbasa podwawelska',
			cena: 13.99,
		},
		{
			nazwa: 'banany',
			cena: 3.49,
		},
		{
			nazwa: 'orzechy włoskie',
			cena: 11.79,
		},
	],
}

var biedronka = {
	nazwa: 'Biedronka',
	iloscMiejscParkingowych: 12,
	produkty: [
		{
			nazwa: 'wędlina',
			cena: 12.39,
		},
		{
			nazwa: 'masło',
			cena: 4.99,
		},
		{
			nazwa: 'awokado',
			cena: 12.49,
		},
		{
			nazwa: 'olej rzepakowy',
			cena: 10.35,
		},
		{
			nazwa: 'pizza mrożona',
			cena: 7.99,
		},
	],
}

var aldi = {
	nazwa: 'Aldi',
	iloscMiejscParkingowych: 40,
	produkty: [
		{
			nazwa: 'olej rzepakowy',
			cena: 8.25,
		},
		{
			nazwa: 'masło',
			cena: 4.79,
		},
		{
			nazwa: 'seler',
			cena: 4.49,
		},
		{
			nazwa: 'pizza mrożona',
			cena: 7.99,
		},
		{
			nazwa: 'kiełbasa podwawelska',
			cena: 10.99,
		},
	],
}

// ZADANIE 1-2

console.log(lidl.nazwa)
console.log(lidl.nazwa + ' produkty: ' + lidl.produkty.length)

console.log(biedronka.nazwa)
console.log(biedronka.nazwa + ' produkty: ' + biedronka.produkty.length)

console.log(aldi.nazwa)
console.log(aldi.nazwa + ' produkty: ' + aldi.produkty.length)

// ZADANIE 3

if (lidl.iloscMiejscParkingowych >= aldi.iloscMiejscParkingowych) {
	console.log(`Lidl ma więcej miejsc parkingowych`)
} else {
	console.log(`Aldi ma więcej miejsc parkingowych`)
}

// ZADANIE 4

console.log(
	'wszystkich miejsc parkingowych jest',
	lidl.iloscMiejscParkingowych + biedronka.iloscMiejscParkingowych + aldi.iloscMiejscParkingowych
)

// ZADANIE 5

console.log(
	'średnia ilość miejsc parkingowych to',
	(lidl.iloscMiejscParkingowych + biedronka.iloscMiejscParkingowych + aldi.iloscMiejscParkingowych) / 3
)

// zad 1.1: wypisz nazwy wszystkich sklepów

// zad 1.2: wypisz ile produktów jest w każdym sklepie w formacie {nazwa sklepu}: {ilosc produktow}

// zad 1.3: który sklep ma więcej miejsc parkingowych, lidl czy aldi

// zad 1.4: ile jest wszystkich miejsc parkingowych w sumie przy biedrze, aldim i lidlu

// zad 1.5: jaka jest srednia liczba miejsc parkingowych przy biedrze aldim i lidlu
