import React from "react";
import vr from '../assets/images/VRagents.png';
import congruency from '../assets/images/congruency.png';
import '../assets/styles/Publication.scss';

function Publication() {
    return(
    <div className="pubs-container" id="publication">
        <h1>Publications</h1>
        <div className="pubs-grid">
            <div className="pubs">
                <a href="https://onlinelibrary.wiley.com/doi/pdf/10.1111/jcal.13046" target="_blank" rel="noreferrer"><img src={vr} className="zoom" alt="thumbnail" width="70%"/></a>
                <a href="https://onlinelibrary.wiley.com/doi/pdf/10.1111/jcal.13046" target="_blank" rel="noreferrer"><h2>Virtual Reality Agents</h2></a>
                <p>Bachelor thesis on testing a text-to-speech virtual reality agent as an educator in K-12 classrooms, including real-world scenario evaluations. 
                    Contributed to a larger research project published in a peer-reviewed paper.</p>
            </div>
            <div className="pubs">
                <a href="https://escholarship.org/uc/item/2j87q9kf" target="_blank" rel="noreferrer"><img src={congruency} className="zoom" alt="thumbnail" width="70%"/></a>
                <a href="https://escholarship.org/uc/item/2j87q9kf" target="_blank" rel="noreferrer"><h2>Gaze Behavior and Memory</h2></a>
                <p>Investigated whether schema congruency differentially affects low level sensory processing (eye gaze) compared to higher-level cognition (memory).</p>
            </div>
        </div>
    </div>
    );
}

export default Publication;