export const batch4 = {
  '10-lineare-funktionen': {
    story: {
      intro: 'Mia is putting together Harbor Lights level 4: Lumi has to jump onto a platform that drifts slowly and steadily to the right. "The movement is linear," Tim explains. "60 pixels per second — that\'s it." Mia types it in and immediately notices: this is just an ordinary straight-line equation. Starting position plus speed times time. Exactly what she took away from grade 9 — only more formal now: $f(x) = m \\cdot x + b$.',
      challenge: 'Mia has to tune Lumi\'s jump curve so that he lands exactly on the drifting platform. Slope of the platform movement and intersection with Lumi\'s path — all linear.',
      outro: 'A linear function has two dials: $m$ determines how steeply it runs, $b$ shifts it up or down. Mia now understands why she keeps needing it: platforms, energy consumption, health bars — wherever something increases or decreases by a constant amount "per step", the straight-line equation is the right tool.',
    },
    objectives: {
      recognize: 'Recognize linear functions from their term and from their graph',
      slope_intercept: 'Read the slope $m$ and the y-intercept $b$ from the standard form $f(x) = mx + b$',
      point_slope: 'Set up a line from a point and a slope using the point-slope form',
      two_points: 'Determine the equation of a line from two points — calculate the slope, then $b$',
    },
    explanation: {
      intro: 'A linear function describes a uniform relationship: when $x$ changes by one unit, $y$ always changes by the same amount. In the graph this produces a straight line. The general form is:',
      slope: 'The slope $m$ measures exactly this "amount per step". You get it from any two points on the line — difference in height divided by difference in width:',
      mia_tip: 'I think of Lumi\'s platform: it drifts exactly 60 pixels per second. That gives me $m = 60$ pixels/second. If Lumi starts at $b = 200$, the position after $t$ seconds is simply $f(t) = 60t + 200$. A linear function in the wild!',
      intercept: 'The y-intercept $b$ is the value where the line crosses the vertical axis. You read it straight off the graph — or you substitute $x = 0$ into the term:',
      point_slope: 'If you know a point $P(x_0 \\mid y_0)$ and the slope $m$, the quickest way to write the line is the point-slope form. From there you solve for $y$ and obtain the standard form:',
    },
    concepts: {
      normal_form: {
        title: 'Standard form $f(x) = mx + b$',
        desc: 'The default notation. $m$ is the slope, $b$ the y-intercept. You can read both parameters straight off the term — and both have a clear geometric meaning.',
      },
      slope: {
        title: 'Slope $m$',
        desc: 'Change in $y$ per unit of $x$. From two points: $m = \\frac{y_2 - y_1}{x_2 - x_1}$. Positive = rising, negative = falling, $m = 0$ = horizontal line.',
      },
      point_slope: {
        title: 'Point-slope form',
        desc: 'When a point $(x_0 \\mid y_0)$ and the slope $m$ are known: $y - y_0 = m(x - x_0)$. Handy, because you don\'t have to calculate $b$ separately — you just solve for $y$.',
      },
      parallel_perpendicular: {
        title: 'Parallel & perpendicular',
        desc: 'Two lines are parallel when they have the same slope ($m_g = m_h$). They are perpendicular to each other when the product of the slopes equals $-1$ ($m_g \\cdot m_h = -1$).',
      },
    },
    examples: {
      from_points: {
        title: 'Equation of a line from two points',
        context: 'Mia has two observation points from Lumi\'s platform path: $P_1(2 \\mid 1)$ and $P_2(5 \\mid 7)$. Which equation describes the movement?',
        step1: 'Write down the two given points:',
        step2: 'Calculate the slope — difference of the y-values divided by difference of the x-values:',
        step3: 'Set up the point-slope form with $P_1(2 \\mid 1)$ and $m = 2$, then solve for $y$:',
        step4: 'Finished equation in standard form:',
        mia_comment: 'A neat workflow: two points → slope → substitute → expand. If I have a third point later, I can use it to check whether my equation is right.',
      },
      intersection: {
        title: 'Intersection of two lines',
        context: 'The platform travels along $g\\colon y = 2x - 3$, Lumi\'s jump path along $h\\colon y = -x + 6$. Where do the two meet?',
        step1: 'Write down both line equations — same variable $x$, same variable $y$:',
        step2: 'At the intersection both $y$-values are equal. So: set the right-hand sides equal:',
        step3: 'Solve for $x$ — both $x$-terms on one side, constants on the other:',
        step4: 'Substitute the $x$-value into either equation to get the $y$-value. Intersection $S$:',
        mia_comment: 'In the game this intersection is exactly the hit frame. Once I know the moment $x = 3$, I know in which frame I have to trigger the collision.',
      },
    },
    realworld: {
      handytarif: {
        title: 'Mobile plan with a base fee',
        desc: 'The classic example: €9.99 base fee per month plus 10 cents per minute. The cost as a function of call time is a perfect straight line — $b$ is the base fee, $m$ the price per minute.',
      },
      taxi: {
        title: 'Taxi fare',
        desc: '€4 base fare when you get in, then €2.50 per kilometre. The total cost grows linearly with the distance travelled. Visible on every receipt.',
      },
      constant_speed: {
        title: 'Motion at constant speed',
        desc: 'A skater sets off at a steady $v$, starting at $s_0$. The distance covered after $t$ seconds: $s(t) = v \\cdot t + s_0$. A pure straight-line equation — only the variables have different names.',
      },
    },
    mistakes: {
      slope_inverted: {
        wrong: 'Slope upside down: $\\Delta x / \\Delta y$ instead of $\\Delta y / \\Delta x$',
        correct: 'Height (y) first, then width (x): $m = \\frac{\\Delta y}{\\Delta x}$',
        why: 'Slope describes "how much height per step" — so the $y$-change goes in the numerator, the $x$-change in the denominator. Flip the fraction and you get the reciprocal: $m = 2$ wrongly becomes $0.5$.',
        mia_warning: 'My trick: I think of a staircase. Height of the step divided by width of the step. Height is always on top of the fraction — just like on the stairs.',
      },
      intercept_zero: {
        wrong: 'Confusing the y-intercept with the root',
        correct: 'Root: set $f(x) = 0$ and solve for $x$',
        why: 'The y-intercept $b$ is the $y$-value at $x = 0$ — so it is a $y$-value. The root is the $x$-value where $f(x) = 0$. For $f(x) = 2x + 5$ we have $b = 5$, but the root is at $x = -2.5$.',
      },
    },
  },

  '10-kreis': {
    story: {
      intro: 'Mia is designing a rotating boss enemy for Harbor Lights. The boss is a whirling mill wheel with three arms — and Lumi has to jump through the gaps. "The hitbox has to be circular," says Tim. "Otherwise it looks off when Lumi grazes an arm that isn\'t anywhere near him." Mia needs the circumference, the area and the angle of each arm — pure circle geometry.',
      challenge: 'Mia has to program round hitboxes. On top of that the arc length each arm sweeps per second — otherwise the rotation speed will be wrong.',
      outro: 'With $U = 2\\pi r$ and $A = \\pi r^2$ Mia has the standard tools. And with radians she converts rotation angles directly into distances travelled — far quicker than the detour via $360°$. "Radians are the programming language of rotation," she notes.',
    },
    objectives: {
      umfang_flaeche: 'Calculate the circumference and area of a circle from its radius or diameter',
      bogenmass: 'Convert angles confidently between degrees and radians',
      sektor: 'Calculate the area and arc length of a sector from a given central angle',
      bogenlaenge: 'Determine arc lengths on the full circle and on a sector using both angle measures',
    },
    explanation: {
      intro: 'A circle is the set of all points at the same distance $r$ from the centre. From this single measure $r$ follow the circumference and the area — both with the famous constant $\\pi \\approx 3.14159$:',
      bogenmass: 'Instead of measuring angles in degrees, you can also use the corresponding arc length on the unit circle — that is called radian measure. A full circle has circumference $2\\pi r$, so $360°$ corresponds exactly to $2\\pi$. For every angle $\\alpha$ in radians:',
      mia_tip: 'Radians felt strange to me at first. But in code they are far more practical: when I write Math.cos(angle) in JavaScript, the function expects radians — not degrees. Forget that and you suddenly rotate sprites the wrong way.',
      umrechnung: 'The conversion runs through the ratio rule "$360° = 2\\pi\\,\\text{rad}$". That gives a fixed factor with which you turn degrees into radians and back:',
      sektor: 'A sector is a "slice of cake" of the circle. Its share of the area and of the circumference is exactly the share its central angle has of the full angle. With angle $\\alpha$ (in degrees or radians):',
    },
    concepts: {
      umfang: {
        title: 'Circumference $U$',
        desc: 'The length of the circle line. It depends linearly on the radius — double the radius means double the circumference. Using the diameter $d = 2r$ it is often written briefly as $U = \\pi d$.',
      },
      flaeche: {
        title: 'Area $A$',
        desc: 'The enclosed area. It depends quadratically on the radius — double the radius means four times the area. Important for all "how much material" and "how much content" problems.',
      },
      bogenmass: {
        title: 'Radian measure',
        desc: 'An angle measure that expresses the angle as an arc length on the unit circle. Full circle = $2\\pi$, semicircle = $\\pi$, right angle = $\\frac{\\pi}{2}$. The standard in calculus and in programming.',
      },
      sektor: {
        title: 'Circular sector',
        desc: 'A slice of cake: two radii plus the arc between them. Area and arc length are proportional quantities — the central angle as a fraction of $360°$ or $2\\pi$.',
      },
    },
    examples: {
      basics: {
        title: 'Circumference and area from the radius',
        context: 'Mia\'s rotating boss enemy has a radius of $5\\,\\text{cm}$ on screen. How large are its circumference and area?',
        step1: 'The radius is given:',
        step2: 'Substitute into the circumference: $U = 2\\pi r$ with $r = 5$. First exactly with $\\pi$, then rounded:',
        step3: 'Substitute into the area: $A = \\pi r^2$. Careful: square $r$ first, then multiply by $\\pi$:',
        mia_comment: 'At $r = 5$ the circumference ($\\approx 31$) and the area ($\\approx 79$) are completely different numbers. If I double the radius, the circumference doubles — but the area quadruples. That is the squaring effect.',
      },
      sektor: {
        title: 'Sector area and arc length',
        context: 'One arm of the boss enemy sweeps a sector with radius $12\\,\\text{cm}$ and central angle $60°$. What area and what arc length does that give?',
        step1: 'Radius and angle in degrees are given:',
        step2: 'Determine the sector\'s share of the full area — $\\frac{60°}{360°} = \\frac{1}{6}$:',
        step3: 'Calculate the sector area — exactly with $\\pi$, then rounded:',
        step4: 'Arc length: the same share $\\frac{1}{6}$ of the circumference $2\\pi r$:',
        mia_comment: 'The trick is always the same: share = $\\frac{\\alpha°}{360°}$. I multiply that by the full-circle quantity (area or circumference). Works for $30°$ just as well as for $137.5°$.',
      },
    },
    realworld: {
      pizza: {
        title: 'A pizza in 8 slices',
        desc: 'A pizza with radius $r$ is cut into 8 equal slices. Each slice is a sector with $\\frac{360°}{8} = 45°$ and area $\\frac{\\pi r^2}{8}$. A concrete application in every kitchen.',
      },
      uhr: {
        title: 'Clock hands as sectors',
        desc: 'In one hour the hour hand sweeps $30°$ ($\\frac{360°}{12}$), in one minute the minute hand sweeps $6°$ ($\\frac{360°}{60}$). Pure sector mathematics — also useful for angle problems involving clocks.',
      },
      riesenrad: {
        title: 'Ferris wheel arc length',
        desc: 'A gondola on the Hamburg Ferris wheel with radius $r$ covers the arc length $b = 2\\pi r \\cdot \\frac{t}{T}$ in time $t$ of a full revolution $T$. This also lets you work out the speed of the gondola.',
      },
    },
    mistakes: {
      unit_mix: {
        wrong: 'Putting degrees into radian formulas',
        correct: 'Before $b = \\alpha \\cdot r$, convert degrees to radians first',
        why: 'The formula $b = \\alpha \\cdot r$ only works when $\\alpha$ is in radians. For $\\alpha = 60°$, $b = 60 \\cdot r$ is massively wrong — correct would be $\\alpha = \\frac{\\pi}{3} \\approx 1.047$, so $b \\approx 1.047 \\cdot r$.',
        mia_warning: 'That is exactly what annoyed me when rotating sprites: I put in 60 instead of 1.047 — the boss spun 57 times too fast and shot straight off the screen!',
      },
      area_vs_circumference: {
        wrong: 'Calculating the area with the circumference formula ($A = 2\\pi r$)',
        correct: '$A = \\pi r^2$ — quadratic in $r$',
        why: 'Circumference and area are different quantities with different units ($\\text{cm}$ vs. $\\text{cm}^2$). $2\\pi r$ is linear, $\\pi r^2$ is quadratic. Mix them up and every follow-up calculation breaks — and the unit gives it away immediately.',
      },
    },
  },
};
