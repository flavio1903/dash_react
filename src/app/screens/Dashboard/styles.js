import mediaqueries from '../../config/MediaQueries'

const styles = {
    content: {
        boxSizing: 'border-box',
        float: 'right',
        marginTop: '15px',
        marginBottom: '15px',
        transition: 'width 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms',
        width: '100%'
    },
    pushed: {
        [mediaqueries.medium_and_up]: {
            width: 'calc(100% - 256px)'
        }
    }
}

export default styles;