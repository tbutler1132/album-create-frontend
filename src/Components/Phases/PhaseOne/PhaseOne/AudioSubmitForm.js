import React from 'react'
import { DirectUpload } from 'activestorage';
import {withRouter} from 'react-router-dom'

class AudioSubmitForm extends React.Component{

    state = {

        beatBpm: "",
        beatKeySig: "",
        beat: {},

        newBeatObj: {},

        clicked: false,

        beatsArray: this.props.beatsArray

    }

    submitFormFourClickHandler = () => {
        this.state.clicked === false ? this.setState({clicked: true}) : this.setState({clicked: false})
    }


    changeHandler = (e) => {
        if (e.target.name === 'beat'){
            this.setState({ [e.target.name]: e.target.files[0] })  
        } else {
            this.setState({ [e.target.name]: e.target.value })
        }
    }

    phaseTwoSubmitHandler = (e) => {
        e.preventDefault()
        const newBeat = {
            bpm: this.state.beatBpm,
            key_sig: this.state.beatKeySig,
            selected: false,
            user_id: 202,
            song_id: this.props.songObj.id
        }
        const options = {
            method: "POST",
            headers: {
              "content-type": "application/json",
              "accept": "application/json"
            },
            body: JSON.stringify( newBeat )
          }
        fetch("http://localhost:3000/beats", options)
        .then(r => r.json())
        .then(beatObj => {
            this.uploadFile(this.state.beat, beatObj)
            this.props.history.push(`/tracks/${this.props.songObj.id}/2`)

        })

    }

    uploadFile = (file, beat) => {
        console.log(beat)
        const upload = new DirectUpload(file, 'http://localhost:3000/rails/active_storage/direct_uploads')
        upload.create((error, blob) => {
            if (error) {
                console.log(error)
            } else {

                fetch(`http://localhost:3000/beats/${beat.id}`, {
                method: 'PUT',
                headers: {
                    "content-type": "application/json",
                    "accept": "application/json"
                  },
                body: JSON.stringify({audio_data: blob.signed_id})
                })
                .then(r => r.json())
                .then(data => console.log(data))

            
            }
        
        })
    }   

    render(){
        return(
            <>
                <h5 onClick={this.submitFormFourClickHandler}>Submit a Beat</h5>
              
                <form onSubmit={this.phaseTwoSubmitHandler}>
                    <input type="text" name="beatBpm" value={this.state.beatBpm} placeholder="BPM" onChange={this.changeHandler} />
                    <input type="text" name="beatKeySig" value={this.state.beatKeySig} placeholder="Key" onChange={this.changeHandler} />
                    <input type="file" name="beat" onChange={this.changeHandler} /><br></br>
                    {/* <input type="text" name="beatUrl" value={this.state.beatUrl} onChange={this.changeHandler} /> */}
                    <button>Upload beat</button>
                </form>
                           
                {/* <PollTwo pollId={this.props.currentPollId} songObj={this.props.songObj}/> */}
                
            </>
        )
    }
}

export default withRouter(AudioSubmitForm)

