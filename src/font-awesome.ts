// Add font awesome icons here

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'

function fontAwesomeInit() {
    library.add(fab, faPaperPlane)
}

export {
    fontAwesomeInit
}