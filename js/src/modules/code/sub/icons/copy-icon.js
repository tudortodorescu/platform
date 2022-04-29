
export default function( codeWrapper ) {
    const copyIcon = utils.html.create_element( 'i', '', codeWrapper, {
        'class': [ 'fa-solid', 'fa-copy', 'code-icon', 'copy-icon', 'tooltip' ],
    })

    const tooltipText = utils.html.create_element( 'span', 'Codul a fost <br>copiat in clipboard!', copyIcon, {
        'class': [ 'tooltiptext', 'tooltip-top' ],
    })

    copyIcon.addEventListener( 'mouseover', e => {
        tooltipText.classList.add('hide')
    })

    copyIcon.addEventListener('click', e => {
        const pre = utils.dom.qs( 'pre', codeWrapper )
        utils.dom.select_text( pre )
        // setTimeout(_ => {
            document.execCommand('copy')
            tooltipText.classList.remove('hide')
        // }, 10)
    })
}