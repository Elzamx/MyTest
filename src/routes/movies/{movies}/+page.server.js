import db from '$lib/db.js';

export async function load( { params } ) {
return {
movies: db.getMovies( params.movies )
};
}