window.App = () => {
    return {
        paths: `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 -960 960 960' fill='currentColor'>
                    <path x-show='!open' d='M480-345 240-585l56-56 184 183 184-183 56 56-240 240Z'/>
                    <path x-show='open' d='m296-345-56-56 240-240 240 240-56 56-184-183-184 183Z'/>
                </svg>`,
        li(e, d) {
            const ee = e.replace(/(\[(.*?)\])/g,"<b>$2</b>")

            return `<li x-data="{open: false}">
                <div @click="open = !open">
                    <div>${ee}</div> <a x-html="paths"></a>
                </div>
                <div x-show="open">${d}</div>
            </li>`
        },
        veta : 'të tri vetat',
        gjinia: 'të dy gjinitë',
        rasa: 'të gjitha rasat',
        prona : 'prona në cilindo numër',
        pronari : 'pronari në cilindo numër',
    }
}