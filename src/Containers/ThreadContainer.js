import react from 'react'
import {connect} from 'react-redux'

class ThreadContainer extends React.Component{

    componentDidMount = () => {
        this.props.fetchThreads()
    }

    redner(){
        return(
            <p>ass</p>
        )
    }
}

export default ThreadContainer