
///////// APP ///////////
window.app = {
    chart: null,
    project: null,
    tree: {
        chartSelector: '#chart',
        zoomLevel: 75
    },
    events: {
        disableEvents: false
    }
}

/////// UTILS /////////
import async from '/js/src/utils/async.utils.js'
import dom from '/js/src/utils/dom.utils.js'
import object from '/js/src/utils/object.utils.js'
import html from '/js/src/utils/html.utils.js'
import events from '/js/src/utils/events.utils.js'
import linkode from '/js/src/utils/linkode.utils.js'
import mobile from '/js/src/utils/mobile.utils.js'
import behaviour from '/js/src/utils/behaviour.utils.js'
import positioning from '/js/src/utils/positioning.utils.js'
window.utils = {
    async,
    dom,
    object,
    html,
    events,
    linkode,
    mobile,
    behaviour,
    positioning,
}

/////// CONSTANTS ////////
import colors from '/js/src/constants/colors.js'
import bgColors from '/js/src/constants/bgColors.js'
window.constants = {
    colors,
    bgColors,
}

/////// PROJECTS /////////
import calculator from '/js/src/projects/calculator.js'
import autentificare from '/js/src/projects/autentificare.js'
window.projects = {
    calculator,
    autentificare,
}

/////// MODULES /////////
import general from '/js/src/modules/general.js'
import webcomponent from '/js/src/modules/webcomponent.js'
import tree from '/js/src/modules/tree.js'
import video from '/js/src/modules/video.js'
import code from '/js/src/modules/code.js'
import backdrop from '/js/src/modules/backdrop.js'

window.modules = {
    general,
    webcomponent,
    tree,
    video,
    code,
    backdrop,
}
