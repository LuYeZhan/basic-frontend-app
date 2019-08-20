import React from 'react'

export default function AudioElement(props) {
    const { talk } = props;
    return (
    <div>
        <article>
            <audio
            controls
            src={talk.soundURL}>
            <code> audio </code> element.
            </audio>
        </article>
    </div>
    )
}
