export type Testimonial = {
  quote: string;
  name: string;
  date: string;
  image: string;
  imdb: string;
};

/** Drop matching files into public/images/testimonials/ */
export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "I worked with Ana for over 2 years and in that time she helped me build a stronger physique. She taught me how to move with intention and being strong is sexy. Having her as my coach changed my body drastically and couldn't have done it without her.",
    name: "Pia Miller",
    date: "June 2021",
    image: "/images/testimonials/pia-miller.png",
    imdb: "https://www.imdb.com/name/nm3880536/",
  },
  {
    quote:
      "I am an actor and needed to get into the best shape of my life for a big role on a Netflix produced movie called Territory. Ana was recommended to me by another actor colleague that she had also helped get into shape for their role. We worked together and was able to bring my best package to date and helped land me the role.",
    name: "Philippa Northeast",
    date: "September 2025",
    image: "/images/testimonials/philippa-northeast.png",
    imdb: "https://www.imdb.com/name/nm5923287/",
  },
  {
    quote:
      "I met Ana at an event and I needed help to get back into training. We worked together for many years, but within 3 months we had added 4kgs of muscle and eliminated 5kgs of fat. So once she launched her app I downloaded it straight away and haven't stopped using it since.",
    name: "Charlie Clausen",
    date: "October 2023",
    image: "/images/testimonials/charlie-clausen.png",
    imdb: "https://www.imdb.com/name/nm0165310/",
  },
  {
    quote:
      "I scored a role on Spartacus: House of Ashur produced by Starz. I needed to look like a gladiator with a lot of shirtless scenes and was referred to Ana to get the job done. We worked together to achieve the look on camera.",
    name: "Jackson Gallagher",
    date: "August 2025",
    image: "/images/testimonials/jackson-gallagher.png",
    imdb: "https://www.imdb.com/name/nm3370453/",
  },
];
