ENV['ember-google-maps'] = {
  key: process.env.GOOGLE_MAPS_API_KEY, // Using .env files in this example
  language: 'en',
  region: 'GB',
  protocol: 'https',
  version: '3.31',
  libraries: ['geometry', 'places']
  // client: undefined,
  // channel: undefined,
  // baseUrl: '//maps.googleapis.com/maps/api/js'
}