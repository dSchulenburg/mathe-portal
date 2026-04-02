export const batch1 = {
  '10-quad-gleichungen': {
    story: {
      intro: 'Mia got Lumi\'s jump curve working — but now she\'s stuck. In Level 3 of "Harbor Lights," Lumi has to land on a moving platform. "I need the exact moment when the jump curve hits the platform," Mia tells Tim. That means: She has to solve a quadratic equation. Not just draw the function, but actually solve for $x$.',
      challenge: 'Mia needs to calculate when Lumi\'s jump curve intersects the moving platform — which leads to a quadratic equation.',
      outro: 'Mia now has three methods in her toolkit: the quadratic formula, completing the square, and factoring. Depending on the equation, she picks the right method — and Lumi now lands precisely on every platform. "It\'s like a Swiss Army knife," she grins.',
    },
    objectives: {
      solve: 'Solve quadratic equations confidently and state the solution set',
      pq_formula: 'Apply the quadratic formula — including special cases (no solution or exactly one)',
      completing_square: 'Understand and perform completing the square as a solution method',
      factoring: 'Solve quadratic equations by factoring',
    },
    explanation: {
      intro: 'A quadratic equation has the general form with the highest exponent being 2. Unlike linear equations ($x$ to the power of 1), it can have zero, one, or two solutions. The general form is:',
      normal_form: 'For the quadratic formula, we need the standard form — meaning the coefficient of $x^2$ must be exactly 1. If it isn\'t, we divide the entire equation by $a$:',
      mia_tip: 'I remember: First, move everything to one side so that zero is on the right. Then divide by the coefficient of $x^2$. Only THEN can I use the quadratic formula!',
      pq_formula: 'The quadratic formula is the universal tool for quadratic equations in standard form. You read off $p$ and $q$ directly and substitute:',
      completing_square: 'Completing the square works like this: You transform the left side into a perfect square. To do this, you add $(\\frac{p}{2})^2$ to both sides. The result is an expression of the form $(x + \\frac{p}{2})^2$, which you can easily solve for $x$.',
      factoring: 'If you know (or can guess) the roots $x_1$ and $x_2$, the equation can be written as a product of two binomials. The product is zero when at least one factor is zero:',
    },
    concepts: {
      pq_formula: {
        title: 'Quadratic Formula (pq-Formula)',
        desc: 'The standard tool for quadratic equations in standard form. Always works — you only need $p$ (coefficient of $x$) and $q$ (constant term).',
      },
      completing_square: {
        title: 'Completing the Square',
        desc: 'You complete the left side to form a perfect square. Particularly useful when you also want to determine the vertex of a parabola.',
      },
      discriminant: {
        title: 'Discriminant',
        desc: 'The expression under the square root in the quadratic formula: $D > 0$ yields two solutions, $D = 0$ yields exactly one, $D < 0$ means no real solution.',
      },
      factoring: {
        title: 'Factoring',
        desc: 'Decomposition into two linear factors. Works especially elegantly when the roots are integers — then you can often guess them.',
      },
    },
    examples: {
      pq_application: {
        title: 'Solving an equation with the quadratic formula',
        context: 'Mia calculates when Lumi\'s jump curve hits the platform at $y = 0$.',
        step1: 'The equation is already in standard form (coefficient of $x^2$ is 1):',
        step2: 'We read off $p$ and $q$ — careful with the signs:',
        step3: 'Substitute the values into the quadratic formula and calculate step by step:',
        step4: 'Two solutions — Lumi hits the platform at two points:',
        mia_comment: 'Two solutions make sense: Lumi jumps up at $x = 1$ and lands back down at $x = 3$. The section in between is the flight!',
      },
      completing_square: {
        title: 'Solving by completing the square',
        context: 'Tim wants to solve the equation without the quadratic formula — as an alternative.',
        step1: 'We start with the equation in standard form:',
        step2: 'First, move the constant term to the right side:',
        step3: 'Now complete the square: add $(\\frac{6}{2})^2 = 9$ to both sides:',
        step4: 'The left side is now a perfect square — taking the square root gives two cases:',
        step5: 'Calculate both solutions:',
        mia_comment: 'Same equation, same solutions, different path. I use completing the square when I also need the vertex of the parabola — two birds with one stone!',
      },
    },
    realworld: {
      angry_birds: {
        title: 'Angry Birds & Projectile Parabolas',
        desc: 'Every throw in Angry Birds follows a parabola. The equation $h(t) = 0$ tells you when the object hits the ground. Physicists use the same formula for real projectile motion.',
      },
      breakeven: {
        title: 'Finding the Break-Even Point',
        desc: 'A company wants to know: At what quantity do we make a profit? The equation $G(x) = 0$ gives the break-even points — usually a quadratic equation.',
      },
      rocket: {
        title: 'Rocket Launches',
        desc: 'The height of a rocket after launch follows a quadratic function (as long as the fuel lasts). When does it reach 1000 m? Quadratic equation!',
      },
    },
    mistakes: {
      not_zero: {
        wrong: 'Using the quadratic formula without zero on the right side',
        correct: 'First move everything to one side',
        why: 'The quadratic formula requires the right side to be zero. For $x^2 + 3x = 5$, you must first add $-5$ to both sides to get $x^2 + 3x - 5 = 0$. Otherwise $q$ is wrong!',
        mia_warning: 'I once had this bug in my code — the platform collision was completely off because $q$ had the wrong sign. Always get zero on the right first!',
      },
      sign_pq: {
        wrong: 'Sign error with $p$ in the quadratic formula',
        correct: 'Pay attention to the minus before $\\frac{p}{2}$',
        why: 'The quadratic formula has $-\\frac{p}{2}$. For $x^2 - 6x + 8 = 0$, $p = -6$, so $-\\frac{-6}{2} = +3$. If you forget the minus, you get $-3$ instead of $+3$.',
      },
    },
  },

  '10-trigonometrie': {
    story: {
      intro: 'Mia is working on the lighthouse level of Harbor Lights. The lighthouse casts a light cone across the harbor, and Lumi has to hide in the shadows. "I need to calculate how far the light cone reaches at a given angle," says Mia. Tim points to a right triangle formed by the light cone and the ground. "That\'s trigonometry — sine, cosine, and tangent."',
      challenge: 'Mia needs the range of the light cone at different angles to program the shadow areas.',
      outro: 'The lighthouse rotates slowly, and the light cone sweeps across the harbor. Thanks to sine and cosine, Mia\'s code calculates in real time which areas are illuminated. Lumi sneaks from shadow to shadow — the level has become really exciting!',
    },
    objectives: {
      sin_cos_tan: 'Confidently apply sine, cosine, and tangent in right triangles',
      unit_circle: 'Understand the unit circle and read off values',
      angle_calculations: 'Calculate angles and side lengths using trigonometric functions',
      real_problems: 'Solve real-world problems with trigonometry (heights, distances, angles)',
    },
    explanation: {
      intro: 'Trigonometry connects angles with side lengths. In every right triangle, three fundamental ratios apply — named after the angle $\\alpha$ you\'re looking at:',
      mia_tip: 'My mnemonic: "SOH CAH TOA" — Sine = Opposite over Hypotenuse, Cosine = Adjacent over Hypotenuse, Tangent = Opposite over Adjacent. Sounds silly, but you\'ll never forget it!',
      unit_circle: 'The unit circle has radius 1 and its center at the origin. For every angle $\\alpha$, it directly provides the values: The $x$-coordinate is $\\cos(\\alpha)$, the $y$-coordinate is $\\sin(\\alpha)$. This means the following always holds:',
      special_angles: 'You should know certain angles by heart: $\\sin(30°) = 0{,}5$, $\\cos(60°) = 0{,}5$, $\\sin(45°) = \\cos(45°) = \\frac{\\sqrt{2}}{2} \\approx 0{,}707$. Tip: On the unit circle, you can read these values geometrically.',
    },
    concepts: {
      sine: {
        title: 'Sine',
        desc: 'The ratio of the opposite side to the hypotenuse. On the unit circle, $\\sin(\\alpha)$ corresponds to the $y$-coordinate of the point on the circle.',
      },
      cosine: {
        title: 'Cosine',
        desc: 'The ratio of the adjacent side to the hypotenuse. On the unit circle, $\\cos(\\alpha)$ corresponds to the $x$-coordinate. Cosine and sine are shifted by $90°$.',
      },
      tangent: {
        title: 'Tangent',
        desc: 'The ratio of the opposite side to the adjacent side — or equivalently $\\frac{\\sin(\\alpha)}{\\cos(\\alpha)}$. Ideal for slopes and angles of inclination.',
      },
      unit_circle: {
        title: 'Unit Circle',
        desc: 'A circle with radius 1. Every point on the circle has coordinates $(\\cos(\\alpha) \\mid \\sin(\\alpha))$. This allows sin and cos to be defined for all angles — not just acute ones.',
      },
    },
    examples: {
      height_tan: {
        title: 'Calculating height with tangent',
        context: 'Mia measures the angle to the lighthouse roof: $35°$. The distance to the tower is $50\\,\\text{m}$.',
        step1: 'Sketch: The distance is the adjacent side, the unknown height is the opposite side. So we use tangent:',
        step2: 'Solve for the height $h$ — multiply both sides by $50\\,\\text{m}$:',
        step3: 'Calculator (DEG mode!): substitute $\\tan(35°) \\approx 0{,}7002$ and compute:',
        mia_comment: 'In the game, this runs in real time: The angle of the light cone changes, and my code instantly calculates the new range. Tangent is perfect for this!',
      },
      unit_circle: {
        title: 'Reading values from the unit circle',
        context: 'Tim wants to show Mia how the unit circle works — using the example $60°$.',
        step1: 'Convert the angle (optional): $60°$ corresponds to $\\frac{\\pi}{3}$ in radians:',
        step2: 'Read off the sine value — the $y$-coordinate of the point on the unit circle:',
        step3: 'Read off the cosine value — the $x$-coordinate:',
        step4: 'The point on the unit circle therefore has the coordinates:',
        mia_comment: 'On the unit circle, I can see sin and cos as lengths. That makes it much more intuitive than just numbers in a table!',
      },
    },
    realworld: {
      compass: {
        title: 'Navigation & GPS',
        desc: 'Your smartphone calculates directions using trigonometry. The function atan2 converts $x$- and $y$-coordinates into an angle — that\'s how Google Maps knows which direction you need to go.',
      },
      building_height: {
        title: 'Measuring Building Heights',
        desc: 'Architects and surveyors measure building heights without climbing onto the roof. With a protractor and the tangent function, distance and angle are perfectly sufficient.',
      },
      music: {
        title: 'Tones & Sound Waves',
        desc: 'Every tone is a sine wave. Concert pitch A has 440 vibrations per second — described by $f(t) = \\sin(880\\pi t)$. Music is applied trigonometry!',
      },
    },
    mistakes: {
      sin_cos_swap: {
        wrong: 'Sine and cosine mixed up',
        correct: 'Sine = Opposite / Hypotenuse',
        why: 'Sine belongs to the opposite side (the side across from the angle), cosine to the adjacent side (the side next to the angle). If you mix them up, you get the wrong value.',
        mia_warning: 'This still happens to me sometimes! I draw the triangle and label the sides relative to the angle. Then I immediately see which is opposite and which is adjacent.',
      },
      deg_rad: {
        wrong: 'Wrong angle mode on the calculator',
        correct: 'Always check DEG mode for degree values',
        why: 'In RAD mode, the calculator interprets $90$ as $90$ radians (about $5156°$), not as $90°$. $\\sin(90°) = 1$, but $\\sin(90\\,\\text{rad}) \\approx 0{,}894$. Result: completely wrong.',
      },
    },
  },

  '10-exp-wachstum': {
    story: {
      intro: 'Harbor Lights is getting a multiplayer mode. Mia tests the servers with 10 players — everything runs smooth. But Tim warns: "What happens with 100? With 1000? If the game goes viral, the player count might double every few days." Mia does the math and is shocked: Exponential growth is much faster than you\'d think.',
      challenge: 'Server load doesn\'t grow linearly with players, but exponentially. Mia needs to predict when the servers will be overloaded.',
      outro: 'Mia has built a model that predicts player count growth. Thanks to the exponential function, she now knows: If the doubling time is 3 days, she\'ll need 32 times as much server capacity after 2 weeks. "Better to scale early than crash late," she decides.',
    },
    objectives: {
      exponential_functions: 'Recognize exponential functions and distinguish them from linear functions',
      growth_factor: 'Determine and interpret the growth factor from percentage values',
      half_life: 'Calculate and apply half-life and doubling time',
      model_real_world: 'Model real growth and decay processes with exponential functions',
    },
    explanation: {
      intro: 'With linear growth, the same amount is added at each step. With exponential growth, each step multiplies by the same factor. That sounds similar — but leads to completely different results:',
      growth_factor: 'The growth factor $b$ tells you everything: If something grows by $p\\%$ per time unit, the factor is greater than 1. If something decreases by $p\\%$ (decay), it\'s less than 1:',
      mia_tip: 'Linear functions add, exponential functions multiply. With 10% growth per day, the factor is $b = 1{,}10$ — after 7 days that\'s $1{,}10^7 \\approx 1{,}95$, almost doubling! That surprised me when planning server capacity.',
      half_life: 'The half-life $t_H$ is the time after which half remains. It\'s constant — no matter how much you start with. That\'s what\'s special about exponential decay:',
      doubling_time: 'The counterpart for growth: The doubling time $t_V$ tells you how long it takes for the value to double. It also stays constant:',
    },
    concepts: {
      exponential_function: {
        title: 'Exponential Function',
        desc: 'The general form: $a$ is the initial value, $b$ the growth factor, $t$ the time. The key point: the variable is in the exponent — that\'s what distinguishes it from power functions.',
      },
      growth_factor: {
        title: 'Growth Factor',
        desc: 'For $p\\%$ increase: $b = 1 + \\frac{p}{100}$. Example: 5% growth yields $b = 1{,}05$. For 12% decrease: $b = 0{,}88$.',
      },
      half_life: {
        title: 'Half-Life',
        desc: 'The time until a value halves. Typical for radioactive decay, medication in the body, or battery discharge. The half-life is independent of the starting value.',
      },
      euler_base: {
        title: 'Natural Exponential Function',
        desc: 'The base $e \\approx 2{,}718$ is special: the function $e^x$ is its own derivative. With $k > 0$ it grows, with $k < 0$ it decays. Standard in the natural sciences.',
      },
    },
    examples: {
      bacteria: {
        title: 'Bacterial Growth',
        context: 'A bacterial culture starts with 500 bacteria and doubles every hour.',
        step1: 'Identify the initial value and growth factor — doubling means factor 2:',
        step2: 'Set up the exponential function — $t$ counts the hours:',
        step3: 'Substitute $t = 5$ (after 5 hours): $2^5 = 32$:',
        step4: 'After 5 hours there are 16,000 bacteria:',
        mia_comment: 'From 500 to 16,000 in just 5 hours! That shows why exponential growth is so surprising. With servers it works similarly — player numbers can grow faster than you can order new servers.',
      },
      radioactive: {
        title: 'Radioactive Decay',
        context: 'A medication has a half-life of 8 days. Starting amount: 200 g.',
        step1: 'Note the half-life and starting value:',
        step2: 'Set up the decay formula with $t_H = 8$:',
        step3: 'Substitute 24 days — that\'s exactly 3 half-lives ($\\frac{24}{8} = 3$):',
        step4: 'After 24 days, only 25 g remain — one eighth of the starting value:',
        mia_comment: 'After each half-life, the amount halves: $200 \\to 100 \\to 50 \\to 25$. This is always the case, whether you start with 200 g or 2 tons.',
      },
    },
    realworld: {
      tiktok: {
        title: 'Viral TikTok Videos',
        desc: 'A viral video starts with 100 views. If each viewer shows it to 1.8 people, the numbers explode: After 10 rounds, there are already over 35,000 views. Algorithms amplify this effect even more.',
      },
      battery: {
        title: 'Battery Discharge',
        desc: 'Your phone battery loses about 5% of its charge per hour. After 14 hours, about half remains — that\'s not a linear decline, but exponential decay.',
      },
      pandemic: {
        title: 'Pandemic Spread',
        desc: 'COVID-19 showed what "exponential growth" means: Without countermeasures, case numbers doubled every 3 days. After one month, that would be a factor of $2^{10} = 1024$.',
      },
    },
    mistakes: {
      linear_vs_exp: {
        wrong: 'Using a linear model instead of exponential',
        correct: 'Percentage change = exponential function',
        why: '"5% growth per year" is NOT $+5$ per year, but $\\cdot 1{,}05$ per year. With a linear model, the amount grows constantly; with an exponential model, it grows ever faster.',
        mia_warning: 'I first calculated $\\text{Players}(t) = 100 + 50t$. The real numbers were 3x higher after one week! Exponential growth is almost always underestimated.',
      },
      wrong_growth_factor: {
        wrong: 'Using the percentage directly as the factor',
        correct: 'Factor = $1 + \\frac{p}{100}$',
        why: 'With 3% growth, the factor is $1{,}03$, not $3$! With $b = 3$, the value would triple instead of growing by 3%. Always calculate $1 + \\frac{p}{100}$.',
      },
    },
  },
};
