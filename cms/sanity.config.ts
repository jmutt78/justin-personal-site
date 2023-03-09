import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

const config = defineConfig({
  name: 'default',
  title: 'Personal Blog',
  projectId: '5jtu1uen',
  dataset: 'production',
  plugins: [deskTool(), visionTool()],
  graphql: {
    overlayDrafts: true,
  },
  schema: {
    types: schemaTypes,
  },
})

export default config
