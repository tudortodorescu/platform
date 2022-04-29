
export function setVideoPosition( videoWrapper, nodeElement ) {
    Object.assign( videoWrapper.style, {
        top: calculateTop( nodeElement ),
        left: calculateLeft( nodeElement ),
    })
}

export function setBackdrop( backdropColor = '' ) {
    const backdrop = utils.dom.qs('.backdrop', app.tree.chart)
    
    if ( !backdrop ) return
    
    if ( backdropColor ) {
        backdrop.style.background = backdropColor
    }

    Object.assign( backdrop.style, {
        width: '0px',
        height: '0px',
    })

    Object.assign( backdrop.style, {
        width: app.tree.chart.scrollWidth+'px',
        height: app.tree.chart.scrollHeight+'px',
    })
}

export function calculateTop( nodeElement ) {
    return Number(nodeElement.style.top.replace('px','')) + nodeElement.getBoundingClientRect().height * 1.08 + 'px'
}

export function calculateLeft( nodeElement ) {
    return Number(nodeElement.style.left.replace('px','')) - config.app.offsetVideo + 'px'
}