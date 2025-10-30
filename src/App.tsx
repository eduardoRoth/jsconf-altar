import { useCallback, useEffect, useRef, useState } from '@lynx-js/react';

import './App.css';
import type { NodesRef } from '@lynx-js/types';
import arrow from './assets/arrow.png';
import lynxLogo from './assets/lynx-logo.png';
import reactLynxLogo from './assets/react-logo.png';
import SpeakerCard from './components/speakers/speaker';

import {
  type Speaker,
  speakersArray,
} from './components/speakers/speaker-list';

export function App(props: { onRender?: () => void }) {
  const [alterLogo, setAlterLogo] = useState(false);

  useEffect(() => {
    console.info('Hello, ReactLynx');
  }, []);
  props.onRender?.();

  const onTap = useCallback(() => {
    'background only';
    setAlterLogo((prevAlterLogo) => !prevAlterLogo);
  }, []);

  const speakersRef = useRef<NodesRef>(null);

  return (
    <view>
      <view style={{height:'15vh', width: '100%', background: '#470b3a'}}>
        <text style={{fontSize:'3rem', textAlign:'center', marginTop:'8vh'}}>SPEAKERS</text>
      </view>
      <list
        ref={speakersRef}
        className="list"
        list-type="waterfall"
        column-count={2}
        scroll-orientation="vertical"
        custom-list-name="list-container"
        style={{
          width: '100%',
          height: '85vh',
          listMainAxisGap: '5px',
          paddingBottom: '42px',
        }}
      >
        {speakersArray.map((speaker: Speaker, index: number) => (
          <list-item
            estimated-main-axis-size-px={200}
            item-key={'' + index}
            key={'' + index}
            style={{padding: '5px'}}
          >
            <SpeakerCard speaker={speaker} />
          </list-item>
        ))}
      </list>
    </view>
  );
}
