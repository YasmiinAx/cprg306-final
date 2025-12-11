const TMDB_KEY = "af1b76109560756a2450b61eff16e738";
const OMDB_KEY = "1ea1cb4c"; 

// TMDB = ACTION ----------------------------------------------------------------
async function fetchAction() {
  const url = `https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_KEY}&with_genres=28`;

  const res = await fetch(url, { cache: "no-store" });
  if (!res.ok) return [];

  const data = await res.json();

  return data.results.map((m) => ({
    id: `a-${m.id}`,
    title: m.title,
    description: m.overview || "No description available",
    category: "Action",
    image: `https://image.tmdb.org/t/p/w500${m.poster_path}`,
  }));
}

// OMDb = HORROR ---------------------------------------------------------------
async function fetchHorror() {
  const searchUrl = `https://www.omdbapi.com/?apikey=${OMDB_KEY}&s=horror&type=movie&page=1`;
  const searchRes = await fetch(searchUrl, { cache: "no-store" });
  if (!searchRes.ok) return [];

  const searchData = await searchRes.json();
  if (!searchData.Search) return [];

  const movies = await Promise.all(
    searchData.Search.map(async (m) => {
      const detailRes = await fetch(`https://www.omdbapi.com/?apikey=${OMDB_KEY}&i=${m.imdbID}`);
      const detailData = await detailRes.json();

      return {
        id: `h-${m.imdbID}`,
        title: m.Title,
        description: detailData.Plot && detailData.Plot !== "N/A" ? detailData.Plot : "No description available",
        category: "Horror",
        image: m.Poster && m.Poster !== "N/A" ? m.Poster : "/placeholder.png",
      };
    })
  );

  return movies;
}

// OMDb = GENERAL MOVIES → Comedy + Romance ----------------------------------
async function fetchGeneral() {
  const searchUrl = `https://www.omdbapi.com/?apikey=${OMDB_KEY}&s=movie&page=1`;
  const searchRes = await fetch(searchUrl, { cache: "no-store" });
  if (!searchRes.ok) return [];

  const searchData = await searchRes.json();
  if (!searchData.Search) return [];

  const movies = await Promise.all(
    searchData.Search.map(async (m, index) => {
      const detailRes = await fetch(`https://www.omdbapi.com/?apikey=${OMDB_KEY}&i=${m.imdbID}`);
      const detailData = await detailRes.json();

      return {
        id: `g-${m.imdbID}`,
        title: m.Title,
        description: detailData.Plot && detailData.Plot !== "N/A" ? detailData.Plot : "No description available",
        category: index % 2 === 0 ? "Comedy" : "Romance",
        image: m.Poster && m.Poster !== "N/A" ? m.Poster : "/placeholder.png",
      };
    })
  );

  return movies;
}

// MAIN FUNCTION ---------------------------------------------------------------
export async function getMovies() {
  const [action, horror, general] = await Promise.all([
    fetchAction(),
    fetchHorror(),
    fetchGeneral(),
  ]);

  return [...action, ...horror, ...general];
}
