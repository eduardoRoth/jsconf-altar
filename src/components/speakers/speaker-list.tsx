import Speakers from '../../assets/speakers.json';

export interface Speaker {
  name: string;
  title: string;
  slug: string;
  image: string;
  bio: string;
}

export const speakersArray: Speaker[] = Speakers;
