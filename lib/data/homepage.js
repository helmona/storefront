const prefix = process.env.NEXT_PUBLIC_PREFIX;

const data = {
  mainBanner: {
    title: 'NEW WEBSITE',
    subtitle: 'coming on 1th december',
    image: prefix + "assets/_MG_4432.JPG",
  },
  sectionMainA: {
    mode: 'A',
    content: {
      title: 'GEODE',
      subtitle: 'COLLECTION',
      desc: "These beautiful vibrant gems are part of my n/*  */ew geometric collection, they are handmade by me and each piece is unique. Made in bright fancy colors and presenting minimalistic modern design. Even though they are similar to each other, they are not identical due my own technique of crafting the polymeric materials.",
      link: {
        message: 'SHOP NOW',
        url: "https://www.etsy.com/shop/HELMONA?ref=condensed_trust_header_title_updates&section_id=20981085",
      },
    },
    images: [{
      src: prefix + '/assets/helmona_geode_earing_turquoise.jpg',
      alt: 'Fantastic turquoise earnings easy to wear for any occassion'
    }, {
      src: prefix + '/assets/helmona_geode_ring_turquoise.jpg',
      alt: 'Fantastic turquoise earnings easy to wear for any occassion'
    }]
  },
  sectionMainB: {
    mode: 'B',
    content: {
      title: 'VACACIÓN',
      subtitle: 'COLLECTION',
      desc: "Showing your personality doesn’t have to be hard, especially when you want to express your holiday mood :) Exploring new places, making new memories, being open to random and spontanious situations - this is the mindset while I'm on vacation. In my new collection I'm trying to collect my memories, vibe of the cities and feeling from places where I spent some time, and \“conserve it\” into these decorative pieces.",
      link: {
        message: 'SHOP NOW',
        url: "https://www.etsy.com/shop/HELMONA?ref=condensed_trust_header_title_updates&section_id=25948606"
      }
    },
    images: [{
      src: prefix + 'assets/helmona_vacacion_earings.jpg',
      alt: 'Fantastic turquoise earnings easy to wear for any occassion'
    }, {
      src: prefix + '/assets/helmona_vacacion_earing_pose.jpg',
      alt: 'Fantastic turquoise earnings easy to wear for any occassion'
    }]
  },
  sectionMainC: {
    mode: 'A',
    content: {
      title: 'ZEN',
      subtitle: 'COLLECTION',
      desc: "I led my intuition to follow the most relaxing forms and patterns. Like black and white in harmonious yin-yang, the whole creative process guided me into the circular particles, \"O\" and \"D\" shapes of very unique marble patterns made out of polymer clay. When I started to study a bit of geology and the process about how the original inorganics had melted together, it inspired me to create my own technique to reach a similar effect. Now, after months of experiments, I would like to proudly introduce you to my results.",
      link: {
        message: 'SHOP NOW',
        url: "https://www.etsy.com/shop/HELMONA?ref=condensed_trust_header_title_updates&section_id=20986288",
      },
    },
    images: [{
      src: prefix + 'assets/helmona_zen_marble_rings.jpg',
      alt: 'Fantastic turquoise earnings easy to wear for any occassion'
    }, {
      src: prefix + '/assets/helmona_zen_marble_necklace.jpg',
      alt: 'Fantastic turquoise earnings easy to wear for any occassion'
    }]
  },
}

export { data };