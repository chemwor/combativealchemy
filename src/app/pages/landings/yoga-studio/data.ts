import { SafeHtml } from '@angular/platform-browser'
import {
  pricingLession,
  pricingSubscription,
  pricingValid,
} from '@components/icons'

export type AdvantagesType = {
  title: string
  image: string
  icon_class?: string
  description: string
  button_text?: string
}

export type TrainersType = {
  name: string
  image: string
  specialization: string
}

export type YogaPricingType = {
  title: string
  description: string
  price: string
  price_per_class: string
}

export type InstagramYogaType = {
  col_span: number
  image_src: string
}

export type PricingYogaType = {
  icon: any
  text: string
  sanitizedIcon?: SafeHtml
}

export type CalendarType = {
  title: string
  start: string
  end: string
  classNames: string[]
}
export const advantages: AdvantagesType[] = [
  {
    title: 'Personalized Training',
    image: 'assets/img/landing/yoga-studio/features/personalized.jpg',
    icon_class: 'ai-user-check',
    description:
      'Every session is tailored to your goals, fitness level, and pace—so you progress with confidence, not pressure.',
  },
  {
    title: 'Flexible Session',
    image: 'assets/img/landing/yoga-studio/features/flexible.jpg',
    icon_class: 'ai-time',
    description:
      'Choose from 30- or 60-minute sessions, individual or group formats, and pay-as-you-go or package plans built around your schedule.',
  },
  {
    title: 'Adaptive Coaching',
    image: 'assets/img/landing/yoga-studio/features/coach.jpg',
    icon_class: 'ai-target',
    description:
      'A 30-minute consultation ensures you get a clear path forward and a coach who understands your needs from day one.',
  },
  {
    title: 'Affordable',
    image: 'assets/img/landing/yoga-studio/features/afordable.jpg',
    icon_class: 'ai-dollar',
    description:
      'No hidden fees—just simple options with clear timelines and multiple payment methods (Zelle, Venmo, Cash App).',
  },
  {
    title: 'Real Results',
    image: 'assets/img/landing/yoga-studio/features/results.jpg',
    icon_class: 'ai-activity',
    description:
      'Whether you\'re training for fitness, technique, confidence, or discipline, every session is centered around measurable improvement.',
  },
  {
    title: 'Growth Environment',
    image: 'assets/img/landing/yoga-studio/features/growth.jpg',
    icon_class: 'ai-award',
    description:
      'You’re not just signing up for training—you’re joining the C.A. family, where accountability, motivation, and personal evolution come first.',
  },
  {
    title: 'Your Transformation Starts Here',
    image: 'assets/img/landing/yoga-studio/features/flower.svg',
    description:
      'Schedule a free 30-minute consultation and see how Combative Alchemy can support your fitness journey.',
    button_text: 'Schedule Now',
  },
]

export const trainers: TrainersType[] = [
  {
    name: 'Alisa Black',
    image: 'assets/img/landing/yoga-studio/trainers/01.jpg',
    specialization: 'Fly-yoga trainer',
  },
  {
    name: 'Michelle Yang',
    image: 'assets/img/landing/yoga-studio/trainers/02.jpg',
    specialization: 'Fly-yoga and relax trainer',
  },
  {
    name: 'Robert Fox',
    image: 'assets/img/landing/yoga-studio/trainers/03.jpg',
    specialization: 'Stretching trainer',
  },
  {
    name: 'Jane Cooper',
    image: 'assets/img/landing/yoga-studio/trainers/04.jpg',
    specialization: 'Fly-yoga trainer',
  },
  {
    name: 'Cody Fisher',
    image: 'assets/img/landing/yoga-studio/trainers/05.jpg',
    specialization: 'Fly-yoga and relax trainer',
  },
  {
    name: 'Jenny Wilson',
    image: 'assets/img/landing/yoga-studio/trainers/06.jpg',
    specialization: "Women's practices",
  },
  {
    name: 'Annette Black',
    image: 'assets/img/landing/yoga-studio/trainers/07.jpg',
    specialization: 'Fly-yoga trainer',
  },
  {
    name: 'Ralph Edwards',
    image: 'assets/img/landing/yoga-studio/trainers/08.jpg',
    specialization: 'Stretching trainer, healthy back',
  },
]

