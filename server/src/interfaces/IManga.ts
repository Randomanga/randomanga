export interface IManga {
  al_id: Number,
  title: String,
  description: String,
  demographic: [],
  genre: [],
  tags: [],
  related: IManga[]
  banner: String,
  coverImage: {
    extraLarge: String,
    large: String,
    medium: String
  },
  likes_count: Number
}

export interface IMangaSearchDTO{
  al_id: any,
}