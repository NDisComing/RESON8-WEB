export interface Song {
  id: string;
  title: string;
  titleZh: string;
  albumArt: string;
  description: string;
  descriptionZh: string;
  youtubeLink: string;
  spotifyLink?: string;
  layout: 'left' | 'right';
}

export interface NavItem {
  label: string;
  href: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}