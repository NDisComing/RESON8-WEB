import { NavItem, Song } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'About us', href: '#about' },
  { label: 'Songs', href: '#songs' },
  { label: 'Podcasts', href: '#podcasts' },
  { label: 'Merch', href: '#merch' },
];

export const SONGS: Song[] = [
  {
    id: '1',
    title: 'Renewed Strength',
    titleZh: '重新得力',
    albumArt: 'https://picsum.photos/id/449/800/800', // Moody dark background similar to draft
    description: 'Finding strength in faith through the challenging times. A powerful anthem of resilience.',
    descriptionZh: 'Reson8 渴望激发一种内在的回响：让神的话语、神的爱、神的真理，在人们心中 Resonate (共鸣) 起来。',
    youtubeLink: 'https://youtube.com',
    layout: 'left'
  },
  {
    id: '2',
    title: 'Never Ceasing',
    titleZh: '永不止息',
    albumArt: 'https://picsum.photos/id/338/800/800', // Singer with mic vibe
    description: 'Love never fails. A melodious journey through the enduring nature of divine love.',
    descriptionZh: '爱是恒久忍耐，又有恩慈；爱是不嫉妒；爱是不自夸，不张狂。',
    youtubeLink: 'https://youtube.com',
    layout: 'right'
  }
];

export const ABOUT_TEXT_ZH = `Reson8 是由一群基督教卫理公会的青年人以音乐与媒体制作为核心的事工平台。我们相信，每一个人都渴望与神真实的连结，而这种连接就像收音机需要调到正确的频率，才能明白神的心意，活出神的心意！

Reson8 的异象，就是帮助人们调整“属灵频率”，透过音乐与影片与神共鸣，影响生命，引导人们认识神，渴慕神，亲近神。

我们渴望激发一种内在的回响：让神的话语、神的爱、神的真理，在人们心中 Resonate (共鸣) 起来，使神成为我们事工的核心焦点！`;

export const ABOUT_TEXT_EN = `Reson8 is a ministry platform centered on music and media production, formed by a group of Methodist youths. We believe that everyone desires a true connection with God. Like a radio that needs to be tuned to the right frequency to receive a signal, we need to tune our hearts to understand and live out God's will.

Our vision is to help people adjust their "spiritual frequency," resonating with God through music and video to impact lives, guiding people to know, desire, and draw near to God.`;