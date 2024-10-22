import { useState } from "react";
interface Pokemon {
	name: string;
	imgSrc?: string;
}

interface NavBarProps {
	pokemonIndex: number;
	setPokemonIndex: (index: number) => void;
	pokemonList: Pokemon[];
}

function Buttons({ pokemonIndex }: NavBarProps) {
	const [pokemonIndex, setPokemonIndex] = useState(0);
	const handleClickNext = () => {
		setPokemonIndex(pokemonIndex + 1);
	};
	const handleClickPrevious = () => {
		setPokemonIndex(pokemonIndex - 1);
	};
	pokemonIndex > 0 ? (
		<button type="button" onClick={handleClickPrevious}>
			Précédent
		</button>
	) : (
		""
	);

	pokemonIndex < pokemonList.length - 1 ? (
		<button type="button" onClick={handleClickNext}>
			Suivant
		</button>
	) : (
		""
	);
}

export default Buttons;
