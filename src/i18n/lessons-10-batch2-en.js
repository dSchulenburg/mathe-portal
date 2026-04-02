export const batch2 = {
  '10-koerper': {
    story: {
      intro:
        'Mia stares at her screen. The level architecture of "Harbor Lights" needs 3D objects — warehouses, cranes, containers. Tim has modeled the meshes, but Lumi asks: "How much memory does each hitbox need?" Mia grins: "For that, we need volume formulas."',
      challenge:
        'Calculate volumes and surface areas of pyramids, cones, and spheres. Help Mia build the perfect 3D hitboxes for her harbor district!',
      outro:
        'The 3D shapes are calculated, the hitboxes fit perfectly. Tim tests the crane level and calls out: "The collisions finally feel realistic!" Mia leans back — geometry makes games better.',
    },
    objectives: {
      volume_pyramid: 'Calculate the volume of pyramids using the one-third formula',
      volume_cone_sphere: 'Confidently determine volumes of cones and spheres',
      surface_area: 'Apply surface area formulas and interpret results',
      apply_3d: 'Transfer 3D shape calculations to everyday problems and game design',
    },
    explanation: {
      intro:
        'Three-dimensional shapes have volume (space inside) and surface area. For pyramids and cones, a crucial factor appears in the formula: the one-third factor $\\frac{1}{3}$. It comes from the fact that these shapes "taper to a point" — they fill only one third of the enclosing prism or cylinder.',
      cone:
        'A cone is like a "round pyramid" — its base is a circle with radius $r$. The formula has the same structure: one third times base area times height, except the base area is $\\pi r^2$.',
      mia_tip:
        'Mia: "I remember it like this: Pyramids and cones are the modest siblings of prisms and cylinders — they only take up a third of the space!"',
      sphere:
        'The sphere is the special case: It has no base and no height in the classical sense. Its volume depends only on the radius. Archimedes proved that a sphere fills exactly $\\frac{2}{3}$ of the enclosing cylinder — from which the formula follows.',
    },
    concepts: {
      pyramid: {
        title: 'Pyramid Volume',
        desc: 'A pyramid has one third the volume of a prism with the same base and height. The base can be a rectangle, triangle, or any polygon.',
      },
      cone: {
        title: 'Cone Volume',
        desc: 'The cone relates to the cylinder as the pyramid does to the prism: it fills exactly one third. Its circular base makes it particularly symmetric.',
      },
      sphere: {
        title: 'Sphere Volume',
        desc: 'The sphere is completely described by its radius. The $\\frac{4}{3}$ in the formula comes from integration — or from Archimedes\' ingenious proof.',
      },
    },
    examples: {
      icecream: {
        title: 'Calculating an ice cream cone',
        context:
          'An ice cream cone has the shape of a cone with radius $r = 3$ cm and height $h = 12$ cm. How much ice cream fits inside?',
        step1: 'Identify the given values: The cone has $r = 3$ cm and $h = 12$ cm.',
        step2: 'Apply the cone formula: Substitute into $V = \\frac{1}{3} \\cdot \\pi \\cdot r^2 \\cdot h$ and first compute the parenthetical expression.',
        step3: 'Result: The cone holds about $113{,}1\\,\\text{cm}^3$ of ice cream — that\'s slightly more than a deciliter.',
        mia_comment:
          'Mia: "Wow, a cone doesn\'t hold that much! That\'s why they always stack a scoop on top."',
      },
      hitbox: {
        title: 'Spherical Hitbox',
        context:
          'In "Harbor Lights," a buoy should have a spherical hitbox with volume $V = 904{,}8\\,\\text{cm}^3$. How large must the radius be?',
        step1: 'Given: The sphere\'s volume is $V = 904{,}8\\,\\text{cm}^3$. Find: the radius $r$.',
        step2: 'Rearrange the formula: Solve $V = \\frac{4}{3} \\pi r^3$ for $r^3$ by dividing by $\\frac{4}{3}\\pi$.',
        step3: 'Calculate: $r^3 \\approx 215{,}9$ — now take the cube root.',
        step4: 'Result: $r \\approx 6{,}0$ cm. The hitbox needs a radius of 6 cm.',
        mia_comment:
          'Mia: "Reverse calculation is everyday business in game design — you know what you want and have to find the parameters."',
      },
    },
    realworld: {
      packaging: {
        title: 'Packaging Design',
        desc: 'Beverage cans, tin cans, bottles — cylinder calculations are everywhere. Manufacturers optimize the ratio of volume to material usage to save costs.',
      },
      icecream: {
        title: 'Ice Cream Scoop Math',
        desc: 'Why does a "large" scoop look so much bigger? Because volume grows with $r^3$! Double the radius = eight times the volume. This also explains why XXL meals are so profitable.',
      },
      pizza: {
        title: 'Pizza Comparison',
        desc: 'A 30 cm pizza has more area than two 20 cm pizzas combined! $\\pi \\cdot 15^2 = 706{,}9$ vs. $2 \\cdot \\pi \\cdot 10^2 = 628{,}3$. Bigger is better value.',
      },
    },
    mistakes: {
      third: {
        wrong: 'Forgetting the factor $\\frac{1}{3}$',
        correct: 'For cones and pyramids, ALWAYS include $\\frac{1}{3}$',
        why: 'Cones and pyramids fill only one third of the enclosing cylinder or prism. Without the factor, you calculate the volume of the entire cylinder — three times too much!',
        mia_warning:
          'Mia: "I once calculated all hitboxes without the one-third. The buoys were enormous and blocked the entire harbor basin. Tim was not amused."',
      },
      surface_volume: {
        wrong: 'Mixing up surface area and volume formulas for the sphere',
        correct: 'Volume: $\\frac{4}{3}\\pi r^3$ — Surface area: $4\\pi r^2$',
        why: 'Volume has $r^3$ (cubic, so space), surface area has $r^2$ (squared, so area). Pay attention to the exponent — it tells you what you\'re calculating.',
      },
    },
  },

  '10-potenzgesetze': {
    story: {
      intro:
        'Jule is optimizing the memory of "Harbor Lights." "Our textures consume 2 to the power of 20 bytes — how much is that actually?" Tim does the math: "Wait, I can do exponents..." Mia laughs: "Then show us what you\'ve got."',
      challenge:
        'Master the laws of exponents: Multiply, exponentiate, and simplify powers. Help Tim calculate memory sizes and render times in a flash!',
      outro:
        'Tim has mastered the laws of exponents. Memory calculations now take seconds. "Exponents are like cheat codes for large numbers," he says. Mia nods: "And for small ones too — welcome to negative exponents."',
    },
    objectives: {
      multiply_powers: 'Multiply and divide powers with the same base',
      power_of_power: 'Simplify a power of a power using the multiplication rule',
      negative_exponents: 'Interpret negative exponents as fractions and convert between forms',
      apply_memory: 'Apply the laws of exponents to memory sizes and scientific notation',
    },
    explanation: {
      intro:
        'Powers are shorthand for repeated multiplication: $2^5 = 2 \\cdot 2 \\cdot 2 \\cdot 2 \\cdot 2 = 32$. When you multiply two powers with the same base, you add the exponents — because you\'re simply extending the chain of multiplications.',
      power_of_power:
        'What happens when you raise a power to another power? $(a^m)^n$ means: You multiply $a^m$ by itself exactly $n$ times. That gives $m \\cdot n$ factors — so $a^{m \\cdot n}$. The exponents are multiplied.',
      mia_tip:
        'Mia: "Same base → add exponents. Power of a power → multiply exponents. Different bases → calculate it out, there\'s no shortcut!"',
      negative:
        'A negative exponent flips the power: $a^{-n} = \\frac{1}{a^n}$. This isn\'t an arbitrary definition — it follows logically from the pattern: $2^3 = 8$, $2^2 = 4$, $2^1 = 2$, $2^0 = 1$, $2^{-1} = \\frac{1}{2}$. Each step divides by the base.',
    },
    concepts: {
      product_rule: {
        title: 'Product Rule',
        desc: 'Same base, different exponents? When multiplying, exponents are added; when dividing, subtracted. This ONLY works with the same base!',
      },
      power_rule: {
        title: 'Power Rule',
        desc: 'A power raised to another power? Multiply the exponents. $(a^3)^4 = a^{12}$ — twelve factors of $a$ in total.',
      },
      negative_exp: {
        title: 'Negative Exponent',
        desc: 'A minus in the exponent means "one divided by." This turns large numbers into small ones: $10^{-6}$ is one millionth. Perfect for microchips and milliseconds.',
      },
    },
    examples: {
      simplify: {
        title: 'Calculating memory',
        context:
          'Tim wants to know: How much is $2^3 \\cdot 2^4$ bytes? In computer science, this is a typical calculation with powers of two.',
        step1: 'Apply the product rule: Same base $2$, so we add the exponents: $3 + 4 = 7$.',
        step2: 'Calculate: $2^7 = 128$ bytes.',
        step3: 'Put it in context: 128 bytes — that\'s almost 1 kilobyte (which would be exactly $2^{10} = 1024$).',
        mia_comment:
          'Mia: "In computer science, powers of two are everywhere. RAM, textures, color depth — all powers of 2!"',
      },
      negative: {
        title: 'Converting milliseconds',
        context:
          'A frame in "Harbor Lights" is rendered in $10^{-3}$ seconds. What does that mean in decimal notation?',
        step1: 'Apply the negative exponent: $10^{-3}$ means $\\frac{1}{10^3}$.',
        step2: 'Calculate: $\\frac{1}{1000} = 0{,}001$ seconds.',
        step3: 'Put it in context: $1\\,\\text{ms} = 10^{-3}\\,\\text{s}$ — one millisecond. At 60 fps, each frame has about 16 ms.',
        mia_comment:
          'Mia: "Negative exponents sound scary, but they just mean: small numbers. $10^{-3}$ = milli, $10^{-6}$ = micro, $10^{-9}$ = nano."',
      },
    },
    realworld: {
      storage: {
        title: 'Digital Storage',
        desc: 'Your phone has 256 GB? That\'s $2^{38}$ bytes, over 274 billion bytes. Each doubling of storage is just +1 on the exponent — that\'s why technology grows so fast.',
      },
      richter: {
        title: 'Richter Scale',
        desc: 'A magnitude 6 earthquake isn\'t twice as strong as magnitude 3 — it\'s a thousand times stronger! Each level means $10 \\times$ more energy. Powers make the difference tangible.',
      },
      decibel: {
        title: 'Decibels and Volume',
        desc: 'Headphones at 100 dB are $10^{10}$ times more intense than the hearing threshold (0 dB). Every +10 dB = ten times the intensity. Your ears work logarithmically — that is, with powers!',
      },
    },
    mistakes: {
      add_bases: {
        wrong: 'Multiplying bases instead of adding exponents',
        correct: 'The product rule ONLY applies with the same base',
        why: 'For $2^3 \\cdot 3^2$, the bases are different (2 and 3). You can\'t apply any power rule here — you must calculate individually: $8 \\cdot 9 = 72$. Adding the exponents and multiplying the bases is a common mistake!',
        mia_warning:
          'Mia: "Different bases = no shortcut. Period. I once got this wrong in my code and all the textures were corrupted."',
      },
      zero_exp: {
        wrong: '$a^0 = 0$ — "to the power of zero is zero"',
        correct: '$a^0 = 1$ for all $a \\neq 0$',
        why: 'Follow the pattern: $2^3 = 8$, $2^2 = 4$, $2^1 = 2$, $2^0 = ?$ — each step divides by 2. So $2^0 = 1$. This holds for EVERY base (except 0). Zero is the identity element of addition, not multiplication.',
      },
    },
  },

  '10-aehnlichkeit': {
    story: {
      intro:
        'Mia scrolls through the asset library of "Harbor Lights." Hamburg\'s Speicherstadt (warehouse district) has buildings of all sizes — but they should all look proportional. Lumi asks: "Can\'t we just scale everything?" Mia nods: "Exactly. That\'s similarity."',
      challenge:
        'Understand similar triangles, scale factors, and the intercept theorem. Help Mia scale the harbor district proportionally!',
      outro:
        'The Speicherstadt in "Harbor Lights" looks fantastic — every building is proportional, every bridge fits. Jule admires the result: "It\'s like a real model!" Mia smiles: "It is. Mathematically precise."',
    },
    objectives: {
      similar_triangles: 'Recognize similar triangles and describe their properties',
      scale_factor: 'Calculate and apply the scale factor $k$',
      intercept_theorem: 'Apply the intercept theorem to geometric problems',
      apply_scaling: 'Use similarity in architecture, cartography, and game design',
    },
    explanation: {
      intro:
        'Two figures are similar if they have the same shape but may differ in size. For triangles, it\'s sufficient that all angles match — then all side ratios are automatically equal. The ratio of image to original is called the scale factor $k$.',
      scale_factor:
        'The scale factor $k$ tells you how much was enlarged or reduced. $k > 1$ means enlargement, $k < 1$ reduction, $k = 1$ means congruent (identical). Important: $k$ refers to lengths — areas scale with $k^2$, volumes with $k^3$!',
      mia_tip:
        'Mia: "In the game engine, we constantly work with scale factors. A sprite with scale 0.5 is half the size, scale 2.0 double. Exactly like in geometry!"',
      intercept:
        'The intercept theorem describes what happens when parallel lines are cut by two rays: The segments on the rays are proportional. This lets you calculate unknown lengths without having to measure everything.',
    },
    concepts: {
      similar_triangles: {
        title: 'Similar Triangles',
        desc: 'Two triangles are similar if all their angles match. Then: All side ratios are equal. We write $\\triangle ABC \\sim \\triangle A\'B\'C\'$.',
      },
      scale_factor: {
        title: 'Scale Factor',
        desc: 'The factor $k = \\frac{\\text{Image}}{\\text{Original}}$ describes the enlargement or reduction. $k = 2$ means: everything twice as large. $k = 0{,}5$ means: everything half the size.',
      },
      intercept_theorem: {
        title: 'Intercept Theorem',
        desc: 'When two rays are cut by parallel lines, the resulting segments are proportional. A powerful tool for calculating missing lengths.',
      },
    },
    examples: {
      model: {
        title: 'Scaling a building',
        context:
          'A Hamburg warehouse is built as a 3D model at scale $1:100$. The model is $3{,}5$ cm tall. How tall is the real building?',
        step1: 'Determine the scale factor: $k = \\frac{1}{100}$ means the model is 100 times smaller than the original.',
        step2: 'Read the model height: $h_{\\text{Model}} = 3{,}5$ cm.',
        step3: 'Calculate back: $h_{\\text{real}} = 3{,}5 \\cdot 100 = 350$ cm $= 3{,}5$ m. The building is 3.5 meters tall.',
        mia_comment:
          'Mia: "That\'s exactly how we work in Harbor Lights. We build the Speicherstadt as a model and scale everything proportionally into the game."',
      },
      intercept: {
        title: 'Applying the intercept theorem',
        context:
          'Two rays are cut by parallel lines. The segments on one ray are 4 and 6, on the other ray the first segment is 9. How long is the second segment $x$?',
        step1: 'Set up the intercept theorem: The ratios of the segments on both rays are equal: $\\frac{4}{6} = \\frac{x}{9}$.',
        step2: 'Cross multiply: $x = \\frac{4 \\cdot 9}{6} = \\frac{36}{6}$.',
        step3: 'Result: $x = 6$. The second segment is 6 units long.',
        mia_comment:
          'Mia: "The intercept theorem is like auto-layout in the game engine — you specify a ratio, and everything else adjusts proportionally."',
      },
    },
    realworld: {
      maps: {
        title: 'Maps & Navigation',
        desc: 'Google Maps shows the world at scale. Zoom level 15 corresponds to about $1:18,000$. Each zoom level doubles the scale factor — exactly like similarity in geometry.',
      },
      architecture: {
        title: 'Architectural Models',
        desc: 'Before the Elbphilharmonie was built, there were models at scale $1:500$. Architects use similarity to infer real dimensions from small models — and vice versa.',
      },
      instagram: {
        title: 'Scaling Images',
        desc: 'When you crop a photo for Instagram, the scale changes. "Fit to screen" scales proportionally (similar), "Stretch" distorts (not similar). Your eye spots the difference instantly!',
      },
    },
    mistakes: {
      congruence: {
        wrong: '"Similar" and "congruent" are the same thing',
        correct: 'Similar = same shape. Congruent = same shape AND same size',
        why: 'Congruence is a special case of similarity with $k = 1$. All congruent triangles are similar, but not all similar triangles are congruent. Similar means: same angles, but sides may be proportionally different in length.',
        mia_warning:
          'Mia: "In the game engine: Congruent = Copy. Similar = Copy + Scale. If you copy a house and scale it, it\'s similar. Without scaling, it\'s congruent."',
      },
      scale_direction: {
        wrong: 'Setting up the scale factor the wrong way around',
        correct: 'Always $k = \\frac{\\text{Image}}{\\text{Original}}$',
        why: 'If the image is larger than the original, $k > 1$ must hold. If you set up the fraction the wrong way, you get $k < 1$ and think it was reduced. Remember: Image on top, Original on bottom.',
      },
    },
  },
};
