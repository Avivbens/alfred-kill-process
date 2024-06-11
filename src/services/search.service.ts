import Fuse from 'fuse.js/min-basic'
import type { ProcessDescriptor } from 'ps-list'
import type { PortSearch } from '@models/ports-search.model.js'
import { SEARCH_PORT_FIELDS_CONFIG, SEARCH_PROCESS_FIELDS_CONFIG } from './search.config.js'

export async function searchProcess(
    processes: ProcessDescriptor[],
    searchTerm: string,
    limit: number,
): Promise<ProcessDescriptor[]> {
    const fuse = new Fuse(processes, {
        keys: SEARCH_PROCESS_FIELDS_CONFIG,
        isCaseSensitive: false,
        shouldSort: true,
        threshold: 0.4,
    })

    const res = fuse.search(searchTerm, { limit })

    return res.map((item) => item.item)
}

export async function searchPort(processes: PortSearch[], searchTerm: string, limit: number) {
    const fuse = new Fuse(processes, {
        keys: SEARCH_PORT_FIELDS_CONFIG,
        isCaseSensitive: false,
        shouldSort: true,
        threshold: 0.6,
    })

    const res = fuse.search(searchTerm, { limit })

    return res.map((item) => item.item)
}
