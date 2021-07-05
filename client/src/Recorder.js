import React, { Component } from 'react';
import AudioReactRecorder, { RecordState } from 'audio-react-recorder';

export default class Recorder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recordState: null,
      audioData: null,
    }
  }

  /**
   * start the recording
   */
  start = () => {
    this.setState({ recordState: RecordState.START });
  }

  /**
   * pause the recording
   */
  pause = () => {
    this.setState({ recordState: RecordState.PAUSE });
  }

  /**
   * stop the recording
   */
  stop = () => {
    this.setState({ recordState: RecordState.STOP });
  }

  /**
   * 
   */
  onStop = (audioData) => {
    this.setState({ audioData });
  }

  /**
   * Resets the session
   */
  reset = () => {
    this.setState({ 
      recordState: null,
      audioData: null,
    });
  }

  render() {
    const { recordState } = this.state;
    return (
      <div>
        <AudioReactRecorder 
          state={recordState}
          onStop={this.onStop}
        />
        <div className="button-container">
          <button 
            className="btn btn-primary"
            disabled={recordState === RecordState.START || recordState === RecordState.STOP}
            onClick={this.start}
          >
            {recordState === RecordState.PAUSE ? 'Continue Recording' : 'Start Recording'}
          </button>
          <button 
            className="btn btn-primary"
            disabled={!recordState || recordState === RecordState.STOP || recordState === RecordState.PAUSE}
            onClick={this.pause}
            >
            Pause Recording
          </button>
          <button 
            className="btn btn-primary"
            disabled={!recordState || recordState === RecordState.STOP}
            onClick={this.stop}
            >
            Stop Recording
          </button>
        </div>
        { recordState === RecordState.STOP &&
          <div className="audio-container">
            <audio
            id='audio'
            controls
            src={this.state.audioData ? this.state.audioData.url : null}
          />
          <button 
              className="btn btn-danger"
              onClick={this.reset}
              >
              RESET
            </button>
          </div>
        }
      </div>
    )
  }
}
