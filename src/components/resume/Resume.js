import myResume from './PatGoral_Resume.pdf'
import './Resume.css';
export default function Resume() {
    return (
        <div className='resume-container'>
<iframe className='iframe' src={myResume} title="Pat Goral Resume"></iframe>
</div>
    );
};

