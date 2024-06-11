import type { AlfredScriptFilter } from 'fast-alfred'
import { FastAlfred } from 'fast-alfred'
import psList from 'ps-list'
import { Variables } from '@common/variables.js'
import type { CallbackPayload } from '@models/callback-payload.model.js'
import { searchProcess } from '@services/search.service.js'

;(async () => {
    const alfredClient = new FastAlfred()

    const sliceAmount: number = alfredClient.env.getEnv(Variables.SLICE_AMOUNT, { defaultValue: 10, parser: Number })

    try {
        const processes = await psList()
        alfredClient.log(JSON.stringify(processes))

        const filteredProcesses = await searchProcess(processes, alfredClient.input, sliceAmount)

        const items: AlfredScriptFilter['items'] = filteredProcesses.map(({ name, pid, cmd }) => {
            const subtitle = `PID: ${pid} | CMD: ${cmd}`

            return {
                title: name,
                subtitle,
                arg: String(pid) satisfies CallbackPayload,
                uid: subtitle,
            }
        })

        const sliced = items.slice(0, sliceAmount)

        alfredClient.output({ items: sliced, rerun: 1 })
    } catch (error) {
        alfredClient.error(error)
    }
})()
