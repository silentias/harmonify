import { chords } from '@/entities/chords/model/chords';
import { tonalitys } from '@/entities/tonalitys/model/tonalitys';
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue
} from '@/shared/components/ui/select';
import { Button } from '@/shared/components/ui/button';
import { useEffect, useState } from 'react';
import { Trash } from 'lucide-react';
import { toast } from 'sonner';

export const PickUpChrods = () => {
	const [selectedChord, setSelectedChord] = useState<string | undefined | null>();
	const [addedChords, setAddedChords] = useState<string[]>([]);
	const [tonalitysResult, setTonalitysResult] = useState<string[]>([]);

	const handleAddChord = () => {
		if (selectedChord && !addedChords.includes(selectedChord)) {
			setAddedChords([...addedChords, selectedChord]);
			setSelectedChord(null);
		} else {
			toast('Этот аккорд уже добавлен!');
		}
	};

	const handleRemoveChord = (chord: string) => {
		setAddedChords(addedChords.filter(c => c !== chord));
	};

	const handleGenerateChords = (addedChords: string[]) => {
		let result = Object.keys(tonalitys);

		for (const chord of addedChords) {
			result = result.filter(key => tonalitys[key as keyof typeof tonalitys].includes(chord));
		}

		setTonalitysResult(result);
	};

	useEffect(() => {
		if (!addedChords.length) {
			setTonalitysResult([]);
		}
	}, [addedChords])

	return (
		<div className="flex flex-col gap-7 items-center w-full">
			<h1 className="text-2xl text-center font-semibold mb-5">
				Выбери один или более аккордов, нажмите добавить, а затем подобрать аккорды
			</h1>
			<div className="flex justify-center gap-3 w-full">
				<Select value={selectedChord ?? ''} onValueChange={setSelectedChord}>
					<SelectTrigger className="w-[180px]">
						<SelectValue placeholder="Выбрать аккорд" />
					</SelectTrigger>
					<SelectContent>
						<SelectGroup>
							<SelectLabel>Аккорды</SelectLabel>
							{chords.map(chord => (
								<SelectItem key={chord} value={chord}>
									{chord}
								</SelectItem>
							))}
						</SelectGroup>
					</SelectContent>
				</Select>
				<Button disabled={!selectedChord} onClick={handleAddChord}>
					Добавить
				</Button>
			</div>
			{addedChords.length ? (
				<>
					<div>
						<p className="mb-3 text-center">Добавленные аккорды:</p>
						<div className="flex justify-center flew-wrap gap-3">
							{addedChords.map(chord => (
								<div key={chord} className="flex items-center w-max gap-1 rounded-xl bg-background border-foreground border-2 overflow-hidden">
									<span className="px-5 py-2 text-lg">{chord}</span>
									<button
										onClick={() => handleRemoveChord(chord)}
										className="bg-red-500 h-full text-white font-bold p-2"
									>
										<Trash />
									</button>
								</div>
							))}
						</div>
					</div>
					<Button className="" onClick={() => handleGenerateChords(addedChords)}>
						Подобрать аккорды
					</Button>
				</>
			) : null}
			{tonalitysResult.length && addedChords.length ? (
				<div>
					<p className="text-lg font-semibold mb-2 text-center">Созвучные аккорды:</p>
					{tonalitysResult.map(tonalityName => (
						<div key={tonalityName}>
							<span className="font-semibold">тональность {tonalityName}</span> :{' '}
							{tonalitys[tonalityName as keyof typeof tonalitys].map(chord => (
								<span className="mr-2" key={chord}>
									{chord}
								</span>
							))}
						</div>
					))}
				</div>
			) : null}
		</div>
	);
};
