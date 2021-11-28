import {
  getCommerceProvider,
  useCommerce as useCoreCommerce
} from '@commerce'

import {
  localProvider,
} from './provider'


export const CommerceProvider = getCommerceProvider(localProvider)
