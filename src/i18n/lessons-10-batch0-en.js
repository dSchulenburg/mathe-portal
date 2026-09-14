export const batch0 = {
  '10-quad-funktionen': {
    story: {
      intro: 'Mia sits in her small office at Hamburg harbor, staring at the screen. Lumi, her game character in "Harbor Lights", is supposed to jump elegantly over crates and containers — but the jump curve just looks wrong. "The physics isn\'t right", she mutters. To program a realistic jump path, Mia needs quadratic functions.',
      challenge: 'Lumi is supposed to jump over crates — but the jump curve looks unnatural.',
      outro: 'With the vertex form, Mia has programmed the perfect jump curve! Lumi now flies in an elegant arc over the Hamburg containers. "Finally it looks realistic", says Tim and gives her a high five.',
    },
    objectives: {
      recognize: 'Recognize quadratic functions and describe their properties',
      vertex_form: 'Convert confidently between standard form and vertex form',
      pq_formula: 'Calculate zeros with the quadratic formula',
      graph_properties: 'Read the opening direction, vertex and axis of symmetry from the equation',
    },
    explanation: {
      intro: 'Imagine you throw a basketball. The ball flies upward in an arc, reaches its highest point and falls back down. This path has a very specific shape — a parabola. In math, we describe it with a quadratic function:',
      opening: 'The number $a$ decides whether the parabola opens upward ($a > 0$) or downward ($a < 0$) — and how "narrow" or "wide" it is. The larger $|a|$, the narrower the parabola.',
      mia_tip: 'In my game, $a$ is negative, because the jump curve goes up and then comes back down — like an upside-down U!',
      vertex_form: 'The vertex form tells you the highest (or lowest) point of the parabola right away. The vertex $S$ has the coordinates $(d \\mid e)$:',
      conversion: 'To get from standard form to vertex form, you use completing the square. You cleverly add a number and subtract it again, so that a perfect square appears.',
    },
    concepts: {
      normal_form: {
        title: 'Standard form',
        desc: 'The usual way to write it. You can see right away: $a$ = opening, $c$ = y-intercept (where the parabola crosses the y-axis).',
      },
      vertex_form: {
        title: 'Vertex form',
        desc: 'Shows you the vertex $S(d \\mid e)$ immediately. Best for: reading the highest/lowest point, recognizing a shift.',
      },
      pq_formula: {
        title: 'Quadratic Formula (pq-Formula)',
        desc: 'Your tool for zeros. Requirement: The equation must be in the form $x^2 + px + q = 0$ (the coefficient of $x^2$ must be 1!).',
      },
      discriminant: {
        title: 'Discriminant',
        desc: 'The expression under the square root decides: $D > 0$ = two zeros, $D = 0$ = one zero, $D < 0$ = no real zero.',
      },
    },
    examples: {
      vertex: {
        title: 'Finding the vertex form',
        context: 'Mia wants to calculate the highest point of Lumi\'s jump.',
        step1: 'The function is given in standard form:',
        step2: 'Completing the square: We add $(\\frac{6}{2})^2 = 9$ and subtract it again:',
        step3: 'Simplify — the expression in the brackets is a perfect square:',
        step4: 'Read off the vertex: $d = 3$, $e = -4$, so:',
        mia_comment: 'The vertex at $(3 \\mid -4)$ is the lowest point, because $a = 1 > 0$. For a jump curve I need $a < 0$, then it becomes the highest point!',
      },
      pq: {
        title: 'Zeros with the quadratic formula',
        context: 'Where does Lumi hit the ground again?',
        step1: 'Given: The equation is already in the right form ($x^2$ coefficient = 1):',
        step2: 'Read off the values for $p$ and $q$:',
        step3: 'Substitute into the quadratic formula and calculate:',
        step4: 'So Lumi lands at $x = 2$ or $x = -4$:',
        mia_comment: 'Two zeros — the parabola crosses the x-axis twice. In the game this means: Lumi takes off at $x = -4$ and lands at $x = 2$!',
      },
    },
    realworld: {
      basketball: {
        title: 'Basketball shot',
        desc: 'Every shot at the basket follows a parabola. The height $h$ depends on the time $t$. Coaches use this to calculate the best release angle.',
      },
      bridge: {
        title: 'Bridge arches',
        desc: 'Many bridges have the shape of a parabola — it is the most stable arch shape, because it spreads the weight evenly. The Golden Gate Bridge? A parabola.',
      },
      pricing: {
        title: 'Price optimization',
        desc: 'A shop wants to know: Which price brings the most profit? When the price goes up, fewer people buy — the profit is a parabola with a maximum.',
      },
    },
    mistakes: {
      sign_error: {
        wrong: 'Sign error',
        correct: 'Watch the signs',
        why: 'In $f(x) = (x - d)^2 + e$ there is a minus in front of $d$. This means: $f(x) = (x - 3)^2$ has its vertex at $d = +3$, not at $-3$!',
        mia_warning: 'This sign error cost me 3 hours of debugging. Lumi\'s jump curve was shifted to the left instead of to the right!',
      },
      pq_wrong: {
        wrong: 'Quadratic formula without dividing',
        correct: 'First divide by $a$',
        why: 'The quadratic formula only works if the coefficient of $x^2$ is 1. With $2x^2 + 4x - 6 = 0$ you first have to divide by 2: $x^2 + 2x - 3 = 0$.',
      },
    },
  },
  '10-pythagoras': {
    story: {
      intro: 'Mia has a problem with collision detection: When does Lumi touch an obstacle? Tim suggests calculating the distance between two points. "For that you need Pythagoras", he says. Mia remembers the theorem from school — and suddenly it makes total sense.',
      challenge: 'Collision detection needs to calculate the distance between objects.',
      outro: 'Lumi\'s collision detection now works to the pixel! Mia used the Pythagorean theorem to calculate the distance between the game character and obstacles in real time.',
    },
    objectives: {
      theorem: 'Apply the Pythagorean theorem confidently',
      calculate_sides: 'Calculate missing sides in a right triangle',
      recognize: 'Recognize when a triangle is a right triangle',
      apply: 'Apply the theorem to everyday problems',
    },
    explanation: {
      intro: 'In every right triangle there is a simple but powerful rule: The squares of the two legs add up to the square of the hypotenuse.',
      sides: 'Here $c$ is always the longest side — the hypotenuse. It lies opposite the right angle. The two shorter sides $a$ and $b$ are called legs.',
      mia_tip: 'In my game, I calculate the distance between Lumi and an object as the hypotenuse. The horizontal distance is $a$, the vertical one is $b$ — and $c$ is the real distance!',
      solving: 'You can rearrange the formula for any side. If you are looking for the hypotenuse:',
    },
    concepts: {
      theorem: {
        title: 'Pythagorean theorem',
        desc: 'Only works in right triangles. $c$ is the hypotenuse (opposite the right angle), $a$ and $b$ are the legs.',
      },
      hypotenuse: {
        title: 'Calculating the hypotenuse',
        desc: 'If you know both legs, take the square root of the sum of the squares.',
      },
      cathetus: {
        title: 'Calculating a leg',
        desc: 'If you know the hypotenuse and one leg, take the square root of the difference.',
      },
    },
    examples: {
      screen: {
        title: 'Calculating a screen diagonal',
        context: 'Mia wants to know how big the screen of her new monitor really is.',
        step1: 'The monitor is 16 inches wide and 9 inches high:',
        step2: 'Apply Pythagoras — width and height are the legs:',
        step3: 'Take the square root to get the diagonal:',
        mia_comment: 'An 18.36-inch diagonal — that is the value manufacturers give as the "screen size". Now I know why!',
      },
      ladder: {
        title: 'Ladder against a wall',
        context: 'How high does a 5-meter ladder reach if it stands 1.5 m away from the wall?',
        step1: 'The ladder is the hypotenuse, the distance to the wall is one leg:',
        step2: 'Rearrange for the leg you are looking for (the height):',
        step3: 'The ladder reaches almost 4.77 m high:',
        mia_comment: 'In the game I use exactly this calculation to check whether Lumi can reach a ladder!',
      },
    },
    realworld: {
      screen: {
        title: 'Screen diagonal',
        desc: 'The "size" of a screen is always the diagonal — calculated with Pythagoras from width and height.',
      },
      football: {
        title: 'Soccer field diagonal',
        desc: 'A soccer field is 105 m × 68 m. How far is it from corner to corner? Pythagoras tells you.',
      },
      wifi: {
        title: 'Wi-Fi range',
        desc: 'Your router is on the ground floor, you are on the first floor. The real distance to the router is the hypotenuse of the horizontal and vertical distance.',
      },
    },
    mistakes: {
      hypotenuse: {
        wrong: 'Hypotenuse used as a leg',
        correct: 'c is always the longest side',
        why: 'The hypotenuse $c$ ALWAYS lies opposite the right angle. It is the longest side. If you mix it up with a leg, the whole calculation is wrong.',
      },
      root: {
        wrong: 'Root of a sum',
        correct: 'First add, then take the root',
        why: '$\\sqrt{a^2 + b^2}$ is NOT the same as $a + b$! Example: $\\sqrt{3^2 + 4^2} = \\sqrt{25} = 5$, but $3 + 4 = 7$.',
        mia_warning: 'Tim found this mistake in my code — the collision detection was 40% too inaccurate!',
      },
    },
  },
  '10-wahrscheinlichkeit': {
    story: {
      intro: 'Mia wants to build a loot system for Harbor Lights. Players should be able to find rare items — but not too often, or it gets boring, and not too rarely, or it gets frustrating. "That is pure probability", says Jule. Mia sits down and calculates.',
      challenge: 'The loot drop system should be fair and exciting.',
      outro: 'Mia\'s loot system works! She balanced the drop probabilities so that players find a rare item in every 20 chests on average. "The math behind it is actually simple", she grins — "but the balancing still took a while."',
    },
    objectives: {
      basic: 'Give probabilities as a fraction, a decimal and a percentage',
      tree: 'Solve multi-stage random experiments with tree diagrams',
      expected_value: 'Calculate and interpret the expected value',
      complement: 'Work with the complementary probability ("at least once...")',
    },
    explanation: {
      intro: 'How likely is it to roll a 6? How big is the chance of a rare item in the game? To answer questions like these, you need probability theory. The basic idea is simple:',
      range: 'Probabilities are always between 0 (impossible) and 1 (certain). You can write them as a fraction ($\\frac{1}{6}$), a decimal ($0{,}167$) or a percentage ($16{,}7\\%$).',
      mia_tip: 'In Harbor Lights, $P(\\text{Rare Item}) = 0{,}05$. This means: With every drop, the player has a 5% chance. Sounds small — but over many drops it adds up!',
      tree: 'For multi-stage experiments (e.g. rolling a die twice) you use a tree diagram. Along a path, you multiply the probabilities:',
      complement: 'Often it is easier to calculate "the opposite". The probability that something does NOT happen is:',
    },
    concepts: {
      laplace: {
        title: 'Laplace experiment',
        desc: 'If all outcomes are equally likely (like with a fair die), you simply divide: favorable outcomes by all possible outcomes.',
      },
      complement: {
        title: 'Complementary probability',
        desc: 'The probability that A does NOT happen. Super useful for "at least once" problems!',
      },
      expected: {
        title: 'Expected value',
        desc: 'The "average" value over many repetitions. For a die: $E(X) = 3{,}5$ — you can never roll a 3.5, but on average this is the value you get.',
      },
    },
    examples: {
      dice: {
        title: 'Rolling an even number',
        context: 'How likely is an even number when you roll a die?',
        step1: 'The die has 6 sides — that is our $\\Omega$:',
        step2: 'Favorable outcomes (even numbers): 2, 4, 6 — that makes 3:',
        step3: 'Calculate the probability:',
        mia_comment: '50% — that is clear by intuition. But with more complex questions, the formula helps when intuition fails!',
      },
      loot: {
        title: 'At least one rare item',
        context: 'Mia wants to know: How likely is it to get at least one rare item in 10 loot drops?',
        step1: 'The probability of a rare item per drop is 5%:',
        step2: 'Use the complementary probability: First calculate that NO rare item comes in 10 drops:',
        step3: 'That is about 60% — in 60% of cases you get NO rare item:',
        step4: 'The complementary probability is the answer we are looking for:',
        mia_comment: 'A 40% chance of at least one rare item in 10 drops — that feels fair! If the players get frustrated, I just raise the drop rate.',
      },
    },
    realworld: {
      lootbox: {
        title: 'Gaming loot boxes',
        desc: 'Games like Fortnite or Genshin Impact use probabilities for their drop systems. In the EU the drop rates must be published — with math you can check whether buying is worth it.',
      },
      shuffle: {
        title: 'Spotify shuffle',
        desc: 'Spotify shuffle is not really random — because "real" randomness feels strange (sometimes the same song comes 3 times in a row). Spotify uses algorithms that "feel" more random.',
      },
      lottery: {
        title: 'Lottery odds',
        desc: '6 correct numbers in the lottery — sounds doable? The real probability is tiny:',
      },
    },
    mistakes: {
      addition: {
        wrong: 'Adding along paths instead of multiplying',
        correct: 'Multiply along a path',
        why: 'In a tree diagram you multiply along a path (AND link). You may only add when you combine different paths (OR link).',
        mia_warning: 'I made this mistake in the loot system. The drop rates were far too high, because I added instead of multiplying — every player had everything right away!',
      },
      percent: {
        wrong: 'Percentages over 100%',
        correct: 'The maximum is 100%',
        why: 'A probability can never be greater than 1 (= 100%). If your result is $P > 1$, you have made a calculation mistake.',
      },
    },
  },
};
