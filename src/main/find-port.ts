import type { AlfredScriptFilter } from 'fast-alfred'
import { FastAlfred } from 'fast-alfred'
import { getPorts } from 'occupied-ports'
import { Variables } from '@common/variables.js'
import type { CallbackPayload } from '@models/callback-payload.model.js'
import { searchPort } from '@services/search.service.js'

;(async () => {
    const alfredClient = new FastAlfred()

    const sliceAmount: number = alfredClient.env.getEnv(Variables.SLICE_AMOUNT, { defaultValue: 10, parser: Number })

    const fuzzyThreshold: number = alfredClient.env.getEnv(Variables.FUZZY_THRESHOLD, {
        defaultValue: 0.6,
        parser: (input) => Number(input) / 10,
    })

    try {
        const ports = await getPorts()

        const filteredPorts = await searchPort(ports, alfredClient.input, sliceAmount, fuzzyThreshold)

        const items: AlfredScriptFilter['items'] = filteredPorts.map(({ name, pid, port }) => {
            const subtitle = `Port: ${port} | PID: ${pid}`

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
