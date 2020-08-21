export default function getMovies(): Movie[] {
    return [
        { id: '3headed', title: '3 Headed Shark Attack' },
        { id: 'crocosaurus', title: 'Megashark vs Crocosaurus' },
        { id: 'exorcist', title: 'Shark Exorcist' },
        { id: 'gatoroid', title: 'Megapython vs Gatoroid' },
        { id: 'megalodon', title: 'Shark Attack 3: Megalodon' },
        { id: 'sharktopus', title: 'Sharktopus' }
    ];
}

interface Movie {
    id: string;
    title: string;
}