export const yogaPricing: YogaPricingType[] = [
  {
    title: 'Single Session (60 min)',
    description: 'One-on-one training, pay-as-you-go',
    price: '50',
    price_per_class: '50 per session',
  },
  {
    title: 'Single Session (30 min)',
    description: 'Short, focused one-on-one training',
    price: '40',
    price_per_class: '40 per session',
  },
  {
    title: 'Group Session (2 people)',
    description: 'Train together for added motivation',
    price: '80',
    price_per_class: '40 per person',
  },
  {
    title: 'Group Session (3 people)',
    description: 'Small-group training, 1 hour',
    price: '120',
    price_per_class: '40 per person',
  },
  {
    title: '4 Session Package',
    description: 'Valid for 30 days, any training type',
    price: '200',
    price_per_class: '50 per session',
  },
  {
    title: '8 Session Package',
    description: 'Valid for 45 days, any training type',
    price: '400',
    price_per_class: '50 per session',
  },
  {
    title: '12 Session Package',
    description: 'Valid for 60 days, flexible scheduling',
    price: '600',
    price_per_class: '50 per session',
  },
  {
    title: '4 Session Package (30 min)',
    description: 'Valid for 30 days, 30-minute sessions',
    price: '160',
    price_per_class: '40 per session',
  },
  {
    title: '8 Session Package (30 min)',
    description: 'Valid for 45 days, 30-minute sessions',
    price: '320',
    price_per_class: '40 per session',
  },
  {
    title: '12 Session Package (30 min)',
    description: 'Valid for 60 days, 30-minute sessions',
    price: '480',
    price_per_class: '40 per session',
  }
]


export const instagramYoga: InstagramYogaType[] = [
  {
    col_span: 5,
    image_src: 'assets/img/landing/yoga-studio/instagram/01.jpg',
  },
  {
    col_span: 7,
    image_src: 'assets/img/landing/yoga-studio/instagram/02.jpg',
  },
  {
    col_span: 7,
    image_src: 'assets/img/landing/yoga-studio/instagram/04.jpg',
  },
  {
    col_span: 5,
    image_src: 'assets/img/landing/yoga-studio/instagram/05.jpg',
  },
]

export const pricingYoga: PricingYogaType[] = [
  {
    icon: pricingLession,
    text: 'Choose between 30-minute or 1-hour sessions based on your goals and schedule.',
  },
  {
    icon: pricingSubscription,
    text: 'Packages come with clear usage windows so you can stay consistent without pressure.',
  },
  {
    icon: pricingValid,
    text: 'Train individually or bring 1–2 partners for shared, high-energy sessions.',
  },
]

