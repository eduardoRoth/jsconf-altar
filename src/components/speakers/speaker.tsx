import type { Speaker } from './speaker-list';

export default function SpeakerCard(props: { speaker: Speaker }) {
  const { speaker } = props;
  return (
    <view>
      <image
        style={{ width: '100%', height: '190px', objectFit: 'cover', objectPosition:'center' }}
        src={speaker.image}
      />
      <view style={{height: 'auto', width: '100%', background: '#f29a18'}}>
        <text style={{textAlign:'center', fontSize:'1.1rem', fontWeight:'bold', padding: '8px'}}>{speaker.name}</text>
      </view>

    </view>
  );
}
