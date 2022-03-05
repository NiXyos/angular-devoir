export class Film {
    adult!: boolean;
    genre_ids!: string;
    id!: number;
    original_language!: string;
    original_title!: string;
    overview!: string;
    popularity!: string;
    release_date!: Date;
    title!: string;
    video!: boolean;
    vote_average!: number;
    vote_count!: number;
    poster_path!: string;
    backdrop_path!: string;
    genres!:[{
      id: number,
      name:string
    }]
}