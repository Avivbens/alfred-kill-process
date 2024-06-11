import Fuse from 'fuse.js/min-basic'
import type { ProcessDescriptor } from 'ps-list'
import { SEARCH_FIELDS_CONFIG } from './search.config.js'

export async function searchProcess(
    processes: ProcessDescriptor[],
    searchTerm: string,
    limit: number,
): Promise<ProcessDescriptor[]> {
    const fuse = new Fuse(processes, {
        keys: SEARCH_FIELDS_CONFIG,
        isCaseSensitive: false,
        shouldSort: true,
        threshold: 0.4,
    })

    const res = fuse.search(searchTerm, { limit })

    return res.map((item) => item.item)
}
