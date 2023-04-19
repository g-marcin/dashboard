import {ProgressBar} from 'react-bootstrap';

function Customprogressbar({progress}) {
  return <div className='wrapper__Progressbar'><div className='label__Progressbar' >Progress <span className='push'>{`${progress}%`}</span></div><ProgressBar now={progress} style={{"height":"5px"}} /></div>
}

export default Customprogressbar;