export const calendarEventData: CalendarType[] = [
  {
    title: 'Stretching',
    start: '2022-08-01T16:30',
    end: '2022-08-01T18:00',
    classNames: [
      'event-custom-style',
      'bg-light',
      'text-nav',
      'border-0',
      'rounded-1',
      'p-2',
      'ps-3',
      'border-start',
      'border-5',
      'border-purple',
    ],
  },
  {
    title: 'For pregnant',
    start: '2022-08-02T07:30',
    end: '2022-08-02T09:40',
    classNames: [
      'event-custom-style',
      'bg-light',
      'text-nav',
      'border-0',
      'rounded-1',
      'p-2',
      'ps-3',
      'border-start',
      'border-5',
      'border-warning',
    ],
  },
  {
    title: 'Healthy back',
    start: '2022-08-02T12:00',
    end: '2022-08-02T13:30',
    classNames: [
      'event-custom-style',
      'bg-light',
      'text-nav',
      'border-0',
      'rounded-1',
      'p-2',
      'ps-3',
      'border-start',
      'border-5',
      'border-info',
    ],
  },
  {
    title: 'Relax yoga',
    start: '2022-08-02T18:45',
    end: '2022-08-02T20:00',
    classNames: [
      'event-custom-style',
      'bg-light',
      'text-nav',
      'border-0',
      'rounded-1',
      'p-2',
      'ps-3',
      'border-start',
      'border-5',
      'border-danger',
    ],
  },
  {
    title: 'Beginners',
    start: '2022-08-03T11:00',
    end: '2022-08-03T13:00',
    classNames: [
      'event-custom-style',
      'bg-light',
      'text-nav',
      'border-0',
      'rounded-1',
      'p-2',
      'ps-3',
      'border-start',
      'border-5',
      'border-success',
    ],
  },
  {
    title: 'Relax yoga',
    start: '2022-08-03T12:35',
    end: '2022-08-03T14:00',
    classNames: [
      'event-custom-style',
      'bg-light',
      'text-nav',
      'border-0',
      'rounded-1',
      'p-2',
      'ps-3',
      'border-start',
      'border-5',
      'border-danger',
    ],
  },
  {
    title: 'Fly yoga',
    start: '2022-08-04T09:00',
    end: '2022-08-04T11:00',
    classNames: [
      'event-custom-style',
      'bg-light',
      'text-nav',
      'border-0',
      'rounded-1',
      'p-2',
      'ps-3',
      'border-start',
      'border-5',
      'border-primary',
    ],
  },
  {
    title: 'For pregnant',
    start: '2022-08-05T07:30',
    end: '2022-08-05T09:40',
    classNames: [
      'event-custom-style',
      'bg-light',
      'text-nav',
      'border-0',
      'rounded-1',
      'p-2',
      'ps-3',
      'border-start',
      'border-5',
      'border-warning',
    ],
  },
  {
    title: 'Beginners',
    start: '2022-08-08T11:00',
    end: '2022-08-03T13:00',
    classNames: [
      'event-custom-style',
      'bg-light',
      'text-nav',
      'border-0',
      'rounded-1',
      'p-2',
      'ps-3',
      'border-start',
      'border-5',
      'border-success',
    ],
  },
  {
    title: 'Relax yoga',
    start: '2022-08-08T12:35',
    end: '2022-08-03T14:00',
    classNames: [
      'event-custom-style',
      'bg-light',
      'text-nav',
      'border-0',
      'rounded-1',
      'p-2',
      'ps-3',
      'border-start',
      'border-5',
      'border-danger',
    ],
  },
  {
    title: 'For pregnant',
    start: '2022-08-09T07:30',
    end: '2022-08-09T09:40',
    classNames: [
      'event-custom-style',
      'bg-light',
      'text-nav',
      'border-0',
      'rounded-1',
      'p-2',
      'ps-3',
      'border-start',
      'border-5',
      'border-warning',
    ],
  },
  {
    title: 'Fly yoga',
    start: '2022-08-10T09:00',
    end: '2022-08-10T11:00',
    classNames: [
      'event-custom-style',
      'bg-light',
      'text-nav',
      'border-0',
      'rounded-1',
      'p-2',
      'ps-3',
      'border-start',
      'border-5',
      'border-primary',
    ],
  },
  {
    title: 'Stretching',
    start: '2022-08-11T16:30',
    end: '2022-08-11T18:00',
    classNames: [
      'event-custom-style',
      'bg-light',
      'text-nav',
      'border-0',
      'rounded-1',
      'p-2',
      'ps-3',
      'border-start',
      'border-5',
      'border-purple',
    ],
  },
  {
    title: 'Healthy back',
    start: '2022-08-11T12:00',
    end: '2022-08-11T13:30',
    classNames: [
      'event-custom-style',
      'bg-light',
      'text-nav',
      'border-0',
      'rounded-1',
      'p-2',
      'ps-3',
      'border-start',
      'border-5',
      'border-info',
    ],
  },
  {
    title: 'Relax yoga',
    start: '2022-08-12T12:35',
    end: '2022-08-12T14:00',
    classNames: [
      'event-custom-style',
      'bg-light',
      'text-nav',
      'border-0',
      'rounded-1',
      'p-2',
      'ps-3',
      'border-start',
      'border-5',
      'border-danger',
    ],
  },
]
