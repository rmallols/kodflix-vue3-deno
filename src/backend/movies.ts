export function getMovies(): Movie[] {
    return [
        { id: '3headed', title: '3 Headed Shark Attack' },
        { id: 'crocosaurus', title: 'Megashark vs Crocosaurus' },
        { id: 'exorcist', title: 'Shark Exorcist' },
        { id: 'gatoroid', title: 'Megapython vs Gatoroid' },
        { id: 'megalodon', title: 'Shark Attack 3: Megalodon' },
        { id: 'sharktopus', title: 'Sharktopus' }
    ];
}

export function getMovie(movieId: string = ''): Movie | undefined {
    return getMovies().find(({ id }) => id === movieId);
}

interface Movie {
    id: string;
    title: string;
}