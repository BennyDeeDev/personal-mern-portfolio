import vue from "../images/vue.svg";
import html5 from "../images/html5.svg";
import css3 from "../images/css3.svg";

import react from "../images/react.svg";
import redux from "../images/redux.svg";
import typescript from "../images/typescript.svg";
import tailwindcss from "../images/tailwindcss.svg";
import { uuid } from "uuidv4";

export default {
	work: [
		{
			id: uuid(),
			title: "React Native Entwickler",
			timespan: "2020 September - heute",
			location: "Projektfabrik in Weilheim",
			text: "Vollständiges Dokumenten Modul und Offline-Fähigkeit eines Bautagebuchs in React Native",
			stack: [
				{ title: "React Native", svg: react },
				{ title: "Redux (Saga)", svg: redux },
				{ title: "TypeScript", svg: typescript },
			],
		},
		{
			id: uuid(),
			title: "Praktikum in der Frontend Entwicklung",
			timespan: "2020 Mai - 2020 August",
			location: "WebSix GmbH in Backnang",
			text:
				"Pflegen von Landing Pages mit HTML, Stylen von Landing Pages mit Tailwind CSS und/oder Sass, Programmierung eines Beleg-Prüfers in Vue.js",
			stack: [
				{ title: "Vue.js", svg: vue },
				{ title: "HTML5", svg: html5 },
				{ title: "CSS3", svg: css3 },
				{ title: "Tailwind CSS", svg: tailwindcss },
			],
		},
		{
			id: uuid(),
			title: "Duales Studium zweite Praxisphase",
			timespan: "2020 März - 2020 Mai",
			location: "Netze BW (#Kunde: agiles Entwickler Team) in Stuttgart",
			text:
				"Programmieren von React-Komponenten im Kundenportal der Netze BW, mit Hilfe von Azure, TypeScript und Redux",
			stack: [
				{ title: "React", svg: react },
				{ title: "Redux", svg: redux },
				{ title: "TypeScript", svg: typescript },
			],
		},
		{
			id: uuid(),
			title: "Duales Studium erste Praxisphase",
			timespan: "2019 Oktober  - 2020 November",
			location: "NetCom BW in Stuttgart",
			text: "Programmieren eines Python Skriptes welches Duplikate in einer Excel Tabelle findet",
		},
		{
			id: uuid(),
			title: "Aushilfsjob",
			timespan: "2018 Juni - 2019 August",
			location: "Intaste Store Stuttgart",
			text: "E-Zigaretten Laden",
		},
		{
			id: uuid(),
			title: "Aushilfsjob",
			timespan: "2016 Juni - 2016 August",
			location: "Famila in Westerland",
			text: "Getränkemarkt",
		},
	],
	education: [
		{
			id: uuid(),
			timespan: "2019 August - 2020 Mai",
			location: "DHBW Stuttgart",
			text:
				"Abschluss: abgebrochen (Duales Studium in Informatik- Informationstechnik bei der Netze BW in Stuttgart)",
		},
		{
			id: uuid(),
			timespan: "2017 September - 2019 Juli",
			location: "DAA Stuttgart",
			text: "Abschluss: technischer Assistent mit Fachhochschulreife in Informations- und Kommunikationstechnik",
		},
		{
			id: uuid(),
			timespan: "2016 August - 2017 September",
			location: "Hellweg Berufskolleg Unna",
			text: "Abschluss: abgebrochen (informationstechnischer Assistent)",
		},
		{
			id: uuid(),
			timespan: "2008 - 2015",
			location: "Realschule Westerland",
			text: "Abschluss: mittlere Reife",
		},
	],
};
