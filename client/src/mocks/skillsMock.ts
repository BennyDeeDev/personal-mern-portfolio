import html5 from "../images/html5.svg";
import css3 from "../images/css3.svg";
import javascript from "../images/javascript.svg";
import react from "../images/react.svg";
import vue from "../images/vue.svg";
import linux from "../images/linux.svg";
import node from "../images/node.svg";
import mongodb from "../images/mongodb.svg";
import typescript from "../images/typescript.svg";
import git from "../images/git.svg";
import vscode from "../images/vscode.svg";
/* import scrum from "../images/scrum.svg"; */

export default {
	frontend: [
		{ id: 1, svg: html5, text: "HTML", progress: "90%" },
		{ id: 2, svg: css3, text: "CSS", progress: "80%" },
		{ id: 3, svg: javascript, text: "JavaScript", progress: "85%" },
		{ id: 4, svg: react, text: "React", progress: "80%" },
		{ id: 5, svg: vue, text: "Vue", progress: "90%" },
	],
	backend: [
		{ id: 1, svg: linux, text: "Linux", progress: "60%" },
		{ id: 2, svg: node, text: "Node.js", progress: "20%" },
		{ id: 3, svg: mongodb, text: "Mongo DB", progress: "5%" },
	],
	general: [
		{ id: 6, svg: typescript, text: "TypeScript", progress: "60%" },
		{ id: 1, svg: git, text: "Git", progress: "60%" },
		{ id: 2, svg: vscode, text: "VSCode", progress: "80%" },
		/* { id: 3, svg: scrum, text: "Agiles Arbeiten", progress: "20%" } */
	],
};
