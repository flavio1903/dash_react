import mediaqueries from '../../../../config/MediaQueries'

export default {
    container: {
        backgroundColor: '#FFF',
        boxSizing: 'border-box',
        height: '100vh',
        left: '0px',
        position: 'fixed',
        top: '0px',
        zIndex: '1300',

        [mediaqueries.small_and_down]: {
            transform: 'translate(-256px, 0px)',
            transition: 'transform 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms',
            width: '256px'
        },
        [mediaqueries.medium_and_up]: {
            transition: 'width 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms',
            width: '60px'
        },

        opened: {
            [mediaqueries.small_and_down]: {
                transform: 'translate(0px, 0px)',
            },
            [mediaqueries.medium_and_up]: {
                width: '256px'
            }
        }
    },
    overlay: {
        backgroundColor: 'rgba(0,0,0,.6)',
        height: '100vh',
        left: '-100vw',
        opacity: '0',
        position: 'fixed',
        top: '0',
        width: '100vw',
        zIndex: '1299',

        [mediaqueries.medium_and_up]: {
            display: 'none'
        },

        opened: {
            left: '0',
            opacity: '1',
            transition: 'opacity 0s .1s'
        }
    }
}

