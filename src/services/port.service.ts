import { execPromise } from '@common/utils.js'
import type { PortSearch } from '@models/ports-search.model.js'

export async function getPorts(): Promise<PortSearch[]> {
    try {
        const command = 'lsof -i -P -n | grep LISTEN'
        const { stdout } = await execPromise(command)

        const rawProcesses = stdout.split('\n').filter(Boolean)
        const processes = rawProcesses.map((rawProcess) => {
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const [name, pid, _, __, ___, ____, _____, ______, some] = rawProcess.split(/\s+/)
            const port = some.split(':').at(-1)

            return {
                port: Number(port),
                name,
                pid: Number(pid),
            }
        })

        return processes
    } catch (error) {
        throw new Error(`Error finding ports, ${error.message}`)
    }
}
