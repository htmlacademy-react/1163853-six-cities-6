const adaptOneHotelToClient = (hotel) => ({
  id: String(hotel.id),
  cityName: hotel.city.name,
  cityLatitude: hotel.city.location.latitude,
  cityLongitude: hotel.city.location.longitude,
  cityZoom: hotel.city.location.zoom,
  title: hotel.title,
  images: hotel.images,
  preview: hotel.preview_image,
  isPremium: hotel.is_premium,
  isFavorite: hotel.is_favorite,
  bedrooms: hotel.bedrooms,
  adults: hotel.max_adults,
  price: hotel.price,
  rating: hotel.rating,
  description: hotel.description,
  type: hotel.apartment,
  hostName: hotel.host.name,
  hostAvatar: hotel.host.avatar_url,
  hostId: String(hotel.host.id),
  services: hotel.goods,
  hostIsPro: hotel.host.is_pro,
  latitude: hotel.location.latitude,
  longitude: hotel.location.longitude,
  zoom: hotel.location.zoom,
});

export const adaptAllHotelsToClient = (data) => data.map(adaptOneHotelToClient);
