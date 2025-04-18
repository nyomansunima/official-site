import { config } from '@shared/libs'
import { MetadataRoute } from 'next'

const BASE_URL = config.app.host

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${BASE_URL}`,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${BASE_URL}/crafts`,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${BASE_URL}/journeys`,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${BASE_URL}/stories`,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${BASE_URL}/resources`,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${BASE_URL}/works`,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${BASE_URL}/support`,
      lastModified: new Date().toISOString(),
    },
  ]
}
