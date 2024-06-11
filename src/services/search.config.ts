import type { FuseOptionKey } from 'fuse.js'
import type { ProcessDescriptor } from 'ps-list'
import type { PortSearch } from '@models/ports-search.model.js'

export const SEARCH_PROCESS_FIELDS_CONFIG: FuseOptionKey<ProcessDescriptor>[] = [
    { name: 'name', weight: 2 },
    { name: 'pid', weight: 1 },
    { name: 'cmd', weight: 4 },
]

export const SEARCH_PORT_FIELDS_CONFIG: FuseOptionKey<PortSearch>[] = [
    { name: 'name', weight: 2 },
    { name: 'pid', weight: 1 },
    { name: 'port', weight: 4 },
]
