import React from 'react';
import { Bubble } from '../Bubble';

export function Typing(props: { custom?: React.ReactNode }) {
  return (
    <Bubble type="typing">
      {props.custom || <div className="Typing" aria-busy="true">
        <div className="Typing-dot" />
        <div className="Typing-dot" />
        <div className="Typing-dot" />
      </div>}
    </Bubble>
  );
}
