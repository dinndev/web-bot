import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'

function fontAwesomeLibInit() {
    library.add(fab, faPaperPlane)
}



const returnError = (message: string) => {
    throw new Error(message)
}

export { returnError, fontAwesomeLibInit }