import type { FuseOptionKey } from 'fuse.js'
import type { ProcessDescriptor } from 'ps-list'

export const SEARCH_FIELDS_CONFIG: FuseOptionKey<ProcessDescriptor>[] = [
    { name: 'name', weight: 2 },
    { name: 'pid', weight: 1 },
    { name: 'cmd', weight: 4 },
]
